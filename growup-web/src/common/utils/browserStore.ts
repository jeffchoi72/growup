const BrowserStore = () => {
  const store = localStorage || {};

  return {
    set: (key: string, object: any) => {
      store[key] = typeof object === "string" ? object : JSON.stringify(object);
    },
    get: (key: string): string | null => {
      if (!store[key]) {
        return null;
      }

      const value = store[key];

      try {
        const parsed = JSON.parse(value);
        return parsed;
      } catch (error) {
        return value;
      }
    },
    remove: (key: string) => {
      if (localStorage) {
        return localStorage.removeItem(key);
      }

      delete store[key];
    }
  };
};

export default BrowserStore();
