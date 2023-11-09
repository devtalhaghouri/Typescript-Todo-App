export const setLocalStorage = (key: string, value: string[]) => {
  const storage = JSON.stringify(value);
  return storage ? localStorage.setItem(key, storage) : null;
};

export const getLocalStorage = (key: string) => {
  const storage = localStorage.getItem(key);
  return storage ? JSON.parse(storage) : null;
};

export const removeLocalStorage = (key: string) => {
  const storage = localStorage.getItem(key);
  return storage ? localStorage.removeItem(storage) : null;
};
