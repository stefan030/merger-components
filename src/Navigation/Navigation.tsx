import GlobalNavigation from "./GlobalNavigation/GlobalNavigation";
import ContextualNavigation from "./ContextualNavigation/ContextualNavigation";
import { NavigationBarProvider } from "./NavigationContext";
import { NavigationItem } from "./types";

type Props = {
  navigationItems: NavigationItem[];
  defaultGlobalSelected: string;
};

const Navigation = ({ navigationItems, defaultGlobalSelected }: Props) => {
  return (
    <NavigationBarProvider
      navigationItems={navigationItems}
      defaultGlobalSelected={defaultGlobalSelected}
    >
      <GlobalNavigation />
      {/* <ContextualNavigation /> */}
    </NavigationBarProvider>
  );
};

export default Navigation;
