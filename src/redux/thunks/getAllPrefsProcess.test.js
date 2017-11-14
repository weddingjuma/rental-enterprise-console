import getAllPrefsProcess from './getAllPrefsProcess';

jest.mock('../../requests/getAllPrefs');

import getAllPrefs from '../../requests/getAllPrefs';

import data from '../../mock-data';

describe('getAllPrefsProcess', () => {
  it('Calls getAllPrefs API utility, returns array of rentals and dispatches GET_PREFS action, rentals and showUserForm to be false ', () => {
    const thunk = getAllPrefsProcess();
    expect(typeof thunk).toBe('function');

    getAllPrefs.mockReturnValueOnce(Promise.resolve([...data.rentals]));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(rentals => {
      expect(getAllPrefs).toBeCalled();
      expect(rentals).toEqual([...data.rentals]);
      expect(dispatch).toBeCalledWith({ type: 'GET_PREFS', rentals, showUserForm: false, loginError: '' });
    });
  });
});
