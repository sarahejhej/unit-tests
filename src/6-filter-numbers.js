export const filterNumbers = (array, largerThan) => {
  array = array.filter(element => element <= largerThan);
  return array;
};
