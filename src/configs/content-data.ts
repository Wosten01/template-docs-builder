import fallbackContentData from "../../configurations/content.json";
import type { DocumentationRaw } from "../utils";

let CONTENT_DATA: Record<string, DocumentationRaw> = {};

try {
  const modules = import.meta.glob("/configurations/locales/**/content.json", {
    eager: true,
  });

  for (const path in modules) {
    const langMatch = path.match(/locales\/([^/]+)\/content\.json$/);
    if (langMatch) {
      const lang = langMatch[1];
      const mod = modules[path];
      const data =
        mod && typeof mod === "object" && "default" in mod
          ? (mod as { default: DocumentationRaw }).default
          : (mod as DocumentationRaw);
      CONTENT_DATA[lang] = data;
    }
  }
  if (Object.keys(CONTENT_DATA).length === 0) {
    CONTENT_DATA = fallbackContentData as Record<string, DocumentationRaw>;
  }
} catch (e) {
  console.error(e);
  CONTENT_DATA = fallbackContentData as Record<string, DocumentationRaw>;
}

export default CONTENT_DATA
