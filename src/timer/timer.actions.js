import * as types from './timer.types';

export function startTimer() {
  return {
    type: types.START_TIMER,
    now: new Date().getTime()
  };
}

export function stopTimer() {
  return {
    type: types.STOP_TIMER,
    now: new Date().getTime()
  };
}

export function resetTimer() {
  return {
    type: types.RESET_TIMER
  };
}
