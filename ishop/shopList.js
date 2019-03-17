'use strict'
var ShopList = React.createClass({
    displayName: 'ShopList',

    getDefaultProps: function() {
        return { name: "Здесь должно быть название магазина!" }
    },

    render: function() {
        var productList = [];
        function makeTable(v, i, a) {
            var product = v;
            var productName =
            React.DOM.tbody( {key: product.code, className: 'productTbody'}, 
                React.DOM.tr( {className: 'productCode'},
                    React.DOM.td({className: 'productURL'},
                        React.DOM.img({className: 'productIMG', src: product.URL} ),
                    ),
                    React.DOM.td({className: 'productName'}, product.name),
                    React.DOM.td({className: 'productPrice'}, product.price),
                    React.DOM.td({className: 'productNumber'}, product.number),
                )
            );
            productList.push(productName);
        }
        this.props.list.forEach(makeTable);

        return React.DOM.div( {className: 'shopList'},
            React.DOM.h1( {className: 'shopName'}, this.props.name ),
            React.DOM.table({className: 'listShop'}, productList),
        )
    }
})