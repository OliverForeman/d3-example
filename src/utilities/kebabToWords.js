export default str => {
  let string = str.split('-');
  string = string.map(word => word.slice(0, 1).toUpperCase() + word.slice(1));
  return string.join(' ');
};
