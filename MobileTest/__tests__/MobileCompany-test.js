"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';
import MobileClient from '../components/MobileClient';

test('работа MobileCompany', () => {
  let clientsArr=[ 
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:-250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
  ];

  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany clients={clientsArr}/>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку 'Все'
  const buttonElem = component.root.find( el => el.type=='input' && el.props.value == 'Все' ); 
  buttonElem.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  
  // найдём в вёрстке компонента кнопку 'Активные'
  const buttonElemActive = component.root.find( el => el.type=='input' && el.props.value == 'Активные' ); 
  buttonElemActive.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку 'Заблокированные'
  const buttonElemBlocked = component.root.find( el => el.type=='input' && el.props.value == 'Заблокированные' ); 
  buttonElemBlocked.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const component2 = renderer.create(
    <MobileClient key={clientsArr[1].id} info={clientsArr[1]}/>
  );

  // найдём в вёрстке компонента кнопку 'Удалить'
  const buttonDelete = component2.root.find( el => el.type=='input' && el.props.value == 'Удалить' );
  buttonDelete.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const component3 = renderer.create(
    <MobileClient key={clientsArr[3].id} info={clientsArr[3]}/>
  );

  // найдём в вёрстке компонента кнопку 'Редактировать'
  const buttonCorrect = component3.root.find( el => el.type=='input' && el.props.value == 'Редактировать' );
  buttonCorrect.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку 'Добавить изменения'
  const buttonElemChange = component.root.find( el => el.type=='input' && el.props.value == 'Добавить' ); 
  buttonElemChange.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку 'Добавить клиента'
  const buttonElemAdd = component.root.find( el => el.type=='input' && el.props.value == 'Добавить клиента' ); 
  buttonElemAdd.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента кнопку 'Отмена'
  const buttonElemCancel = component.root.find( el => el.type=='input' && el.props.value == 'Отмена' ); 
  buttonElemCancel.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
