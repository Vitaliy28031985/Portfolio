import { useState } from 'react';

import s from "./ProgectList.module.css";
import {db} from "../../db/db";
import {ProgektListEL} from "../ProgectListEL/ProgectListEL";
import {ProgectModal} from "../ProgectModal/ProgectModal";
import {ModalAdd} from "../ModalAdd/ModalAdd";
import handleTogle from "../../helpers/handleTogle";

const rightPassword = "12xvkhfd#95ertfs";

export const ProgectList = () => {
  const [togle, setTogle] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [showAdd, setshowAdd] = useState(false);
  const [progect, setProgect] = useState({});
  const [password, setPassword] = useState('');
  const [auditPassword, setAuditPassword] = useState(false);



const hedelLogin = () => {
  setshowLogin(showLogin => !showLogin);
}


const showModal = (id) => {
const dataId = db.filter(progect => progect.id === id);
setProgect(dataId);
handleTogle(setTogle);
}

const changePassword = (e) => {
  const {value} = e.currentTarget;
  setPassword(value);

}


const submitPassword = (e) => {
  e.preventDefault();
  if (password === '') {return alert('Введіть будь ласка пароль');}
  if (password === rightPassword) {
    setAuditPassword(true);
    // hedelLogin();
    handleTogle(setshowLogin);
    return alert('Вітаємо Вас Андрію! Ви успішно залогінились!');
  }
  setAuditPassword(false);
  // hedelLogin();
  handleTogle(setshowLogin);
  setPassword('');
  return alert('Ви ввели неправельний пароль');

} 


    return (
      <div>
        {togle && <ProgectModal onModal={handleTogle} setTogle={setTogle} progect={progect}/>}
        {!auditPassword && (<button onClick={hedelLogin} className={s.button}>Увійти</button>)}
        <h2 className={s.title}>Реалізовані Проекти</h2>
        <div className={s.conteiner}>
          
          {db.map(({id, title, link}) => 
          (
           <ProgektListEL
           onClick={showModal}
           setTogle={setTogle}
           key={id}
           title={title}
           link={link}
           id={id}
           /> 
          )
          )}
        </div>
        {showLogin && (
         
        <div className={s.loginConteiner}>
        <form action="">
          <label className={s.loginLabel}>Пароль</label>
          
          <input value={password} onChange={changePassword}/>
    
          <button onClick={submitPassword} className={s.loginButton}>Увійти</button>
        </form>
        </div>
        
        )}
   {auditPassword && (
    
    <button onClick={()=> handleTogle(setshowAdd)} className={s.buttonAdd}>Додати проект</button>
      
   )}
    {showAdd && (
      <ModalAdd setshowAdd={setshowAdd} setAuditPassword={setAuditPassword}/> 
    )}
        </div>
    )
}