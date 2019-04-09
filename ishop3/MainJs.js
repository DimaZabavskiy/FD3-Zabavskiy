"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ShopList from './components/ShopList';

let headT = require('./tableHead.json');
let listArr = require('./product.json');

ReactDOM.render(
  <ShopList
    headTable={headT}
    list={listArr}
  />  
  , document.getElementById('container')
);
