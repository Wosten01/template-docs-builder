export interface Theme {
  name: string;
  colors: {
    primary: string;
    background: string;
    backgroundHover: string;
    backgroundCopied: string;
    border: string;
    borderHover: string;
    borderCopied: string;
    text: string;
    shadow: string;
    shadowHover: string;
    shadowCopied: string;
    prompt: string;
  };
}

export const themes: Record<string, Theme> = {
  matrix: {
    name: "Matrix",
    colors: {
      primary: "#00ff88",
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
      backgroundHover: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
      backgroundCopied: "linear-gradient(135deg, #001a0a 0%, #002a15 50%, #001a0a 100%)",
      border: "rgba(0, 255, 136, 0.3)",
      borderHover: "rgba(0, 255, 136, 0.6)",
      borderCopied: "#00ff88",
      text: "#00ff88",
      shadow: "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      shadowHover: "0 12px 40px rgba(0, 255, 136, 0.2), inset 0 1px 0 rgba(0, 255, 136, 0.3)",
      shadowCopied: "0 8px 32px rgba(0, 255, 136, 0.25), inset 0 1px 0 rgba(0, 255, 136, 0.2)",
      prompt: "❯"
    }
  },
  cyberpunk: {
    name: "Cyberpunk",
    colors: {
      primary: "#ff0080",
      background: "linear-gradient(135deg, #1a0a1a 0%, #2a1a2a 50%, #1a0a1a 100%)",
      backgroundHover: "linear-gradient(135deg, #2a1a2a 0%, #3a2a3a 50%, #2a1a2a 100%)",
      backgroundCopied: "linear-gradient(135deg, #2a0a1a 0%, #3a1a2a 50%, #2a0a1a 100%)",
      border: "rgba(255, 0, 128, 0.3)",
      borderHover: "rgba(255, 0, 128, 0.6)",
      borderCopied: "#ff0080",
      text: "#ff0080",
      shadow: "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      shadowHover: "0 12px 40px rgba(255, 0, 128, 0.2), inset 0 1px 0 rgba(255, 0, 128, 0.3)",
      shadowCopied: "0 8px 32px rgba(255, 0, 128, 0.25), inset 0 1px 0 rgba(255, 0, 128, 0.2)",
      prompt: ">"
    }
  },
  ocean: {
    name: "Ocean",
    colors: {
      primary: "#00d4ff",
      background: "linear-gradient(135deg, #0a1a2a 0%, #1a2a3a 50%, #0a1a2a 100%)",
      backgroundHover: "linear-gradient(135deg, #1a2a3a 0%, #2a3a4a 50%, #1a2a3a 100%)",
      backgroundCopied: "linear-gradient(135deg, #0a2a3a 0%, #1a3a4a 50%, #0a2a3a 100%)",
      border: "rgba(0, 212, 255, 0.3)",
      borderHover: "rgba(0, 212, 255, 0.6)",
      borderCopied: "#00d4ff",
      text: "#00d4ff",
      shadow: "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      shadowHover: "0 12px 40px rgba(0, 212, 255, 0.2), inset 0 1px 0 rgba(0, 212, 255, 0.3)",
      shadowCopied: "0 8px 32px rgba(0, 212, 255, 0.25), inset 0 1px 0 rgba(0, 212, 255, 0.2)",
      prompt: "$"
    }
  },
  sunset: {
    name: "Sunset",
    colors: {
      primary: "#ff6b35",
      background: "linear-gradient(135deg, #2a1a0a 0%, #3a2a1a 50%, #2a1a0a 100%)",
      backgroundHover: "linear-gradient(135deg, #3a2a1a 0%, #4a3a2a 50%, #3a2a1a 100%)",
      backgroundCopied: "linear-gradient(135deg, #3a2a0a 0%, #4a3a1a 50%, #3a2a0a 100%)",
      border: "rgba(255, 107, 53, 0.3)",
      borderHover: "rgba(255, 107, 53, 0.6)",
      borderCopied: "#ff6b35",
      text: "#ff6b35",
      shadow: "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      shadowHover: "0 12px 40px rgba(255, 107, 53, 0.2), inset 0 1px 0 rgba(255, 107, 53, 0.3)",
      shadowCopied: "0 8px 32px rgba(255, 107, 53, 0.25), inset 0 1px 0 rgba(255, 107, 53, 0.2)",
      prompt: "#"
    }
  },
  minimal: {
    name: "Minimal",
    colors: {
      primary: "#666666",
      background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
      backgroundHover: "linear-gradient(135deg, #e9ecef 0%, #f8f9fa 50%, #e9ecef 100%)",
      backgroundCopied: "linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 50%, #e8f5e8 100%)",
      border: "rgba(102, 102, 102, 0.3)",
      borderHover: "rgba(102, 102, 102, 0.6)",
      borderCopied: "#28a745",
      text: "#333333",
      shadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      shadowHover: "0 4px 16px rgba(0, 0, 0, 0.15)",
      shadowCopied: "0 4px 16px rgba(40, 167, 69, 0.2)",
      prompt: "$"
    }
  }
};

export const defaultTheme = 'matrix';