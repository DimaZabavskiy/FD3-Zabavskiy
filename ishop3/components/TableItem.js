import React from 'react';
import PropTypes from 'prop-types';

import './TableItem.css';

class TableItem extends React.Component {
    state = {
        deleteNumber: null,
    }

    turnColor = () => {
        this.props.cbTurnColor(this.props.code, true);
    }
    deleteStr = (EO) => {
        EO.stopPropagation();
        this.props.cbDeleteString(this.props.code);
    }

    correct = (EO) => {
        EO.stopPropagation();
        this.props.cbCorrect(this.props.code);
        this.props.cbTurnColor(this.props.code, false);
    }

    render() {
        if (this.props.makeColor == this.props.code) {
            var userClass = 'redClass';
        } else {
            var userClass = 'usual';
        };

        return (
            <tr className={userClass} onClick={this.turnColor}>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.URL}</td>
                <td>{this.props.number}</td>
                <td>
                    <input type='button' value='Edit' onClick={this.correct} />
                    <input type='button' value='Delete' onClick={this.deleteStr} />
                </td>
            </tr>
        )
    }
}

export default TableItem;