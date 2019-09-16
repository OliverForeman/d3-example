export default (arr1, arr2) => {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
};
