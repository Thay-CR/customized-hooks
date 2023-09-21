import { useState, useEffect } from 'react';
import { DateCalculator } from './types';


export function useDateCalculator(initialDays: number = 0): DateCalculator {
  const [today, setToday] = useState<Date | null>(new Date());
  const [tomorrow, setTomorrow] = useState<Date | null>(null);
  const [yesterday, setYesterday] = useState<Date | null>(null);
  const [futureDate, setFutureDate] = useState<Date | null>(null);
  const [pastDate, setPastDate] = useState<Date | null>(null);
  const [daysToChange, setDaysToChange] = useState<number>(initialDays);
  const [businessDay, setBusinessDay] = useState<Date | null>(new Date())

  useEffect(() => {
    const nextDay = new Date(today?.getTime() as number);
    nextDay.setDate((today?.getDate() as number) + 1);
    setTomorrow(nextDay);

    const prevDay = new Date(today?.getTime() as number);
    prevDay.setDate((today?.getDate() as number) - 1);
    setYesterday(prevDay);

    if (daysToChange > 0) {
      const futureDay = new Date(today?.getTime() as number);
      futureDay.setDate((today?.getDate() as number) + daysToChange);
      setFutureDate(futureDay);
    } else {
      setFutureDate(null);
    }

    if (daysToChange < 0) {
      const pastDay = new Date(today?.getTime() as number);
      pastDay.setDate((today?.getDate() as number) + daysToChange);
      setPastDate(pastDay);
    } else {
      setPastDate(null);
    }
  }, [today, daysToChange]);

  function getNextBusinessDay(currentDate: Date): Date {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    let nextDate = new Date(currentDate.getTime() + oneDayInMilliseconds);
    while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
      nextDate = new Date(nextDate.getTime() + oneDayInMilliseconds);
    }
    return nextDate;
  }

  function getNextBusinessDaysFromDate(date: Date, days: number): Date {
    let nextDate = new Date(date.getTime());
    for (let i = 0; i < days; i++) {
      nextDate = getNextBusinessDay(nextDate);
    }
    setBusinessDay(nextDate)
    return nextDate;
  }

  return {
    today,
    tomorrow,
    yesterday,
    futureDate,
    pastDate,
    businessDay,
    setDaysToChange,
    getNextBusinessDaysFromDate,
  };
}

export default useDateCalculator;
