import React, { useState } from 'react';

function Welcome(props) {

  return (
    <h1 {...props}>
      Weclome {props.name}
    </h1>
    
  );
}

export default Welcome;
