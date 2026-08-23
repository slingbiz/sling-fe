const deepMerge = (base, override) => {
  if (override === undefined || override === null) {
    return base;
  }
  if (
    typeof override !== 'object' ||
    Array.isArray(override) ||
    typeof base !== 'object' ||
    base === null ||
    Array.isArray(base)
  ) {
    return override;
  }
  const out = {...base};
  Object.keys(override).forEach((key) => {
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }
    out[key] = deepMerge(base[key], override[key]);
  });
  return out;
};

const mergeInitConfig = (apiConfig, defaults) => {
  return deepMerge(defaults || {}, apiConfig || {});
};

module.exports = {mergeInitConfig, deepMerge};
