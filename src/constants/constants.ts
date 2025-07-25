import FORM_FIELDS_CONFIG_DATA from "../../configurations/form-fields-config.json";
import CONTENT_DATA from "../configs/content-data";

const LOCAL_STORAGE_KEYS = {
  STORAGE_KEY: "form-fields-state",
  THEME_KEY: "documentation-theme",
  SELECTED_LANGUAGE: "selected_language",
  TEMPLATES_ACCORDION: "templates-accordion-expanded",
  SETTINGS_ACCORDION: "settings-accordion-expanded",
  SECTION_EXPANDED_PREFIX: "section-expanded-", 
  STEPS_PREFIX: "steps-",
};


export const CONFIG_CONSTANTS = {
  FORM_FIELDS_CONFIG_DATA: FORM_FIELDS_CONFIG_DATA,
  CONTENT: CONTENT_DATA,
  LOCAL_STORAGE_KEYS,
};

