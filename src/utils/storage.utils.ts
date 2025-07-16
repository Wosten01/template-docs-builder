const storage = window.localStorage;

const getItem = (key: string): unknown => {
  let item: unknown = null;
  try {
    const notParsedItem = storage.getItem(key);
    if (notParsedItem) {
      item = JSON.parse(notParsedItem);
    }
  } catch {
    // Do nothing
  }
  return item;
};

const setItem = (key: string, value: unknown) => {
  storage.setItem(key, JSON.stringify(value));
};

const removeItem = (key: string) => {
  storage.removeItem(key);
};

export const storageUtils = {
  getItem,
  setItem,
  removeItem,
};
