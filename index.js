exports.reactSort = function (arr, field, type) {
  if (type === "desc") {
    return arr.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  } else {
    return arr.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }
};
