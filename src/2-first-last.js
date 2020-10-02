export const firstLast = items => {
  //const index = items.length;
  if (items.length === 0) {
    return 'No items!';
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`;
  } else {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`;
  }
};
//should return the first and last items from an array with two items

// should return the first and last items from an array with many items

// Should only return the first item if the array only has one item

// Should return "No items!" if the array is empty
