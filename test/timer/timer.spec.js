import timerReducer, {
  startTimer, stopTimer, resetTimer,
  START_TIMER, STOP_TIMER, RESET_TIMER
} from '../../src/timer/timer';

describe('actions', () => {
  it('should create an action to start timer', () => {
    const expectedAction = {
      type: START_TIMER,
      now: new Date().getTime()
    };
    expect(actions.startTimer()).toEqual(expectedAction);
  });

  it('should create an action to stop timer', () => {
    const expectedAction = {
      type: STOP_TIMER,
      now: new Date().getTime()
    };
    expect(actions.stopTimer()).toEqual(expectedAction);
  })

  it('should create an action to reset timer', () => {
    const expectedAction = {
      type: RESET_TIMER
    };
    expect(actions.resetTimer()).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(timerReducer(undefined, {})).toEqual({
      startTime: undefined,
      stopTime: undefined
    });
  });

  it('should handle START_TIMER', () => {
    expect(
      timerReducer({}, {
        type: START_TIMER,
        now: new Date().getSeconds()
      })
    ).toEqual({
      type: 'START_TIMER',
      now: new Date().getTime()
    });
  });
});
