import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formDataToObject = <T extends Record<string, any> = Record<string, any>>(
  formData: FormData,
): T => {
  const obj = {} as Record<string, any>;

  for (const [key, value] of formData.entries()) {
    const val = value instanceof File ? value : value.toString();

    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // if existing value is not an array, convert it
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(val);
    } else {
      obj[key] = val;
    }
  }

  return obj as T;
};
