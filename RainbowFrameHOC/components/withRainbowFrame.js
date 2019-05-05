import React from 'react';

function withRainbowFrame(wrapper) {
  return function(Component) {
    return props => {
      var result;
      var divItem;
      for (var i = 0; i <wrapper.length; i++ ) {
        if (i == 0) {
          divItem = <Component {...props} />;
        }
        result = <div style={{border:"solid 5px "+ wrapper[i],padding:"5px", textAlign: "center"}}>
          {divItem}
        </div>
        divItem = result;
      }
      return result
    };
  };
}

export { withRainbowFrame };
