import React from 'react';
import PropTypes from 'prop-types';

class BrJsxItem extends React.Component {
  
  render() {
    var receivedArr = this.props.text.split(/\<.*?\>/);
    var result = [];
    for (var i = 0; i < receivedArr.length; i++) {
      if (i != receivedArr.length - 1) {
        result.push(receivedArr[i]);
        result.push(<br />);
      } else {
        result.push(receivedArr[i]);
      }
    }

    return (
      <div>{result}</div>
    )
  }

}

export default BrJsxItem;
