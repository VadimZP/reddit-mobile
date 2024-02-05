import { useEffect, useState } from "react";
import { Alert } from "react-native";

import { Cookies } from "@react-native-cookies/cookies";

import getCookies from "../getCookies";

function useUser() {
  const [user, setUser] = useState<undefined | Cookies>();

  useEffect(() => {
    async function setCookies() {
      try {
        const cookies = await getCookies();

        setUser(cookies);
      } catch (error) {
        Alert.alert(
          "Oops...",
          "Something went wrong with authentication process",
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK" }
          ]
        );

        setUser(undefined);
      }
    }

    setCookies();
  }, []);

  return { user, setUser };
}

export default useUser;
