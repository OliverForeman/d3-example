export default (min, max) => {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil)) + minCeil;
};
