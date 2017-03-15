import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function bleble() {
  console.log("bleble")
};

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Yes" onClick={bleble} />
);

export default MyAwesomeReactComponent;
