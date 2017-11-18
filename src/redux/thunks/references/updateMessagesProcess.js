import updateMessage from '../../requests/updateMessage';

export default function updateMessagesProcess(updateType, labels) {
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
    } else if (updateType === 'addLabelsfda') {
      changes = { labels: labels.toString() };
    }
    //console.log('the labels' + labels);
    //mc//console.log(getState().selectedMessageIds);
    let newMessages = [];

    getState().selectedMessageIds.forEach(itemId => {
      // setting the labels

      if (updateType === 'addLabel') {
        let theLabels = getState().messages.find(theMessage => {
          let retLabels = theMessage.labels;
          if (theMessage.id === itemId) {
            // //console.log('matched .................');
            // //console.log(theMessage.labels);

            retLabels = theMessage.labels;

            if (!theMessage.labels.includes(labels)) {
              retLabels.push(labels);
    //mc//console.log('ret' + labels);
    //mc//console.log(retLabels);
            }
          }
          return retLabels;
        });
        // //console.log('theLabels .............................');
        // //console.log(theLabels.labels.toString());
        changes = { labels: theLabels.labels.toString() };
      } // end of if for 'addLabel'

      if (updateType === 'removeLabel') {
        let theLabels = getState().messages.find(theMessage => {
          let retLabels = theMessage.labels;
          if (theMessage.id === itemId) {
  //mc//console.log('matched .................');
  //mc//console.log(theMessage.labels);

            retLabels = theMessage.labels;

            if (theMessage.labels.includes(labels)) {
              retLabels.splice(retLabels.indexOf(labels), 1);
    //mc//console.log('ret' + labels);
    //mc//console.log(retLabels);
            }
          }
          return retLabels;
        });
        // //console.log('theLabels .............................');
        // //console.log(theLabels.labels.toString());
        changes = { labels: theLabels.labels.toString() };
      } // end of if for 'addLabel'

      updateMessage(itemId, changes, {
        databaseId: env.AIRTABLE_DATABASE_ID,
        token: env.AIRTABLE_TOKEN
      }) // set the SESSION from the updated message
        .then(message => {
          //mc//console.log('upProcess: ' + itemId);
          // //console.log(updateType);
          // //console.log(message);

          dispatch({ type: 'UPDATE_MESSAGE', itemId, updateType, message });
          newMessages.push(message);
        })
        .catch(error => {
          //dispatch({ type: 'CREATE_MESSAGE' });
        });
      return newMessages;
    });
  };
}
