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
const startTimeSelector = state => state.timer.startTime;
const stopTimeSelector = state => state.timer.stopTime;
export const elapsedTimeSelector = createSelector(
  startTimeSelector,
  (startTime, currTime) => currTime - startTime
);

// Actions
export const startTimer = now => ({
  type: START_TIMER,
  now
});

export const stopTimer = now => ({
  type: STOP_TIMER,
  now
});

export const elapsedTime = () => ({
  type: ELAPSED_TIME,
  time
});

export const resetTimer = () => ({
  type: RESET_TIMER
});

// Utils

