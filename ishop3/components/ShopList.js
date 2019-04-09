import React from 'react';
import PropTypes from 'prop-types';

import './ShopList.css';

import TableItem from './TableItem';
import ModeType from './ModeType';

class ShopList extends React.Component {

    state = {
        makeColor: null,
        deleteNumber: null,
        chosenProdName: null,
        chosenProdPrice: null,
        addNewProduct: false,
        correct: false,
        correctName: false,
        correctPrice: false,
        correctURL: false,
        correctQuantity: false,
        correctCode: false
    }

    addProduct = () => {
        if (!this.state.correct) {
            this.setState({makeColor: null, addNewProduct: true, chosenProdName: false})
        }
    }
    cancelNew = () => {
        this.setState({addNewProduct: false, correct: false})
    }
    addNewProduct = (arg) => {
        this.props.list.push(arg);
        this.setState({addNewProduct: false})
    }

    correct = (code) => {
        if (!this.state.addNewProduct) {
            this.setState({correct: true, chosenProdName: false});
    
            for (var i = 0; i < this.props.list.length; i++) {
                for (var key in this.props.list[i]) {
                    if (code == this.props.list[i].code) {
                        this.setState({correctCode: code, correctName: this.props.list[i].name, correctPrice: this.props.list[i].price,
                        correctURL: this.props.list[i].URL, correctQuantity: this.props.list[i].number})
                    }
                }
            }
        }
    }
    correctProduct = (arg) => {
        for (var i = 0; i < this.props.list.length; i++) {
            for (var key in this.props.list[i]) {
                if (arg.code == this.props.list[i].code) {
                    this.props.list[i].name = arg.name;
                    this.props.list[i].price = arg.price;
                    this.props.list[i].URL = arg.URL;
                    this.props.list[i].number = arg.number;                    
                }
            }
        }
        this.setState({correct: false});
    }

    turnColor = (arg) => {
        if (!this.state.addNewProduct && !this.state.correct) {
            this.setState({makeColor: arg});
            for (var i = 0; i < this.props.list.length; i++) {
                if (this.props.list[i].code == arg) {
                    this.setState({chosenProdName: this.props.list[i].name});
                    this.setState({chosenProdPrice: this.props.list[i].price});
                }
            }
        }
    }

    deleteString = (arg) => {
        if (!this.state.addNewProduct && !this.state.correct) {
            var question = confirm('Вы уверены, что хотите удалить товар?');
            if (question) {
                this.setState({deleteNumber: arg});
                for(var i = 0; i < this.props.list.length; i++) {
                    if(arg == this.props.list[i].code) {   
                        this.props.list.splice(i, 1);
                    }
                }
            }
        }
    }

    render() {
        var tablePos = this.props.list.map( v => 
            <TableItem key={v.code} code={v.code}
            name={v.name} price={v.price}
            URL={v.URL} number={v.number}
            cbTurnColor={this.turnColor}
            cbDeleteString={this.deleteString}
            makeColor={this.state.makeColor}
            cbCorrect={this.correct}
            />
        );

        return(
            <div className='shopList'>
                <table className='listShop'><thead className='headTable'>
                    <tr>
                        <th>{this.props.headTable.name}</th>
                        <th>{this.props.headTable.price}</th>
                        <th>{this.props.headTable.url}</th>
                        <th>{this.props.headTable.quantity}</th>
                        <th>{this.props.headTable.control}</th>
                    </tr>
                </thead>
                
                <tbody>{tablePos}</tbody>
                </table>
                <ModeType chosenProdName={this.state.chosenProdName} chosenProdPrice={this.state.chosenProdPrice}
                cbAddProduct={this.addProduct} addNewProduct={this.state.addNewProduct}
                cbCancelNew={this.cancelNew} cbAddNewProduct={this.addNewProduct} correct={this.state.correct}
                correctName={this.state.correctName} correctPrice={this.state.correctPrice}
                correctURL={this.state.correctURL} correctQuantity={this.state.correctQuantity}
                correctCode={this.state.correctCode} cbCorrectProduct={this.correctProduct} />
            </div>
        )
    }


}

export default ShopList;