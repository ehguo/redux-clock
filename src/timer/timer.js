export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';

const initialState = () => ({
  startTime: undefined,
  stopTime: undefined
});

export default function timerReducer(state = initialState(), action) {
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

export function startTimer(now) {
  return {
    type: START_TIMER,
    now
  };
}

export function stopTimer(now) {
  return {
    type: STOP_TIMER,
    now
  };
}

export function resetTimer() {
  return {
    type: RESET_TIMER
  };
}
