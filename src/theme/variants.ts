import { Themes } from "../enums";
import type { VariantType } from "./theme.types";

export const matrixVariant: VariantType = {
  name: Themes.Matrix,
  fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
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
  name: Themes.Ocean,
  fontFamily: "'Roboto Mono', 'Source Code Pro', 'Monaco', monospace",
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

export const minimalLightVariant: VariantType = {
  name: Themes.MinimalLight,
  fontFamily: "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
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

export const minimalDarkVariant: VariantType = {
  name: Themes.MinimalDark,
  fontFamily: "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
  palette: {
    mode: "dark",
    primary: {
      main: "#e0e0e0",
      contrastText: "#000000",
    },
    secondary: {
      main: "#b0b0b0",
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#e0e0e0",
      secondary: "#b0b0b0",
    },
  },
  header: {
    color: "#e0e0e0",
    background: "#1e1e1e",
    search: {
      color: "#b0b0b0",
    },
    indicator: {
      background: "rgba(224, 224, 224, 0.2)",
    },
  },
  footer: {
    color: "#e0e0e0",
    background: "#1e1e1e",
  },
  sidebar: {
    color: "#e0e0e0",
    background: "#1e1e1e",
    header: {
      color: "#e0e0e0",
      background: "#121212",
      brand: {
        color: "#b0b0b0",
      },
    },
    footer: {
      color: "#e0e0e0",
      background: "#121212",
      online: {
        background: "#4caf50",
      },
    },
    badge: {
      color: "#000000",
      background: "#e0e0e0",
    },
  },
};

export const blueLightVariant: VariantType = {
  name: Themes.BlueLight,
  fontFamily: "'Poppins', 'Nunito', 'Open Sans', sans-serif",
  palette: {
    mode: "light",
    primary: {
      main: "#6366f1",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ec4899",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  header: {
    color: "#1e293b",
    background: "#ffffff",
    search: {
      color: "#64748b",
    },
    indicator: {
      background: "rgba(99, 102, 241, 0.2)",
    },
  },
  footer: {
    color: "#1e293b",
    background: "#ffffff",
  },
  sidebar: {
    color: "#1e293b",
    background: "#ffffff",
    header: {
      color: "#1e293b",
      background: "#f8fafc",
      brand: {
        color: "#6366f1",
      },
    },
    footer: {
      color: "#1e293b",
      background: "#f8fafc",
      online: {
        background: "#10b981",
      },
    },
    badge: {
      color: "#ffffff",
      background: "#6366f1",
    },
  },
};

export const greenLightVariant: VariantType = {
  name: Themes.GreenLight,
  fontFamily: "'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif",
  palette: {
    mode: "light",
    primary: {
      main: "#4caf50",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#81c784",
      contrastText: "#000000",
    },
    background: {
      default: "#f1f8e9",
      paper: "#ffffff",
    },
    text: {
      primary: "#2e7d32",
      secondary: "#388e3c",
    },
  },
  header: {
    color: "#2e7d32",
    background: "#ffffff",
    search: {
      color: "#388e3c",
    },
    indicator: {
      background: "rgba(76, 175, 80, 0.2)",
    },
  },
  footer: {
    color: "#2e7d32",
    background: "#ffffff",
  },
  sidebar: {
    color: "#2e7d32",
    background: "#ffffff",
    header: {
      color: "#2e7d32",
      background: "#f1f8e9",
      brand: {
        color: "#4caf50",
      },
    },
    footer: {
      color: "#2e7d32",
      background: "#f1f8e9",
      online: {
        background: "#66bb6a",
      },
    },
    badge: {
      color: "#ffffff",
      background: "#4caf50",
    },
  },
};

export const purpleDarkVariant: VariantType = {
  name: Themes.PurpleDark,
  fontFamily: "'Fira Sans', 'Roboto', 'Helvetica Neue', sans-serif",
  palette: {
    mode: "dark",
    primary: {
      main: "#a855f7",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#c084fc",
      contrastText: "#000000",
    },
    background: {
      default: "#0f0a1a",
      paper: "#1a1625",
    },
    text: {
      primary: "#e9d5ff",
      secondary: "#c4b5fd",
    },
  },
  header: {
    color: "#e9d5ff",
    background: "#1a1625",
    search: {
      color: "#c4b5fd",
    },
    indicator: {
      background: "rgba(168, 85, 247, 0.3)",
    },
  },
  footer: {
    color: "#e9d5ff",
    background: "#1a1625",
  },
  sidebar: {
    color: "#e9d5ff",
    background: "#1a1625",
    header: {
      color: "#e9d5ff",
      background: "#0f0a1a",
      brand: {
        color: "#a855f7",
      },
    },
    footer: {
      color: "#e9d5ff",
      background: "#0f0a1a",
      online: {
        background: "rgba(168, 85, 247, 0.6)",
      },
    },
    badge: {
      color: "#ffffff",
      background: "#a855f7",
    },
  },
};


const variants: VariantType[] = [
  minimalLightVariant,
  minimalDarkVariant,
  blueLightVariant,
  greenLightVariant,
  purpleDarkVariant,
  matrixVariant,
  oceanVariant,
];

export default variants;
