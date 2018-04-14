

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'events_fetch':
      console.log(action);
      return state;
    default:
      return state;
  }
};
