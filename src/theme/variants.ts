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
  palette: {
    mode: "dark" | "light"
    primary: MainContrastTextType;
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

export const matrixVariant: VariantType = {
  name: "Matrix",
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff88",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#00ff88",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#00ff88",
      secondary: "#66ff99",
    },
  },
  header: {
    color: "#00ff88",
    background: "#0f0f0f",
    search: {
      color: "#00ff88",
    },
    indicator: {
      background: "rgba(0, 255, 136, 0.3)",
    },
  },
  footer: {
    color: "#00ff88",
    background: "#0f0f0f",
  },
  sidebar: {
    color: "#00ff88",
    background: "#1a1a1a",
    header: {
      color: "#00ff88",
      background: "#0f0f0f",
      brand: {
        color: "#00ff88",
      },
    },
    footer: {
      color: "#00ff88",
      background: "#0f0f0f",
      online: {
        background: "rgba(0, 255, 136, 0.6)",
      },
    },
    badge: {
      color: "#000000",
      background: "#00ff88",
    },
  },
};


export const oceanVariant: VariantType = {
  name: "Ocean",
  palette: {
    mode: "dark",
    primary: {
      main: "#00d4ff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#00d4ff",
    },
    background: {
      default: "#051015",
      paper: "#1a2a3a",
    },
    text: {
      primary: "#00d4ff",
      secondary: "#66e6ff",
    },
  },
  header: {
    color: "#00d4ff",
    background: "#0a1a2a",
    search: {
      color: "#00d4ff",
    },
    indicator: {
      background: "rgba(0, 212, 255, 0.3)",
    },
  },
  footer: {
    color: "#00d4ff",
    background: "#0a1a2a",
  },
  sidebar: {
    color: "#00d4ff",
    background: "#1a2a3a",
    header: {
      color: "#00d4ff",
      background: "#0a1a2a",
      brand: {
        color: "#00d4ff",
      },
    },
    footer: {
      color: "#00d4ff",
      background: "#0a1a2a",
      online: {
        background: "rgba(0, 212, 255, 0.6)",
      },
    },
    badge: {
      color: "#000000",
      background: "#00d4ff",
    },
  },
};


export const minimalVariant: VariantType = {
  name: "Minimal",
  palette: {
     mode: "light",
    primary: {
      main: "#666666",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#333333",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f8f9fa",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  header: {
    color: "#333333",
    background: "#f8f9fa",
    search: {
      color: "#666666",
    },
    indicator: {
      background: "rgba(102, 102, 102, 0.3)",
    },
  },
  footer: {
    color: "#333333",
    background: "#f8f9fa",
  },
  sidebar: {
    color: "#333333",
    background: "#ffffff",
    header: {
      color: "#333333",
      background: "#f8f9fa",
      brand: {
        color: "#666666",
      },
    },
    footer: {
      color: "#333333",
      background: "#f8f9fa",
      online: {
        background: "#28a745",
      },
    },
    badge: {
      color: "#ffffff",
      background: "#666666",
    },
  },
};

const variants: VariantType[] = [
  matrixVariant,
  oceanVariant,
  minimalVariant,
];

export default variants;