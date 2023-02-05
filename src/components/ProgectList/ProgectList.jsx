import { useState } from 'react';

import s from "./ProgectList.module.css";
import {db} from "../../db/db";
import {ProgektListEL} from "../ProgectListEL/ProgectListEL";
import {ProgectModal} from "../ProgectModal/ProgectModal";

const rightPassword = "12xvkhfd#95ertfs";

export const ProgectList = () => {
  const [togle, setTogle] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [progect, setProgect] = useState({});
  const [password, setPassword] = useState('');
  const [auditPassword, setAuditPassword] = useState(false);



const hedelLogin = () => {
  setshowLogin(showLogin => !showLogin);
}

const handleTogle = () => {
    setTogle(togle => !togle);
};

const showModal = (id) => {
const dataId = db.filter(progect => progect.id === id);
setProgect(dataId);
handleTogle();
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
    hedelLogin();
    return alert('Вітаємо Вас Андрію! Ви успішно залогінились!');
  }
  setAuditPassword(false);
  hedelLogin();
  setPassword('');
  return alert('Ви ввели неправельний пароль');

} 


    return (
      <div>
        {togle && <ProgectModal onModal={handleTogle} progect={progect}/>}
        {!auditPassword && (<button onClick={hedelLogin} className={s.button}>Увійти</button>)}
        <h2 className={s.title}>Реалізовані Проекти</h2>
        <div className={s.conteiner}>
          
          {db.map(({id, title, link}) => 
          (
           <ProgektListEL
           onClick={showModal}
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
    <div className={s.backdrop}>
    <div className={s.backdropModal}>
      
      <form className={s.addForm}>

      <div className={s.formElement}>
      <input className={s.formInput} name="avatar" type="text"/>
      <label className={s.formLabel} for="avatar">Посилання на aватарку</label>   
        </div>

        <div className={s.formElement}>
        
        <input className={s.formInput} name="title" type="text"/>
        <label className={s.formLabel} for="title">Назва проекту</label>
        </div>

        <div className={s.formElement}>
        
        <input className={s.formInput} name="role" type="text"/>
        <label className={s.formLabel} for="role">Роль в проекті</label>
        </div>

        <div className={s.formElement}>
        <input className={s.formInput} name="time"/>
        <label className={s.formLabel} for="time">Час Виконання</label>
        </div>

        <div className={s.formElement}>
        <input className={s.formInput} name="link" type="text"/>
        <label className={s.formLabel} for="link">Посилання на креслення проекту</label>
        </div>

          <div className={s.formElement}>

        <textarea className={s.formInputTextarea}/>
        <label className={s.formLabel}>Короткий опис проекту</label>
        </div>

        <button onClick={() => setAuditPassword(false)}>Надіслати дані</button>
      </form>
      </div>
      </div>
   )}
        </div>
    )
}