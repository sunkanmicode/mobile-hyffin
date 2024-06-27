

import * as React from "react";
import { NavigationContainerRef } from "@react-navigation/native";

// Define the type for the navigation reference
type RootNavigation = NavigationContainerRef<
  Record<string, object | undefined>
>;

// Create the navigation reference
export const navigationRef = React.createRef<RootNavigation>();

// Define the navigate function with TypeScript
export const navigate = (name: string, params?: object | undefined) => {
  if (navigationRef.current && navigationRef.current.isReady()) {
    navigationRef.current.navigate(name, params);
  }
};

