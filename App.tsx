import React from "react";

import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { AppNavigator } from "./navigation/AppNavigator";
import useUser from "./utils/hooks/useUser";
import { UserContext } from "./utils/userContext";

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const { user, setUser } = useUser();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ user, setUser }}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
              <AppNavigator isSignedIn={!!user} />
            </NavigationContainer>
          </ApplicationProvider>
        </UserContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
