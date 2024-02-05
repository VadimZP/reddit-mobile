import { createContext } from "react";

import { Cookies } from "@react-native-cookies/cookies";

interface IUserContext {
  user: Cookies | undefined;
  setUser: ((cookies: Cookies | undefined) => void) | undefined;
}

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: undefined
});
