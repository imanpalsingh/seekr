/**
 * Expands a terse object with multiple keys sharing same values to a JS compatible object
 * @param object terse object
 * @param separator separator that separates multiple keys from the single key
 * @returns expanded object
 */
export const expand = <T>(object: Record<string, T>, separator = ', ') => {
  return Object.keys(object).reduce((obj, key) => {
    key.split(separator).forEach((subkey) => {
      obj[subkey] = object[key];
    });
    return obj;
  }, {} as Record<string, T>);
};

/**
 * Applies "expand" utility to each object in the array.
 * @param objects array of terse objects
 * @param separator
 * @returns array of expanded objects
 */
export const expandEach = <T>(
  objects: Record<string, T>[],
  separator = ', '
) => {
  return objects.map((obj) => expand(obj, separator));
};

/**
 * Gets a value in the object selected by a dot path
 * @param obj Object
 * @param path Dot path string
 * @returns Selected field
 */
export const getPath = <T extends Object>(object: T, path: string) => {
  return path
    .split('.')
    .filter((key) => key.length)
    .reduce((parent, key) => parent?.[key], object);
};
