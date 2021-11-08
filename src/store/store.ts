import { autorun, makeAutoObservable } from 'mobx';
import { initialState } from '../constants/const';
import {
  Board, Category, Comments, Note, PlaceHolder, Property, Tag, User,
} from '../types/types';
import {
  createBoard, userAuth, updateBoard, deleteBoard,
} from '../requests/requests';
import {
  createBoardTemplate, createCalendarData,
  createCategoryTemplate, createComment,
  createNoteTemplate,
  createPropertyTemplate, createTagTemplate,
  deleteAllCookies, getMonth,
  insert, isUserUsePhone,
} from '../utils/utils';

export class Store {
  user: User = initialState;

  isLoading = false;

  selectedNote: null | Note = null;

  selectedBoardId: string = '';

  isNoteOpen = false;

  searchedQuery = '';

  tagFilter: Tag | null = null;

  calendar = createCalendarData();

  isUserUsePhone = isUserUsePhone();

  constructor() {
    makeAutoObservable(this, {

    }, {
      deep: true,
      autoBind: true,
    });
  }

  selectBoard(boardId: string) {
    this.tagFilter = null;
    this.selectedBoardId = boardId;
  }

  setSearchQuery(query: string) {
    this.searchedQuery = query;
  }

  get searchedCategories() {
    if (this.selectedBoard) {
      return this.selectedBoard.categories
        .map((category) => ({
          ...category,
          notes: category.notes.filter((note) => new RegExp(this.searchedQuery).test(note.title)),
        }));
    }
  }

  get selectedMonth() {
    const month = getMonth();
    return this.calendar[0].months[month];
  }

  get notesFilterdByTag() {
    if (this.tagFilter && this.selectedBoard) {
      return this.selectedBoard.categories
        .map((category) => ({
          ...category,
          notes: category
            .notes.filter((note) => note.tags.some((element) => element.id === this.tagFilter!.id)),
        }));
    }
  }

  get selectedBoard() {
    return this.user.boards.find((board: Board) => board.id === this.selectedBoardId);
  }

  get selectedCategories() {
    if (this.tagFilter) {
      return this.notesFilterdByTag;
    } if (this.searchedQuery) {
      return this.searchedCategories;
    }
    return this.selectedBoard!.categories;
  }

  get isAuth() {
    return !!this.user.login;
  }

  get tags() {
    const tags: Tag[] = [];
    if (this.selectedBoard) {
      this.selectedBoard.categories.forEach((category) => {
        category.notes.forEach((note) => {
          note.tags.forEach((tag) => {
            if (tags.every((element) => element.id !== tag.id)) {
              tags.push(tag);
            }
          });
        });
      });
      return tags;
    }
  }

  openNote() {
    this.isNoteOpen = true;
  }

  closeNote() {
    this.isNoteOpen = false;
  }

  logOut() {
    this.user = initialState;
    deleteAllCookies();
  }

  async deleteCategory(category: Category) {
    if (this.selectedBoard) {
      this.selectedBoard.categories = this.selectedBoard.categories
        .filter((categoryElement) => category.id !== categoryElement.id);
    }
  }

  setTegFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  unselectTagFilter() {
    this.tagFilter = null;
  }

  async changeNotePlace(placeHolder: PlaceHolder) {
    const selectedCategory = this.selectedBoard!.categories
      .find((category) => category.id === placeHolder.categoryId);
    const opendCategory = this.selectedBoard!.categories
      .find((category) => category.notes.some((el) => el.id === this.selectedNote?.id));

    if (selectedCategory && opendCategory && this.selectedNote) {
      this.selectedNote.status = selectedCategory.name;
      opendCategory.notes = opendCategory.notes.filter((elementNote) => elementNote.id !== this.selectedNote!.id);
      selectedCategory.notes = insert(selectedCategory.notes, placeHolder.index, this.selectedNote);
    }
  }

  async createNewBoard() {
    const board = createBoardTemplate('Goals');
    this.user.boards.push(board);
    await createBoard(board, this.user._id);
  }

