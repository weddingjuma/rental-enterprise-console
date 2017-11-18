import updateMessage from '../../requests/updateMessage';

export default function updateMessageProcess(itemId, updateType, labels) {
  return (dispatch, getState, env) => {
    //mc//console.log('DELETE PROCESS');
    // dispatch({ type: 'CREATE_MESSAGE' });
    //mc//console.log('hi ' + updateType);
    let changes = {};
    if (updateType === 'star') {
      changes = { starred: true };
    } else if (updateType === 'unstar') {
      changes = { starred: false };
    } else if (updateType === 'read') {
      changes = { read: true };
    } else if (updateType === 'unread') {
      changes = { read: false };
    } else if (updateType === 'addLabel') {
      changes = { labels: labels.toString() };
    }

    // update the database with the changes
    return updateMessage(itemId, changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }) // set the session from the updated message
      .then(message => {
        //console.log('upProcess: ' + itemId);
        //console.log(updateType);
        //console.log(message);

        dispatch({ type: 'UPDATE_MESSAGE', itemId, updateType, message });
        return message;
      })
      .catch(error => {
        //dispatch({ type: 'CREATE_MESSAGE' });
      });
  };
}
