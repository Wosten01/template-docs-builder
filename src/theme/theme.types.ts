export type MainContrastTextType = {
  main: string;
  contrastText: string;
};

export type ColorBackgroundType = {
  color: string;
  background: string;
};

export type VariantType = {
  name: string;
  fontFamily?: string;
  palette: {
    mode: "dark" | "light";
    primary: MainContrastTextType;
    warning: MainContrastTextType;
    secondary: MainContrastTextType;
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };
  header: ColorBackgroundType & {
    search: {
      color: string;
    };
    indicator: {
      background: string;
    };
  };
  footer: ColorBackgroundType;
  sidebar: ColorBackgroundType & {
    header: ColorBackgroundType & {
      brand: {
        color: string;
      };
    };
    footer: ColorBackgroundType & {
      online: {
        background: string;
      };
    };
    badge: ColorBackgroundType;
  };
};
