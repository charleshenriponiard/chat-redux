export default function (state, action) {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case 'SELECT_MESSAGE':
      return action.payload;
    case 'CREATE_MESSAGE':
      return action.payload;
    default:
      return state;
  }
}