  async createNewNote(category: Category) {
    const selectedCategory = this.selectedBoard!.categories.find((categoryElement) => category.id === categoryElement.id);
    if (selectedCategory) {
      selectedCategory.notes.push(createNoteTemplate(category.name));
    }
  }

  async addProperty() {
    if (this.selectedNote) {
      this.selectedNote.properties.push(createPropertyTemplate());
    }
  }

  async deleteProperty(property: Property) {
    if (this.selectedNote) {
      this.selectedNote.properties = this.selectedNote.properties.filter((propertyElement) => property.id !== propertyElement.id);
    }
  }

  async addComment(note: Note, title: string) {
    if (this.selectedNote) {
      this.selectedNote.comments.push(createComment(title));
    }
  }

  async deleteComment(comment: Comments) {
    if (this.selectedNote && this.selectedBoard) {
      this.selectedNote.comments = this.selectedNote.comments.filter((commentElement) => comment.id !== commentElement.id);
    }
  }

  async addTag(title: string) {
    if (this.selectedBoard && this.selectedNote && this.tags) {
      const tag = this.tags.find((element) => element.title === title);
      this.selectedNote.tags.push(tag ?? createTagTemplate(title));
    }
  }

  async deleteTag(tag: Tag) {
    if (this.selectedNote && this.selectedBoard) {
      this.selectedNote.tags = this.selectedNote.tags.filter((tagElement) => tagElement.id !== tag.id);
    }
  }

  async changePropertyTitle(title: string, property: Property) {
    const selectedProperty = this.selectedNote?.properties.find(
      (propertyElement) => propertyElement.id === property.id,
    );
    if (this.selectedBoard && selectedProperty) {
      selectedProperty.title = title;
    }
  }

  async changePropertyValue(value: string, property: Property) {
    const selectedProperty = this.selectedNote?.properties.find(
      (propertyElement) => propertyElement.id === property.id,
    );
    if (this.selectedBoard && selectedProperty) {
      selectedProperty.value = value;
    }
  }

  async deleteNote(note: Note) {
    const category = this.selectedBoard!.categories.find(
      (categoryElement) => categoryElement.notes.some((el) => el.id === note.id),
    );
    if (category && this.selectedBoard) {
      category.notes = category.notes.filter((el) => el.id !== note.id);
    }
  }

  async updateCategoryTitle(title: string, category: Category) {
    const selectedCategory = this.selectedBoard!.categories.find(
      (categoryElement) => category.id === categoryElement.id,
    );
    if (this.selectedBoard && selectedCategory) {
      selectedCategory.name = title;
      selectedCategory.notes = selectedCategory.notes.map((note) => ({ ...note, status: title }));
    }
  }

  async createNewCategory() {
    if (this.selectedBoard) {
      this.selectedBoard.categories.push(createCategoryTemplate());
    }
  }

  async updateBoardTitle(title: string) {
    if (this.selectedBoard) {
      this.selectedBoard.name = title;
    }
  }

  async updateNoteTitle(title: string) {
    if (this.selectedNote && this.selectedBoard) {
      this.selectedNote.title = title;
    }
  }

  async authorize() {
    this.isLoading = true;
    const user = await userAuth();
    this.isLoading = false;
    if (user) {
      this.selectedBoardId = user.boards[0].id;
      this.user = user;
    }
  }

  async deleteBoard(board: Board) {
    if (this.selectedBoard) {
      this.user.boards = this.user.boards.filter((boardElement) => board.id !== boardElement.id);
      this.selectedBoardId = this.user.boards[0].id;

      await deleteBoard(this.user._id, board.id);
    }
  }

  selectNote(note: Note) {
    this.selectedNote = note;
  }

  unselectNote() {
    this.selectedNote = null;
  }
}
export const store = new Store();

autorun(async () => {
  if (store.selectedBoard) {
    await updateBoard(store.selectedBoard);
  }
});
