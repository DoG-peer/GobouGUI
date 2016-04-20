import Actions from '../actions';
export const items = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      return [...state, {text: action.text}];
    default:
      return state;
  }
};
