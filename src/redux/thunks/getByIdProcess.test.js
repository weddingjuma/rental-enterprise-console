import getByIdProcess from './getByIdProcess';

jest.mock('../../requests/getById');

import getById from '../../requests/getById';

import data from '../../mock-data';

describe('getByIdProcess', () => {
  it('Calls getById API utility, returns a rental and dispatches GET_RENTAL action and rental  ', () => {
    const thunk = getByIdProcess(1);
    expect(typeof thunk).toBe('function');

    getById.mockReturnValueOnce(Promise.resolve([{ ...data.rentals[0] }]));

    const dispatch = jest.fn();

    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(rental => {
      expect(getById).toBeCalled();
      expect(rental).toEqual([data.rentals[0]]);
      expect(dispatch).toBeCalledWith({ type: 'GET_RENTAL', rental });
    });
  });
});
