const initialState = () => ({
  startTime: undefined,
  stopTime: undefined
});

export default function timerReducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        startTime: action.now
      };
    case STOP_TIMER:
      return {
        ...state,
        stopTime: action.now
      };
    case RESET_TIMER:
      return initialState();
    default:
      return state;
  }
}
