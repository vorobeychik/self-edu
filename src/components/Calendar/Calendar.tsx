import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Calendar.module.css';
import { store } from '../../store/store';

const Calendar = observer(() => {
  // TODO  implement this component
  const days = store.selectedMonth.days.map((day) => <p className={styles.day}>{day}</p>);

  return (
    <div className={styles.calendar}>
      <p>{store.calendar[0].name}</p>
      <p>{store.selectedMonth.name}</p>
      <div className={styles.days_container}>
        {days}
      </div>
    </div>
  );
});

export default Calendar;
