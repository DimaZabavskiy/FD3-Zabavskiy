'use strict'
var ShopList = React.createClass({
    displayName: 'ShopList',

    getInitialState: function() {
        return {
            makeColor: null,
            deleteNumber: null,
        }
    },

    turnColor: function (arg) {
        this.setState({makeColor: arg});
    },

    deleteString: function(arg) {
        this.setState({deleteNumber: arg});
        for(var i = 0; i < this.props.list.length; i++) {
            if(arg == this.props.list[i].code) {   
                this.props.list.splice(i, 1);
            }
        }
    },
    
    render: function() {
        var topTable =
        React.DOM.thead( { className: 'headTable'}, 
            React.DOM.tr( null,
                React.DOM.th(null,this.props.headTable.name),
                React.DOM.th(null, this.props.headTable.price),
                React.DOM.th(null, this.props.headTable.url),
                React.DOM.th(null, this.props.headTable.quantity),
                React.DOM.th(null, this.props.headTable.control),
            )
        );
        
        var tablePos = this.props.list.map ( v =>
            React.createElement(tableItem, {key:v.code, code: v.code,
                name: v.name, price: v.price,
                URL: v.URL, number: v.number,
                cbTurnColor: this.turnColor,
                cbDeleteString: this.deleteString,
                makeColor:this.state.makeColor,})    
        );

        return React.DOM.div( {className: 'shopList'},
            React.DOM.table({className: 'listShop'}, topTable, React.DOM.tbody(null, tablePos)),
        )
    }
})