import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function adult() {
  console.log("bleble")
};

function nonadult() {
  console.log("nana")
};

const NonadultComponent = () => (
<section>
  <h4>Are you speaking to a child ? </h4>
  <RaisedButton label="Yes" onClick={adult} />
  &nbsp; &nbsp; &nbsp;
  <RaisedButton label="No" onClick={nonadult} />
</section>
);

export default NonadultComponent;
