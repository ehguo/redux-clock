import timerReducer, {
  startTimer, stopTimer, resetTimer,
  START_TIMER, STOP_TIMER, RESET_TIMER
} from '../../src/timer/timer';

describe('actions', () => {
  let now;
  let expectedAction;

  beforeEach(() => {
    now = new Date().getTime();
    expectedAction = {
      type: '',
      now
    };
  });

  it('should create an action to start timer', () => {
    expectedAction.type = START_TIMER;
    expect(startTimer(now)).toEqual(expectedAction);
  });

  it('should create an action to stop timer', () => {
    expectedAction.type = STOP_TIMER;
    expect(stopTimer(now)).toEqual(expectedAction);
  })

  it('should create an action to reset timer', () => {
    expectedAction = {
      type: RESET_TIMER
    };
    expect(resetTimer()).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  let now;
  let action;
  let expectedState;

  beforeEach(() => {
    now = new Date().getTime();
    action = {
      type: ''
    }
    expectedState = {
      startTime: undefined,
      stopTime: undefined,
      elapsedTime: undefined
    };
  });

  it('should return the initial state', () => {
    expect(timerReducer()).toEqual(expectedState);
  });

  it('should handle START_TIMER', () => {
    action.type = START_TIMER;
    action.now = now;
    expectedState.startTime = now;
    expect(timerReducer({}, action)).toEqual(expectedState);
  });

  it('should handle STOP_TIMER', () => {
    action.type = STOP_TIMER;
    action.now = now;
    expectedState.stopTime = now;
    expect(timerReducer({}, action)).toEqual(expectedState);
  });

  it('should handle RESET_TIMER', () => {
    const mockState = {
      startTime: 0,
      stopTime: 1,
      elapsedTime: 1
    };
    action.type = RESET_TIMER;
    expect(timerReducer(mockState, action)).toEqual(expectedState);
  });
});
