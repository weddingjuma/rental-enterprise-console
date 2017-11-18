import deleteMessage from '../../requests/deleteMessage';

export default function deleteMessageProcess(itemId) {
  return (dispatch, getState, env) => {
    //mc//console.log('DELETE PROCESS');
    // dispatch({ type: 'CREATE_MESSAGE' });
    return deleteMessage(itemId, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    })
      .then(messages => {
        dispatch({ type: 'DELETE_MESSAGE', itemId: itemId });
        return messages;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
