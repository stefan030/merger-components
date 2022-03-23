import { createContext, useState, useMemo, useContext } from "react";
import { NavigationItem } from "./types";

type NavigationState = {
  globalSelected: string | null;
  setGlobalSelected: React.Dispatch<React.SetStateAction<string | null>>;
  navigationItems: NavigationItem[];
};

type Props = {
  defaultGlobalSelected?: string;
  navigationItems: NavigationItem[];
};

const NavigationContext = createContext<NavigationState | undefined>(undefined);

export const NavigationBarProvider: React.FC<Props> = ({
  children,
  defaultGlobalSelected,
  navigationItems,
}) => {
  // Using memo to prevent re-rendering as it's the dependency of providerObject

  // const defaultGlobalNavigationLink = navigationLinks[0];

  const [globalSelected, setGlobalSelected] = useState<string | null>(
    defaultGlobalSelected || null
  );

  const providerObject = useMemo(
    () => ({
      navigationItems,
      globalSelected,
      setGlobalSelected,
    }),
    [navigationItems, globalSelected, setGlobalSelected]
  );

  return (
    <NavigationContext.Provider value={providerObject}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigation must be used within NavigationContextProvider"
    );
  }

  return context;
};
