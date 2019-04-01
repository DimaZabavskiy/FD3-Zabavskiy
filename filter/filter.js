"use strict"
var filter = React.createClass({
    displayName: 'filter',

    propTypes: {
        stringArr: React.PropTypes.array.isRequired,
    },

    getInitialState: function() {
        return {
            isChecked: false,
            text: '',
        };
    },

    textWritten: function (EO) {
        this.setState({text: EO.target.value});
    },

    arrSort: function (EO){
        this.setState({isChecked: EO.target.checked});
    },

    renew: function() {
        this.setState({text: '', isChecked: false});
    },


    render: function() {
        var startArray = this.props.stringArr.map( v=>
             v );
        
        var stringArray = [];
        if (this.state.text) {
            var text = this.state.text;
            function filterArr(v) {
                return v.text.indexOf(text) > -1;
            }
            stringArray = startArray.filter(filterArr);
        } else {
            stringArray = startArray.map( v=>
                v );
        }

        if (this.state.isChecked) {
            function compareText (a,b) {
                if(a.text < b.text) return -1;
                if(a.text > b.text) return 1;
                return 0;
            }
            stringArray.sort(compareText);
        }
        
        var resultArray = stringArray.map(v=>
            React.DOM.div({key: v.code}, null, v.text, ))
        
        return React.DOM.div({className: 'filterDiv'},
            React.DOM.input({type: 'checkbox', checked: this.state.isChecked, onClick: this.arrSort, }),
            React.DOM.input({type: 'text', value: this.state.text, onChange: this.textWritten, }),
            React.DOM.input({type: 'button', value: 'сброс', onClick: this.renew, }),
            React.DOM.div({className: 'stringList'}, resultArray),
        )
    },


})