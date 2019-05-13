import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  deleteClient = () => {
    voteEvents.emit('deleteClient',this.props.info.id);
  }
  correct = () => {
    voteEvents.emit('correct',this.props.info);
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({info:newProps.info});
  };

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");

    let status;
    if (this.state.info.balance >= 0) {
      status = 'active';
    } else {
      status = 'blocked';
    }
    
    return (      
      <tr>
        <td>{this.state.info.fam}</td> 
        <td>{this.state.info.im}</td> 
        <td>{this.state.info.otch}</td> 
        <td>{this.state.info.balance}</td> 
        <td className={status}>{status}</td> 
        <td>
          <input type="button" value="Редактировать" onClick={this.correct} />
        </td> 
        <td>
          <input type="button" value="Удалить" onClick={this.deleteClient} />
        </td> 
      </tr>
    );

  }

}

export default MobileClient;
