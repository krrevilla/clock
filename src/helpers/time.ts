import {format} from 'date-fns';

export const to12hClock = (hour: number): number => {
  return hour > 12 ? hour - 12 : hour;
};

type TimeObject = {
  day: string;
  monthDate: string;
  hours: number;
  minutes: number;
  seconds: number;
};

export const getTime = (): TimeObject => {
  const date = new Date();
  const hours = (to12hClock(date.getHours()) / 12) * 360;
  const minutes = (date.getMinutes() / 60) * 360;
  const seconds = (date.getSeconds() / 60) * 360;

  const monthDate = format(date, 'd');
  const day = format(date, 'E');

  return {hours, minutes, seconds, monthDate, day};
};
