export const getSessionStorageValues = async <T>(
  name: string,
  defaultValues: T
): Promise<T> => {
  const storedValues = sessionStorage.getItem(name);
  if (!storedValues || storedValues === 'undefined') {
    return defaultValues;
  }
  const values = await JSON.parse(storedValues);
  return values as T;
};

export const setSessionStorageValues = (values: never, name: string) => {
  sessionStorage.setItem(name, JSON.stringify(values));
};
