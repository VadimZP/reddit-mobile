import { AxiosError } from "axios";

function throwOnError(error: unknown) {
  if (error instanceof AxiosError && error.response) {
    return error.response.status >= 500;
  }

  return false;
}

export default throwOnError;
