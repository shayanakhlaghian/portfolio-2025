import { z } from 'zod';

import { AppError, formDataToObject } from '.';

export const catchAction =
  <T>(
    fn: (data: Record<string, any>) => Promise<TResponse<T>>,
    schema?: z.ZodObject<any, any>,
    refineData?: (data: Record<string, any>) => Promise<Record<string, any>>,
  ): ((prevState: unknown, formData: FormData) => Promise<TResponse<T>>) =>
  async (prevState: unknown, formData: FormData) => {
    try {
      const data = formDataToObject(formData);
      let refinedData: Record<string, any> | undefined = undefined;
      refinedData = await refineData?.(data);

      if (schema) schema.parse(refinedData || data);

      return await fn(refinedData || data);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          success: false,
          errors: error.issues.map(({ message }) => message),
        };
      } else if (error instanceof AppError) {
        return {
          success: false,
          errors: [error.message],
        };
      } else {
        console.log('CATCH ACTION ERROR: ', error);
        return {
          success: false,
          errors: ['Something went wrong.'],
        };
      }
    }
  };
