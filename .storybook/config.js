import { configure } from '@storybook/react';
function loadStories() {
  require('../src/index.css');
  // Require your stories here...
  // Require your stories here...
  require('../src/index.css');

  /// PAGE 1
  // 1 BusinessItemComponent
  require('../src/components/BusinessItemComponent.story');

  // 2 BusinessComponent
  require('../src/components/BusinessComponent.story');

  // 3 Search Form
  require('../src/components/SearchFormComponent.story');

  /// PAGE 2
  // User Pref Page
  //  4
  require('../src/components/UserPrefComponent.story');

  // 5 PageLayout
  require('../src/components/PageLayout.story');
  // // 1 MessageComponent
  // require('../src/components/MessageComponent.story');
  //
  // // 2 MessagesComponent
  // require('../src/components/MessagesComponent.story');
  //
  // // 3 ToolbarComponent
  // require('../src/components/ToolbarComponent.story');
  //
  // // 4 ComposeFormComponent
  // require('../src/components/ComposeFormComponent.story');
  //
  // // 5 InboxPageLayout
  // require('../src/components/InboxPageLayout.story');
  //
  // // 5 InboxPage
  // require('../src/components/InboxPage.story');
}
configure(loadStories, module);
