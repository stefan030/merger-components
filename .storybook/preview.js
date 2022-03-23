import { ResetStyles, GlobalStyles } from "@dfds-ui/react-components";

export const decorators = [
  (Story) => (
    <>
      <ResetStyles />
      <GlobalStyles />
      <div style={{ backgroundColor: "transparent" }}>
        <Story />
      </div>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
