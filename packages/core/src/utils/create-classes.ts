export const createClasses = (defaultClass: string, classNamesMap: Record<string, boolean>): string => {
  let result = defaultClass;

  for (const classname in classNamesMap) {
    if (classNamesMap[classname]) {
      result += ' ' + classname;
    }
  }

  return result;
};
