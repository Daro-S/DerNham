import dayjs from 'dayjs';

export const getSelectTimes = () => {
  return [...Array(24)]
    .map((_, i) => `${dayjs().format('YYYY-MM-DD')} ${i + 1}:00:00`)
    .map(day => ({
      day: day,
      time: dayjs(day, 'HH:mm:ss').format('hh:mm A'),
    }));
};

export const dateFormat = (date: string | number | dayjs.Dayjs | Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const getCurrentDate = () => {
  return dateFormat(dayjs());
};

export const convertTime24To12 = (time: string) => {
  return dayjs(`${getCurrentDate()} ${time}`).format('hh:mm A');
};

export const convertTime12To24 = (time: string) => {
  return dayjs(`${getCurrentDate()} ${time}`).format('HH:mm');
};
