import React from 'react';
import PropTypes from 'prop-types';

import './ModeType.css';

class ModeType extends React.Component {

    state = {
        getName: this.props.correctName,
        name: null,
        getPrice: this.props.correctPrice,
        price: null,
        getURL: this.props.correctURL,
        URL: null,
        getQuantity: this.props.correctQuantity,
        quantity: null,
        startCorrect: false,
        correctName: null,
        validCorrectName: null,
        validCorrectPrice: null,
        validCorrectURL: null,
        validCorrectQuantity: null,
        validNewName: null,
        validNewPrice: null,
        validNewURL: null,
        validNewQuantity: null,
        checkValid: false
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
        if (this.state.startCorrect) { 
            this.setState({startCorrect: false, name: this.props.correctName, price: this.props.correctPrice,
                URL: this.props.correctURL, quantity: this.props.correctQuantity, 
                validCorrectName: null, validCorrectPrice: null, validCorrectURL: null, validCorrectQuantity: null,});
        }
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



    validName = (EO) => {
        this.props.cbSetChanged();
        
        if (this.state.getName !== this.props.correctName) {
            this.setState({getName: this.props.correctName})
        }

        this.setState({name: EO.target.value, startCorrect: true})


        if (document.getElementById('correctName').value == 0) {
            this.setState({validCorrectName: true, checkValid: true});
        } else {
            this.setState({validCorrectName: null, checkValid: false});
        }
    }
    validPrice = (EO) => {
        this.props.cbSetChanged();

        if (this.state.getPrice !== this.props.correctPrice) {
            this.setState({getPrice: this.props.correctPrice})
        }

        this.setState({price: EO.target.value, startCorrect: true})

        if (document.getElementById('correctPrice').value == 0) {
            this.setState({validCorrectPrice: true, checkValid: true});
        } else {
            this.setState({validCorrectPrice: null, checkValid: false});
        }
    }
    validURL = (EO) => {
        this.props.cbSetChanged();

        if (this.state.getURL !== this.props.correctURL) {
            this.setState({getURL: this.props.correctURL})
        }

        this.setState({URL: EO.target.value, startCorrect: true})
        
        if (document.getElementById('correctURL').value == 0) {
            this.setState({validCorrectURL: true, checkValid: true});
        } else {
            this.setState({validCorrectURL: null, checkValid: false});
        }
    }
    validQuantity = (EO) => {
        this.props.cbSetChanged();

        if (this.state.getQuantity !== this.props.correctQuantity) {
            this.setState({getQuantity: this.props.correctQuantity})
        }

        this.setState({quantity: EO.target.value, startCorrect: true})

        if (document.getElementById('correctQuantity').value == 0) {
            this.setState({validCorrectQuantity: true, checkValid: true});
        } else {
            this.setState({validCorrectQuantity: null, checkValid: false});
        }
    }



    validNewName = () => {
        if (document.getElementById('newName').value == 0) {
            this.setState({validNewName: true, checkValid: true});
        } else {
            this.setState({validNewName: null, checkValid: false});
        }
    }
    validNewPrice = () => {
        if (document.getElementById('newPrice').value == 0) {
            this.setState({validNewPrice: true, checkValid: true});
        } else {
            this.setState({validNewPrice: null, checkValid: false});
        }
    }
    validNewURL = () => {
        if (document.getElementById('newURL').value == 0) {
            this.setState({validNewURL: true, checkValid: true});
        } else {
            this.setState({validNewURL: null, checkValid: false});
        }
    }
    validNewQuantity = () => {
        if (document.getElementById('newQuantity').value == 0) {
            this.setState({validNewQuantity: true, checkValid: true});
        } else {
            this.setState({validNewQuantity: null, checkValid: false});
        }
    }

    render () {
        if (this.state.validNewName || this.state.validNewPrice || this.state.validNewURL 
            || this.state.validNewQuantity) {
            var buttonClass1 = "unActive";
        } else {
            var buttonClass1 = "usual";
        }
        if (this.state.validCorrectQuantity || this.state.validCorrectURL
            || this.state.validCorrectName || this.state.validCorrectPrice) {
            var buttonClass2 = "unActive";
        } else {
            var buttonClass2 = "usual";
        }
        
        return (
            <div>
                <input type='button' value='New product' onClick={this.addProduct} />
                {
                    (this.props.chosenProdName && !this.props.correctCanged) &&
                    <div>
                        {'name: ' + this.props.chosenProdName + '; price: ' + this.props.chosenProdPrice}
                    </div>
                }
                {
                    (this.props.addNewProduct) &&
                    <div>
                        {'Name: '} <input type='text' id='newName' onChange={this.validNewName} />
                        {
                            (this.state.validNewName) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Price: '} <input type='text' id='newPrice' onChange={this.validNewPrice} />
                        {
                            (this.state.validNewPrice) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'URL: '} <input type='text' id='newURL' onChange={this.validNewURL} />
                        {
                            (this.state.validNewURL) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Quantity: '} <input type='text' id='newQuantity' onChange={this.validNewQuantity} />
                        {
                            (this.state.validNewQuantity) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        <input type='button' className={buttonClass1} value='Add' onClick={this.addNewProduct} />
                        <input type='button' value='Cancel' onClick={this.cancelProduct} />

                    </div>
                }
                {
                    (this.props.correct)&&
                    <div>
                        {'Name: '} <input type='text' id='correctName' value={(this.state.getName === this.props.correctName)?this.state.name:this.props.correctName }
                        onChange={this.validName} />
                        {
                            (this.state.validCorrectName) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Price: '} <input type='text' id='correctPrice' value={(this.state.getPrice === this.props.correctPrice)?this.state.price:this.props.correctPrice }
                        onChange={this.validPrice}  />
                        {
                            (this.state.validCorrectPrice) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'URL: '} <input type='text' id='correctURL' value={(this.state.getURL === this.props.correctURL)?this.state.URL:this.props.correctURL }
                        onChange={this.validURL}  />
                        {
                            (this.state.validCorrectURL) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        {'Quantity: '} <input type='text' id='correctQuantity' value={(this.state.getQuantity === this.props.correctQuantity)?this.state.quantity:this.props.correctQuantity }
                        onChange={this.validQuantity}  />
                        {
                            (this.state.validCorrectQuantity) &&
                            <span className='valid'>{'Please, fill the field!'}</span>
                        }
                        <br />
                        <input type='button' className={buttonClass2} value='Save' onClick={this.correctProduct} />
                        <input type='button' value='Cancel' onClick={this.cancelProduct} />
                    </div>
                }
            </div>
        )
    }
}

export default ModeType;