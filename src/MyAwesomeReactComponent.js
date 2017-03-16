import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

function bleble() {
  console.log("bleble")
};

const MyAwesomeReactComponent = () => (
<section>
  <h4>Are you an adult ? </h4>
  <RaisedButton label="Yes" onClick={bleble} />
  &nbsp;
  <RaisedButton label="No" onClick={bleble} />
</section>
);

export default MyAwesomeReactComponent;
