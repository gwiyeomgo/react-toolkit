import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const getToday = (dateFormat?: string): string => {
  return dayjs()
    .tz('UTC')
    .format(dateFormat || 'YYYY-MM-DDTHH:mm:ss[Z]');
};
