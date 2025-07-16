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
    primary: MainContrastTextType;
    secondary: MainContrastTextType;
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
    primary: {
      main: "#00ff88",
      contrastText: "#000000"
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#00ff88"
    }
  },
  header: {
    color: "#00ff88",
    background: "#0f0f0f",
    search: {
      color: "#00ff88"
    },
    indicator: {
      background: "rgba(0, 255, 136, 0.3)"
    }
  },
  footer: {
    color: "#00ff88",
    background: "#0f0f0f"
  },
  sidebar: {
    color: "#00ff88",
    background: "#1a1a1a",
    header: {
      color: "#00ff88",
      background: "#0f0f0f",
      brand: {
        color: "#00ff88"
      }
    },
    footer: {
      color: "#00ff88",
      background: "#0f0f0f",
      online: {
        background: "rgba(0, 255, 136, 0.6)"
      }
    },
    badge: {
      color: "#000000",
      background: "#00ff88"
    }
  }
};

export const cyberpunkVariant: VariantType = {
  name: "Cyberpunk",
  palette: {
    primary: {
      main: "#ff0080",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#ff0080"
    }
  },
  header: {
    color: "#ff0080",
    background: "#1a0a1a",
    search: {
      color: "#ff0080"
    },
    indicator: {
      background: "rgba(255, 0, 128, 0.3)"
    }
  },
  footer: {
    color: "#ff0080",
    background: "#1a0a1a"
  },
  sidebar: {
    color: "#ff0080",
    background: "#2a1a2a",
    header: {
      color: "#ff0080",
      background: "#1a0a1a",
      brand: {
        color: "#ff0080"
      }
    },
    footer: {
      color: "#ff0080",
      background: "#1a0a1a",
      online: {
        background: "rgba(255, 0, 128, 0.6)"
      }
    },
    badge: {
      color: "#ffffff",
      background: "#ff0080"
    }
  }
};

export const oceanVariant: VariantType = {
  name: "Ocean",
  palette: {
    primary: {
      main: "#00d4ff",
      contrastText: "#000000"
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#00d4ff"
    }
  },
  header: {
    color: "#00d4ff",
    background: "#0a1a2a",
    search: {
      color: "#00d4ff"
    },
    indicator: {
      background: "rgba(0, 212, 255, 0.3)"
    }
  },
  footer: {
    color: "#00d4ff",
    background: "#0a1a2a"
  },
  sidebar: {
    color: "#00d4ff",
    background: "#1a2a3a",
    header: {
      color: "#00d4ff",
      background: "#0a1a2a",
      brand: {
        color: "#00d4ff"
      }
    },
    footer: {
      color: "#00d4ff",
      background: "#0a1a2a",
      online: {
        background: "rgba(0, 212, 255, 0.6)"
      }
    },
    badge: {
      color: "#000000",
      background: "#00d4ff"
    }
  }
};

export const sunsetVariant: VariantType = {
  name: "Sunset",
  palette: {
    primary: {
      main: "#ff6b35",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#ff6b35"
    }
  },
  header: {
    color: "#ff6b35",
    background: "#2a1a0a",
    search: {
      color: "#ff6b35"
    },
    indicator: {
      background: "rgba(255, 107, 53, 0.3)"
    }
  },
  footer: {
    color: "#ff6b35",
    background: "#2a1a0a"
  },
  sidebar: {
    color: "#ff6b35",
    background: "#3a2a1a",
    header: {
      color: "#ff6b35",
      background: "#2a1a0a",
      brand: {
        color: "#ff6b35"
      }
    },
    footer: {
      color: "#ff6b35",
      background: "#2a1a0a",
      online: {
        background: "rgba(255, 107, 53, 0.6)"
      }
    },
    badge: {
      color: "#ffffff",
      background: "#ff6b35"
    }
  }
};

export const minimalVariant: VariantType = {
  name: "Minimal",
  palette: {
    primary: {
      main: "#666666",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#333333",
      contrastText: "#ffffff"
    }
  },
  header: {
    color: "#333333",
    background: "#f8f9fa",
    search: {
      color: "#666666"
    },
    indicator: {
      background: "rgba(102, 102, 102, 0.3)"
    }
  },
  footer: {
    color: "#333333",
    background: "#f8f9fa"
  },
  sidebar: {
    color: "#333333",
    background: "#ffffff",
    header: {
      color: "#333333",
      background: "#f8f9fa",
      brand: {
        color: "#666666"
      }
    },
    footer: {
      color: "#333333",
      background: "#f8f9fa",
      online: {
        background: "#28a745"
      }
    },
    badge: {
      color: "#ffffff",
      background: "#666666"
    }
  }
};

const variants: VariantType[] = [
  matrixVariant,
  cyberpunkVariant,
  oceanVariant,
  sunsetVariant,
  minimalVariant
];

export default variants;
