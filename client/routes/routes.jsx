// functional modules
import React from 'react';
import {mount} from 'react-mounter';
// layouts
import MainLayout from '/client/layouts/mainLayout.jsx';
// views
import MainView from '/client/views/mainView.jsx';

FlowRouter.route("/", {
  action () {
    mount(MainLayout, {
      content: <MainView />
    });
  }
});