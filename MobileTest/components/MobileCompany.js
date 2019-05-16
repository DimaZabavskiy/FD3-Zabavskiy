import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';

import MobileClient from './MobileClient';

//import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
      })
    ),
  };

  state = {
    clients: this.props.clients,
    clientStatus: 'common',
    workMode: 1,
    correctClient: null,
    correctActive: false,
    startNewClient: false,
    newClientFam: null,
    newClientIm: null,
    newClientOtch: null,
    newClientBalance: null,
  };

  componentDidMount = () => {
    voteEvents.addListener('deleteClient',this.deleteClient);
    voteEvents.addListener('correct',this.correct);
  };
  componentWillUnmount = () => {
    voteEvents.removeListener('deleteClient',this.deleteClient);
    voteEvents.removeListener('correct',this.correct);
  };

  deleteClient = (code) => {
    if (!this.state.startNewClient && !this.state.correctActive) {
      let newClients=[]; // копия самого массива клиентов
      this.state.clients.forEach( (c,i) => {
        if ( c.id !=code ) {
          newClients.push(c);
        }
      } );
      this.setState({clients:newClients});
    }
  }

  showAll = () => {
    this.setState({
      clientStatus: 'common'})
  }

  showActive = () => {
    this.setState({
      clientStatus: 'active'})
  }

  showBlocked = () => {
    this.setState({
      clientStatus: 'blocked'})
  }

  addClient = () => {
    if (this.state.correctClient) {
    return
  }
    this.setState({workMode: 2, startNewClient: true})
  }

  correct = (client) => {
    if (this.state.startNewClient || this.state.correctActive) {
      return
    }
    this.setState({workMode:2, correctClient:client, correctActive: true});
  }

  addOrCorrectClient = () => {
    let newClients=[...this.state.clients];
    if (!this.state.correctActive) {
      let id = Math.random();
      newClients.push({id:id, fam:this.state.newClientFam, im:this.state.newClientIm,
        otch:this.state.newClientOtch, balance:this.state.newClientBalance}, )
      this.setState({workMode: 1,clients:newClients, correctClient:null, correctActive:false,
        newClientFam: null, newClientIm: null, newClientOtch: null, newClientBalance: null, startNewClient: false})
    } else {
      for (let i = 0; i < newClients.length; i++) {
        if (newClients[i].id == this.state.correctClient.id) {
          newClients[i] = this.state.correctClient;
          this.setState({workMode: 1, clients:newClients, correctClient:null, correctActive:false,
          newClientFam: null, newClientIm: null, newClientOtch: null, newClientBalance: null,startNewClient: false})
        }
      }
    }    
  }

  cancelClient = () => {
    this.setState({workMode: 1, correctClient:null, correctActive: false, 
      newClientFam: null, newClientIm: null, newClientOtch: null, newClientBalance: null,startNewClient: false})
  }

  changedFam = (EO) => {
    if(this.state.correctActive) {
      let correctClient = {...this.state.correctClient};
      correctClient.fam = EO.target.value;
      this.setState({correctClient:correctClient});
    } else {
      this.setState({newClientFam:EO.target.value});
    }
  }
  changedIm = (EO) => {
    if(this.state.correctActive) {
      let correctClient = {...this.state.correctClient};
      correctClient.im = EO.target.value;
      this.setState({correctClient:correctClient});
    } else {
      this.setState({newClientIm:EO.target.value});
    }
  }
  changedOtch = (EO) => {
    if(this.state.correctActive) {
      let correctClient = {...this.state.correctClient};
      correctClient.otch = EO.target.value;
      this.setState({correctClient:correctClient});
    } else {
      this.setState({newClientOtch:EO.target.value});
    }
  }
  changedBalance = (EO) => {
    if(this.state.correctActive) {
      let correctClient = {...this.state.correctClient};
      correctClient.balance = EO.target.value;
      this.setState({correctClient:correctClient});
    } else {
      this.setState({newClientBalance:EO.target.value});
    }
  }
  
  render() {

    //console.log("MobileCompany render");

    var clientsCode=[];

    this.state.clients.forEach( client => {
      if (this.state.clientStatus == 'common') {
        clientsCode.push(<MobileClient key={client.id} info={client}  />)
      } else if (this.state.clientStatus == 'active') {
        if (client.balance >=0) {
          clientsCode.push(<MobileClient key={client.id} info={client}  />)
        }
      } else if (this.state.clientStatus == 'blocked') {
        if (client.balance < 0) {
          clientsCode.push(<MobileClient key={client.id} info={client}  />)
        }
      }
    });

    return (
      <div className='MobileCompany'>
        <input type="button" value="Все" onClick={this.showAll} />
        <input type="button" value="Активные" onClick={this.showActive} />
        <input type="button" value="Заблокированные" onClick={this.showBlocked} />

        <hr />

        <table>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>

          <tbody>{clientsCode}</tbody>
          
        </table>
        
        <hr />

        <input type="button" value="Добавить клиента" onClick={this.addClient} />

        {(this.state.workMode == 2) &&
        <div>
          Фамилия: <input type='text' value={(this.state.correctClient)? this.state.correctClient.fam:
          ((this.state.newClientFam)? this.state.newClientFam: ' ')}
          onChange={this.changedFam} />
          <br />
          Имя: <input type='text' value={(this.state.correctClient)? this.state.correctClient.im:
          ((this.state.newClientIm)? this.state.newClientIm: ' ')}
          onChange={this.changedIm} />
          <br />
          Отчество: <input type='text' value={(this.state.correctClient)? this.state.correctClient.otch:
          ((this.state.newClientOtch)? this.state.newClientOtch: ' ')}
          onChange={this.changedOtch} />
          <br />
          Баланс: <input type='text' value={(this.state.correctClient)? this.state.correctClient.balance:
          ((this.state.newClientBalance)? this.state.newClientBalance: ' ')}
          onChange={this.changedBalance} />
          <br />
          <input type='button' value='Добавить' onClick={this.addOrCorrectClient} />
          <input type='button' value='Отмена' onClick={this.cancelClient} />
        </div>
        }

      </div>
    )
    ;

  }

}

export default MobileCompany;
