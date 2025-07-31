import { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const useAction = (
  action: (prevState: unknown, formData: FormData) => Promise<TResponse<unknown>>,
  initialState: unknown,
  onSuccess?: ((res: TResponse<unknown>) => Promise<void> | void) | null | undefined,
  onError?: ((res: TResponse<unknown>) => Promise<void> | void) | null | undefined,
  disableError?: boolean,
) => {
  const [response, formAction, isPending] = useActionState(action, initialState);
  const res = response as TResponse<unknown>;

  useEffect(() => {
    if (!res) return;

    if (!res.success) {
      if (disableError) return;

      if (onError) {
        console.log(res);
        onError(res);
      } else {
        toast.error(
          <div>
            {res.errors?.map((err, index) => (
              <span key={`err-${index}`} className="block">
                {err}
              </span>
            ))}
          </div>,
        );
      }
    }

    if (res.success && onSuccess) onSuccess(res);
  }, [response]);

  return { response: res, formAction, isPending };
};

export default useAction;
