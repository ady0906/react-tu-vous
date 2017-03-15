import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Yes" />
);

export default MyAwesomeReactComponent;
