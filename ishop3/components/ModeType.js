import React from 'react';
import PropTypes from 'prop-types';

import './ModeType.css';

class ModeType extends React.Component {

    state = {
        validCorrectName: null,
        validCorrectPrice: null,
        validCorrectURL: null,
        validCorrectQuantity: null,
        validNewName: null,
        validNewPrice: null,
        validNewURL: null,
        validNewQuantity: null
    }

    addProduct = () => {
        this.props.cbAddProduct();
        this.setState({
            validNewName: true,
            validNewPrice: true,
            validNewURL: true,
            validNewQuantity: true
        })
    }

    cancelProduct = () => {
        this.props.cbCancelNew();
    }
    addNewProduct = () => {
        if (!this.state.validNewName && !this.state.validNewPrice && !this.state.validNewURL &&
        !this.state.validNewQuantity) {
            var newName = document.getElementById('newName').value;
            var newPrice = document.getElementById('newPrice').value;
            var newURL = document.getElementById('newURL').value;
            var newQuantity = document.getElementById('newQuantity').value;
            var newCode = Math.random();
            var newProduct = {code: newCode, name: newName, price: newPrice, URL: newURL, number: newQuantity};
            this.props.cbAddNewProduct(newProduct);
        }
    }
    correctProduct = () => {
        if (!this.state.validCorrectName && !this.state.validCorrectPrice && !this.state.validCorrectURL &&
            !this.state.validCorrectQuantity) {
            var newName = document.getElementById('correctName').value;
            var newPrice = document.getElementById('correctPrice').value;
            var newURL = document.getElementById('correctURL').value;
            var newQuantity = document.getElementById('correctQuantity').value;
            var code = this.props.correctCode;
            var correctProduct = {code: code, name: newName, price: newPrice, URL: newURL, number: newQuantity};
            this.props.cbCorrectProduct(correctProduct);
        }
    }
    validName = () => {
        if (document.getElementById('correctName').value == 0) {
            this.setState({validCorrectName: true});
        } else {
            this.setState({validCorrectName: null});
        }
    }
    validPrice = () => {
        if (document.getElementById('correctPrice').value == 0) {
            this.setState({validCorrectPrice: true});
        } else {
            this.setState({validCorrectPrice: null});
        }
    }
    validURL = () => {
        if (document.getElementById('correctURL').value == 0) {
            this.setState({validCorrectURL: true});
        } else {
            this.setState({validCorrectURL: null});
        }
    }
    validQuantity = () => {
        if (document.getElementById('correctQuantity').value == 0) {
            this.setState({validCorrectQuantity: true});
        } else {
            this.setState({validCorrectQuantity: null});
        }
    }
    validNewName = () => {
        if (document.getElementById('newName').value == 0) {
            this.setState({validNewName: true});
        } else {
            this.setState({validNewName: null});
        }
    }
    validNewPrice = () => {
        if (document.getElementById('newPrice').value == 0) {
            this.setState({validNewPrice: true});
        } else {
            this.setState({validNewPrice: null});
        }
    }
    validNewURL = () => {
        if (document.getElementById('newURL').value == 0) {
            this.setState({validNewURL: true});
        } else {
            this.setState({validNewURL: null});
        }
    }
    validNewQuantity = () => {
        if (document.getElementById('newQuantity').value == 0) {
            this.setState({validNewQuantity: true});
        } else {
            this.setState({validNewQuantity: null});
        }
    }

    render () {
        return (
            <div>
                <input type='button' value='New product' onClick={this.addProduct} />
                {
                    (this.props.chosenProdName) &&
                    <div>
                        {'name: ' + this.props.chosenProdName + '; price: ' + this.props.chosenProdPrice}
                    </div>
                }
                {
                    (this.props.addNewProduct) &&
                    <div>
                        {'Name: '} <input type='text' id='newName' onBlur={this.validNewName} />
                        {
                            (this.state.validNewName) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Price: '} <input type='text' id='newPrice' onBlur={this.validNewPrice} />
                        {
                            (this.state.validNewPrice) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'URL: '} <input type='text' id='newURL' onBlur={this.validNewURL} />
                        {
                            (this.state.validNewURL) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Quantity: '} <input type='text' id='newQuantity' onBlur={this.validNewQuantity} />
                        {
                            (this.state.validNewQuantity) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        <input type='button' value='Add' onClick={this.addNewProduct} />
                        <input type='button' value='Cancel' onClick={this.cancelProduct} />

                    </div>
                }
                {
                    (this.props.correct)&&
                    <div>
                        {'Name: '} <input type='text' id='correctName' defaultValue={this.props.correctName}
                        onBlur={this.validName} />
                        {
                            (this.state.validCorrectName) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Price: '} <input type='text' id='correctPrice' defaultValue={this.props.correctPrice}
                        onBlur={this.validPrice}  />
                        {
                            (this.state.validCorrectPrice) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'URL: '} <input type='text' id='correctURL' defaultValue={this.props.correctURL}
                        onBlur={this.validURL}  />
                        {
                            (this.state.validCorrectURL) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Quantity: '} <input type='text' id='correctQuantity' defaultValue={this.props.correctQuantity}
                        onBlur={this.validQuantity}  />
                        {
                            (this.state.validCorrectQuantity) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        <input type='button' value='Save' onClick={this.correctProduct} />
                        <input type='button' value='Cancel' onClick={this.cancelProduct} />
                    </div>
                }
            </div>
        )
    }
}

export default ModeType;