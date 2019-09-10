export default str => {
  str = str.split('-');
  str = str.map(word => word.slice(0, 1).toUpperCase() + word.slice(1));
  return str.join(' ');
};
