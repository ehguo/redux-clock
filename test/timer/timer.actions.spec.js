import * as actions from '../../src/timer/timer.actions';
import * as types from '../../src/timer/timer.types';

describe('actions', () => {
  it('should create an action to start timer', () => {
    const expectedAction = {
      type: types.START_TIMER,
      now: new Date().getTime()
    };
    expect(actions.startTimer()).toEqual(expectedAction);
  });

  it('should create an action to stop timer', () => {
    const expectedAction = {
      type: types.STOP_TIMER,
      now: new Date().getTime()
    };
    expect(actions.stopTimer()).toEqual(expectedAction);
  })

  it('should create an action to reset timer', () => {
    const expectedAction = {
      type: types.RESET_TIMER
    };
    expect(actions.resetTimer()).toEqual(expectedAction);
  });
});
