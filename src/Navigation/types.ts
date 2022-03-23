// Contextual navigation with single link or dropdown (children links)
export type NavigationItem = {
  title: string;
  text: string;
  childrenCollection?: {
    items: Link[] | NavigationItem[] | undefined;
  };
};

export type TestType = {
  title?: string;
  childrenCollection?: Link[] | TestType[] | undefined;
};

// Link without dropdown that can be used inside of contextual navigation
export type Link = {
  title?: string;
  text?: string;
};
