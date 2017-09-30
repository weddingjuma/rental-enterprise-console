import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import setupStore from './redux/setupStore';

const store = setupStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// import InboxPage from './components/InboxPage';
//
//
// let messages = [
//   {
//     id: 1,
//     subject: "You can't input the protocol without calculating the mobile RSS protocol!",
//     read: false,
//     starred: false,
//     labels: ['dev', 'personal']
//   },
//   {
//     id: 2,
//     subject: "connecting the system won't do anything, we need to input the mobile AI panel!",
//     read: false,
//     starred: false,
//     selected: true,
//     labels: []
//   },
//   {
//     id: 3,
//     subject: 'Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!',
//     read: false,
//     starred: true,
//     labels: ['dev']
//   },
//   {
//     id: 4,
//     subject: 'We need to program the primary TCP hard drive!',
//     read: false,
//     starred: false,
//     selected: true,
//     labels: []
//   },
//   {
//     id: 5,
//     subject: 'If we override the interface, we can get to the HTTP feed through the virtual EXE interface!',
//     read: true,
//     starred: false,
//     labels: ['personal']
//   },
//   {
//     id: 6,
//     subject: 'We need to back up the wireless GB driver!',
//     read: false,
//     starred: true,
//     labels: []
//   },
//   {
//     id: 7,
//     subject: 'We need to index the mobile PCI bus!',
//     read: false,
//     starred: false,
//     labels: ['dev', 'personal']
//   },
//   {
//     id: 8,
//     subject: 'If we connect the sensor, we can get to the HDD port through the redundant IB firewall!',
//     read: false,
//     starred: true,
//     labels: []
//   }
// ];
// let selectedMessageIds = [1, 3];
//
// let selectedMessageCount = selectedMessageIds.length;
//
// //Functions ///////////////////////////////
// let onSelectMessage = function(itemId) {
//   selectedMessageIds.push(itemId);
//   render();
// };
//
// let onDeselectMessage = function(itemId) {
//   let found = selectedMessageIds.indexOf(itemId);
//   selectedMessageIds.splice(found, 1);
//   render();
// };
//
// let onStarMessage = function(itemId) {
//   let matchedObject = messages.find(function(message) {
//     if (message.id === itemId) {
//       return message.id;
//     }
//     return undefined;
//   });
//
//   matchedObject.starred = true;
//   render();
// };
//
// let onUnstarMessage = function(itemId) {
//   let matchedObject = messages.find(function(message) {
//     if (message.id === itemId) {
//       return message.id;
//     }
//     return undefined;
//   });
//   matchedObject.starred = false;
//   render();
// };
//
// let onMarkAsReadMessage = function(itemId) {
//   //console.log('READ');
//   let matchedObject = messages.find(function(message) {
//     if (message.id === itemId) {
//       return message.id;
//     }
//     return undefined;
//   });
//   matchedObject.read = true;
//   render();
// };
//
// let onOpenComposeForm = function() {
//   //console.log('onOpenComposeForm');
//   showComposeForm = true;
//   render();
// };
//
// let onSelectAllMessages = function() {
//   //console.log('onSelectAllMessages');
//   let arr2 = [];
//
//   arr2 = messages.map(function(message) {
//     //
//     return message.id;
//   }, 0);
//
//   selectedMessageIds = selectedMessageIds.concat(arr2); //[1, 2];
//   //console.log('SelecAll ' + selectedMessageIds);
//   selectedMessageCount = selectedMessageIds.length;
//
//   render();
// };
//
// let onDeselectAllMessages = function() {
//   //console.log('onDeselectAllMessages');
//   selectedMessageIds = [];
//   selectedMessageCount = selectedMessageIds.length;
//   //console.log(selectedMessageIds);
//   render();
//   selectedMessageCount = 1;
//   //console.log('xxxxxx' + selectedMessageCount);
// };
//
// let onMarkAsReadSelectedMessages = function() {
//   //console.log('onMarkAsReadSelectedMessages');
//   messages.forEach(function(message) {
//     message.read = true;
//   });
//   render();
// };
//
// let onMarkAsUnreadSelectedMessages = function() {
//   //console.log('onMarkAsUnreadSelectedMessagesi');
//   messages.forEach(function(message) {
//     message.read = false;
//   });
//   render();
// };
//
// let onApplyLabelSelectedMessages = function(label) {
//   //console.log('onApplyLabelSelectedMessages');
//   //console.log(label);
//   //
//   selectedMessageIds.forEach(function(messageId) {
//     messages.forEach(function(message) {
//       if (message.id === messageId) {
//         if (!message.labels.includes(label)) {
//           message.labels.push(label);
//         }
//       }
//     });
//     //messages[element].labels.push(label);
//   });
//   render();
// };
//
// let onRemoveLabelSelectedMessages = function(label) {
//   //console.log('onRemoveLabelSelectedMessages');
//   selectedMessageIds.forEach(function(messageId) {
//     messages.forEach(function(message) {
//       if (message.id === messageId) {
//         if (message.labels.includes(label)) {
//           message.labels.splice(message.labels.indexOf(label), 1);
//         }
//       }
//     });
//     //messages[element].labels.push(label);
//   });
//   render();
// };
//
// let onDeleteSelectedMessages = function() {
//   //console.log('onDeleteSelectedMessages');
//   selectedMessageIds.forEach(function(messageId) {
//     // messages.forEach(function(message) {
//     //   messag
//     // });
//
//     messages.forEach(function(message, index) {
//       if (message.id === messageId) {
//   ////console.log(index);
//         messages.splice(index, 1);
//         return index;
//       }
//     });
//   });
//   render();
// };
//
// let onSubmit = function({ subject, body }) {
//   //console.log('onSubmit ');
//   // //console.log('sub ' + subject);
//   // //console.log('body' + body);
//   //
//   // add to the messages
//   //console.log(messages[messages.length - 1].id);
//   let nextID = messages[messages.length - 1].id + 1;
//   messages.unshift({
//     id: nextID,
//     subject: subject,
//     read: false,
//     starred: false,
//     labels: []
//   });
//   showComposeForm = false;
//   render();
// };
//
// let onCancel = function() {
//   //console.log('onCancel ');
//   showComposeForm = false;
//
//   render();
// };
//
// let checkItem = function(itemId, type) {
//   //console.log('type: ' + type);
//   render();
// };
// ///////////////////////////////////////////
//
// let showComposeForm = undefined;
//
// function render() {
//   ReactDOM.render(
//     <InboxPage
//       messages={messages} //
//       selectedMessageIds={selectedMessageIds} //
//       selectedMessageCount={selectedMessageCount}
//       showComposeForm={showComposeForm} //
//       checkItem={checkItem}
//       //
//       onSelectMessage={onSelectMessage}
//       onDeselectMessage={onDeselectMessage}
//       //
//       onStarMessage={onStarMessage}
//       onUnstarMessage={onUnstarMessage}
//       //
//       onMarkAsReadMessage={onMarkAsReadMessage}
//       //
//       onOpenComposeForm={onOpenComposeForm}
//       onSelectAllMessages={onSelectAllMessages}
//       onDeselectAllMessages={onDeselectAllMessages}
//       onMarkAsReadSelectedMessages={onMarkAsReadSelectedMessages}
//       onMarkAsUnreadSelectedMessages={onMarkAsUnreadSelectedMessages}
//       onApplyLabelSelectedMessages={onApplyLabelSelectedMessages}
//       onRemoveLabelSelectedMessages={onRemoveLabelSelectedMessages}
//       onDeleteSelectedMessages={onDeleteSelectedMessages}
//       //
//       onSubmit={onSubmit}
//       onCancel={onCancel}
//     />,
//     document.getElementById('root')
//   );
// }
//
// render();
