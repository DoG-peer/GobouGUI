export const ADD_ITEM = 'ADD_ITEM';

export const addItem = text => {
  return {
    type: ADD_ITEM,
    text: text
  };
};
