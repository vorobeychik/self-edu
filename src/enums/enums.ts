export enum Colors{
  Purple = '#e8deee',
  Blue = '#d3e5ef',
  Pink = '#f5e0e9',
  Red = '#ffe2dd',
  Green = '#dbeddb',
  Yellow = '#fdecc8',
  Orange = '#fadec9',
  Brown = '#eee0da',
  Gray = '#e3e2e0',
  LightGray = '#eee0da',
}

export enum ProgressStatus{
  ToDo = 'To Do',
  InProgress = 'In progress',
  Done = 'Done',
}

export enum Months{
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}

export enum Icons{
  User = 'data:image/png;base64,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',
  Close = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYhJREFUaEPtmN1NxDAQhHfTAFfClUAJ5MV10BF0QBmR8pIW6ADRwV0FRkGJFFn44tmfg4i913PG8+1svEmYDv7jg/unAPjtBCOBSEBZgWghZQHVl0cC6hIqBf53AtM0nfq+v2iKqNUQJzCO43PO+YWZ+5TSuwTCQkMEsGz8tpi+SCAsNOb9YYBhGM5d130UFYcgCvPfUsz8mVI6o0nCAPMGPxkgoiaIyrVXZn6StKIIQAphbV7UQtuIkSQ8zKsBWpPwMm8CsAdBRI855/XEWgMU93x5k4vvgVKo1k5EdCrWmpk3S2A1WIHY+jc1bw5wo53mv8zN3xugaU7cZZDVNmloIXMI75v4SkQPmseOvURMAG6d85Vj1CwJNUDLkEIm9l7FTedAi/mdI1adhDgBxLwnhAhAYt4LAgaovNBAQ+qvvdBA5itJiDRUk3ip4qv0TWrz2KHSgFtoe4xpP4nMWloNFQB6ZnusDwCPqiKakQBSLY+1kYBHVRHNSACplsfaSMCjqojm4RP4AkgNVEAG+PcwAAAAAElFTkSuQmCC',
  LeftArrow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAphJREFUaEPtmcFt20AQRWdIgDrGHcSpIO4g1oVLneJUEKkCyxVErsByBVY6cE7k8iKngjgVROnAPkoAOcEIIrBmltxlEIkjwLyKhP6bvzt/uEQ48guPXD+8AvTtoBgH8jy/JKIZF6Qsy0+j0ejBpzi9AyyXy5PNZnMHABeG4JVS6p14AK01i2bxJ3WxSimv4nrd5FOJLvdw1dfr9Q0ijpueEwuQpul5EARc9dM2aJEAWusbAJj6uCUKIM/zMyLiqp9ZxP/kpUREP8zfxABorb8AwLY91i8iuk2SZOuI1ppEAaRpehqG4R0RndeFI+LvoijGZq8XBWCE0l/tEQC+RlE0HQ6HTyaYCICGUKp0PgPAWCl1b1tOvQO0hRIAfIuiaFyvuggHHKH0zPNNkiRzV+vsxQFHKH0vy5I36solvpcu5Aila6WUtXU2wRzMAZ9QiuP40afqB98DvqHUVfzel1DXUBIF4GiP1lCSBvDLMvq2hpIogDzPV0T0tiaKx4BJU6qKAtgtoQUAvLFMk4vBYHDVlrC+MHtto7yJgyBgiA8WQauyLCe+pwi95oDWmsOJ53vbNVdKXflWvH7fXh0w/2wXZOzGe4vYR0SciA0yU3CWZXNEvGyo+Ewpdd3FjYM5YIriYS4Mw4WlSwEiPhRFwXtD5jBXgexeYnhc/myp+BMizuI4vnW50YsDtWGMT9ms7RYA7qMomoh8oTEhdm4wxEebG23h17sDtQ0+5aXTJfxEATBM1/ATB1A54ht+YgEYxCf8xB4tdgi/F/tezNlovRu1hZ95r1gAFukIvy2HaABjgzeG31EAGG68CD8+vY7juPULTlWEXr6R2eaiLMuq8OPPrBe+L0hiAFzDXtPvrwD/Wrn/9dzRO/AHHHKkQH7yGyQAAAAASUVORK5CYII=',
  Menu = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAKxJREFUaEPt1sENgDAMBMFQXWpOddABfowsZHT8z7F3HeBaw59reP8rA3xtMAZiAAlkhRAgx2OAEWKB/xs459wIieJ771fIpYEMQPzXigEE2B4v70B7B3hABkCAHI8BRogFSgP5kCHhfMjGrxBuQHu8vMTtHeABGQABcjwGGCEWKA2Mf41mAFyR/EogwPZ4eYnbO8ADMgAC5HgMMEIsEAMIkOMxwAixQAwgQI4/6jowMdUBv+wAAAAASUVORK5CYII=',
  Search = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA0FJREFUaEPtWNFZGzEMlsgA7QaFCZpMUHixkidggsIEkA3oBKUTABM0eUrsF2CChgmabhAGwOon6st3dXy5851DEr749Sz7/yVZ+k8IW75wy/HDjsC6I1grAsaYNjMfI+IhM38EgLYjMkHEGTM/IOJQKTVZNcEoAlrrrwBwBQD7FYFNAaBPRIOK+6O3VSIwGo32W63WDTMfRt8AAIj48PLyct7r9YRQ0lVKwKXLPQBIqjRZM0Q8Sp1WSwk48L8KUN+JZwFgkoGS/fIemPkEAI5DdojYSUmikICkzd7enoD3PT+01l6WpYOzvw4QmVlrO2X2VUNdSMAYc+/nPDP3u92ugKq8xuPxJSJ+zxtI5JRSR5UPWbIxSMAYc8bMN3m7OuAz+xAJADhNUZ2CBLTWv71SOSQiyevaS2stpTT/LqZEdFD7QGe4QCD0cK21B01z1r0Jccx8pXjQCwTG4/E1Il7k7rkjorOmnhL7QBS+EZE0xtprgYDWWkrjl+xERDxXSt3WviFnGHhbj0RUqznO8fnAtNZSOjNtI100Wd0OpOeEiDpNnBOKAOcPJKLSbh0DQGud9Px3SUAk8OfcG1hZCiHiH6VUVWUbDPT7e8SBMtq4iWWue5My+paNzFp71Ov1pGzXXkVaaMrMn3KnDojotPYt/5rYTwCYy5EU+S94irSQXCQXzldqMZeqQRbWeL8jv7JFvFRK/YiJhDHmgpl9Cd64Axd24uyDE19SUj94gAfW2n6ZuHP28h/gq9hna227zL6qk5r8Uoo8HiDiU/6XkpmlhwjoIvktP/ZXRHRXFeSyfaUywVUlqRR+JGLvf3Yzo6w4JCFSSkBQunQQRTpXqZHoH621Z61WSwZh//3pAUAjIpUI5BrRCSJeeyW2kIuUSkmXvBw3xvgl+tWemW+73e55pGPqDXddWkmOi5aXqUWmnZ4AYAYAMlochMYnof/tDHQdElERiPVO0f6iKNSJxLoILEw9vKZZOZ3WQkDAaq2lKMiwOLiqptPaCKQisVYCKUisnUBTEhtBoIzEMuW6MQSKSJTJ7o0i4JMoA/8q8VM1p5TnSIl1I/jSieBGEohxxo5AjLdWsXcXgVV4NebMrY/AX8ho0UBV7VMVAAAAAElFTkSuQmCC',
  File = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZhJREFUaEPtmd9NxDAMxj/fAsAE3AZ0ikZ9ghFgA9iADWADGAGeqmQJboRjAsoCCYpUpF4Fl6RxG4rc19qxf5+dP0oIK/9o5flDAEpXMKoCbdtuN5vNA4AKwHZi0h0R3dV1/TzR/0e3IECf/BuAU47ARHTDCREE0Fq/ALjkSP57DE6IGIAPLvWHInBBxAC4YWClVNBnaK+1PvDnhggmM06AE8DD5FaiOEAuxOIAXnHn3NN4UZhaicUBfAsaY665IIoAePW5IIoBcEEUBeCAWBwgZUePmdh/GgBAp5Q6OwY9O4AxZu+cO09RPmXnnx1Aa30F4B7AxRSI0M4/O0Bq0qlHFwFIVThkLxUYK5SqSEjh0P/UeDIHQoqm/pcKyBxI7ZmRvbSQtJC00OFFmJxGU1eFzA5Cajw5SuQqnrvqSQXWUIEOwAl3ojHjEdF7XddH3+RiWoj9iSkm+d7mVSnlbzV+/YIA/SPfrkAVPq21VdM0+ywA79xDPBJRlXNJFaO8bxvn3M5aextK3o8XrEBM0JI2AlBS/X/RQl/avWVAG3BjuwAAAABJRU5ErkJggg==',
  Plus = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAALFJREFUaEPtltEKgCAMRfWzpO8PP6voJcIQr44Ri9Or23Ln3slyCv7l4PdPNPC1giiAAkYCWMgI0JyOAj2Ete7H86yUzQWWS9Hr4jQgTgcKMAOiVXphWAgLYSEjASxkBCi/Qu1qYPzvMF3dnWhgiHIxAAUWwd1prNMiQXmIxXooMAsKBVglZj3TxGMhLISFjAR+ayEnLq+ybq8QDYgEUEAE5RaGAm5oxcIoIIJyCwuvwAn8Z3Ax1Na59QAAAABJRU5ErkJggg==',
  Bin = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAX5JREFUaEPtmc1Nw0AQhd+4AeiA0EE4blwElAKVQClQhOPccAlOBSQNeNAijKxIZmZnbSOLyXXn733Pkz0sYeU/Wvn8cAF/7WCWA3Vdb4i6Z2ZsAWwSxbREaJiLpxBCm5j7E24W8D38OzOurc1jHhFOzMWdVYRZwH5fvRLhPmf4PpcZb7td+WCpZRZwOFQfufQHA7chlLeLCqjriocNQyiTYOTm972Tmg4Hzh0gN98F5BLMzRcduGxgWbApc8Z2bHQHXMCU+AH8PwcuAU61dGPGWOur7wFrA+2XZK3vArSEpTh3YC5CUt3+3B2QSFkJSXXdgbkJzV3f7wEtYSnOumPugERWe+4OSKSshKS6fg/MTWju+v4vpCUsxVl3zB2QyGrP3QGJlJWQVHfJe+AE4Eo7UGbcMYRS9eamXuIpn5QkcSlPTmoB8VEP6JoFXDgDxVb76KcWEKlFEczdC9HXs+qNRDLx/MiMhqh41A4f6ycJSBxokXAXsAjmX5qs3oFPtAg0QEoTdDIAAAAASUVORK5CYII=',
  Comment = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYtJREFUaEPtWUFuwjAQnA1SxZEn0B/Qo/GJF7RPoD+gL+EJpT9oX5CTY25NfwAvKNzoha2QqAQJjY2cyk61ucbrnfHO7iZrQscf6jh+CIHYEbwYAWvtkGg/Z8YIwDAyyBURSubsSSm1qmKpETiCf2fGIDLwM/dE2DBnd1USNQJFYV6JcJ8S+B8szHgbj/XDKbYageXSfKZ2+ieAV0rp20YC1ho+XaCUjlqpXHgu5IAQaDV9JAKSA4GCEgmJhERCzX1JGlmgQpzmUoWkCjlF0rxAJCQSEglJI5N/4qAskDL678qotWZKhMPcNMboca2UPpvVen9O53k+6Pdv5gCmQaIOMPYaLV5KGmPMqNfD83FaHQAhyHQLZCPncLdKAMBjRMkcGK+ZURJlM8/x+nnn++XMPvZ7TLXWZdCZtmDszIG6D3rZ7b5mk8lk04L/4C2uIbAFMFNKL4K9triBL4FkJONxxVTNgbQkcw2BJCXjSyBZyXgQKBYpVRlXvke9/3KB83kvBHxO6S/XdD4C35EZUUDvkZ9DAAAAAElFTkSuQmCC',
  LogOut = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcpJREFUaEPtWdFNxDAMdW4BbgOOCShLNOoXbMCNAJPABjACfFXOT9mAG+HY4PjtR4KCUqkXVXWudaCB9KtSE9vPfi+1YgGJPyLx+CED+O0K5gr8qQrUdb1ZrVYPAFAAwIYJ3B4Adlrr+6qq7PvRw0YhF/w7AKyZAvfNHLTWVz4INgCI+AIA15GC78y+Silv+j44ARwA4CwygL2U8iIWANM3LKVkSQ4ijtplcWIDpxxNrQxlNwPoMktlKlfAZcDX1v+kECI+Sym3fVokQaGmadZt2za2VfBLuXgASqnCGGOD/24VuM55StxUYoI0oJTaGmOeYvyoogOwfAeAW9/R4ivQ5/tQlhYNwOc7VeY536lEnKyBIb7PCZDamwEMZchR6O0H+nvyOD6ZQh0gJ2IL4jI5EXstQprHaB9E0j+yDoivC+r0oE6f0O+TNTDkoK+L5Jo5XxdJttNjZadKHUoZfx1lN6gbDXFOOQqxMbSGspsB5FsJgluZQqHiQ8Tol7tCiI+yLI/mDpwiTvt63Q04dhFb8E+tdRFtwGGp5kA8CiHsFcx5KP3G1lnaGGPsiOku6oiJI9gpNtg0MMU5x54MgCOLc2zkCszJHsfeL9sgVED5NnzvAAAAAElFTkSuQmCC',
}