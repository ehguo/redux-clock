export function startTimer() {
  return {
    type: START_TIMER,
    now: new Date().getTime()
  };
}

export function stopTimer() {
  return {
    type: STOP_TIMER,
    now: new Date().getTime()
  };
}

export function resetTimer() {
  return {
    type: RESET_TIMER
  };
}
