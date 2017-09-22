import getMessages from '../../requests/getMessages';

export default function getMessagesProcess() {
  return (dispatch, getState, env) => {
    // dispatch({ type: 'CREATE_MESSAGE' });
    return getMessages({
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(messages => {
        dispatch({ type: 'GET_MESSAGES', messages });
        return messages;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
