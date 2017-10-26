import { createSelector } from 'reselect';

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const ELAPSED_TIME = 'ELAPSED_TIME';
export const RESET_TIMER = 'RESET_TIMER';

const initialState = () => ({
  startTime: undefined,
  stopTime: undefined,
  elapsedTime: undefined
});

export default function timerReducer(state = initialState(), action = {}) {
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
    case ELAPSED_TIME:
      return {
        ...state,
        elapsedTime: action.time
      };
    case RESET_TIMER:
      return initialState();
    default:
      return state;
  }
}

// Selectors
const timerSelector = state => state.timer;
export const elapsedTimeSelector = createSelector(
  timerSelector,
  t => t
);

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

export function elapsedTime() {
  return {
    type: ELAPSED_TIME,
    time
  };
}

export function resetTimer() {
  return {
    type: RESET_TIMER
  };
}
