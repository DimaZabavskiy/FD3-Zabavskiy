import React from 'react';
import PropTypes from 'prop-types';

import './BrJsx.css';

import BrJsxItem from './BrJsxItem';

class BrJsx extends React.Component {
  render() {
    let text="первый<br>второй<br/>третий<br />последний";
    return <BrJsxItem text={text} />;
  }
}

export default BrJsx;
