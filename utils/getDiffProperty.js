export function getDiffProperty(init, filter) {
  let diff = Object.keys(init).reduce((diff, key) => {
    if (init?.[key] === filter?.[key] || filter?.[key] === undefined) return diff;
    return {
      ...diff,
      [key]: filter?.[key],
    };
  }, {});
  return diff;
}
