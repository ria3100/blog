import dayjs from 'dayjs';
import 'dayjs/locale/ja';

export const DateFormat = {
  basic: 'YYYY-MM-DD',
  dateTime: 'YYYY.MM.DD HH:mm:ss',
} as const;

export function dateFormat(
  date: Date | number,
  format?: keyof typeof DateFormat
): string {
  return dayjs(date).format(DateFormat[format ?? 'basic']);
}
