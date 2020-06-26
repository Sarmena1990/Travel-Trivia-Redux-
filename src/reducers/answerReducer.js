export default (state = [], action) => {
  if (action.type === 'SELECTED_ANSWER') {
    return [action.payload, ...state];
  }
  return state;
};
