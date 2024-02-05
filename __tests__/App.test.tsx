import "react-native";
import React from "react";

import { it } from "@jest/globals";
import { render } from "@testing-library/react-native";

describe("App component", () => {
  it("renders auth page when authentication failed", async () => {
    require("react");

    jest.mock("react", () => jest.requireActual("react"));

    jest.mock("@react-native-cookies/cookies", () => {
      return {
        get: () => Promise.resolve(null)
      };
    });

    let App;
    jest.isolateModules(() => {
      App = require("../App").default;
    });

    const view = render(<App />);

    expect(await view.findByText(/sign in/i)).toBeOnTheScreen();
  });

  it("renders home page when authentication succeed", async () => {
    require("react");

    jest.mock("react", () => jest.requireActual("react"));

    jest.mock("@react-native-cookies/cookies", () => {
      return {
        get: () => Promise.resolve({ user: { userId: { value: "5" } } })
      };
    });

    let App;
    jest.isolateModules(() => {
      App = require("../App").default;
    });

    const view = render(<App />);

    expect(await view.findByText(/create post/i)).toBeOnTheScreen();
  });
});
