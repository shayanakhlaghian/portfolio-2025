type TResponse<T> = {
  success: boolean;
  message?: string;
  total?: number;
  data?: T | T[];
  errors?: string[];
};
