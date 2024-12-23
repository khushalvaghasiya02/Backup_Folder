import moment from 'moment';

type DateFormatProps = {
  date: Date | string;
  format?: string;
};

export const DateFormate = ({date, format}: DateFormatProps): string => {
  return moment(date).format(format);
};
