'use strict'
var tableItem = React.createClass({
    displayName: 'tableItem',

    getInitialState: function() {
        return {
            deleteNumber: null,
        }
    },
    
    turnColor: function() {
        this.props.cbTurnColor(this.props.code);
    },

    deleteStr: function(EO) {
        EO.stopPropagation();
        var question = confirm('Вы уверены, что хотите удалить товар?');
        if (question) {
            this.props.cbDeleteString(this.props.code);
        }
    },


    render: function() {
        if (this.props.makeColor == this.props.code) {
            var userClass = 'redClass';
        } else {
            var userClass = 'usual';
        };

        return React.DOM.tr({className: userClass, onClick: this.turnColor},
            React.DOM.td(null, this.props.name),
            React.DOM.td(null, this.props.price),
            React.DOM.td(null, this.props.URL),
            React.DOM.td(null, this.props.number),
            React.DOM.td(null,
                React.DOM.input( {type:'button',value:'Delete', onClick: this.deleteStr} )
            ),
        )
    }
})