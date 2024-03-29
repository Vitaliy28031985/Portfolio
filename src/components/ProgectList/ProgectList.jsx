import { useState } from 'react';

import s from "./ProgectList.module.css";
import {ProgektListEL} from "../ProgectListEL/ProgectListEL";
import {ProgectModal} from "../ProgectModal/ProgectModal";
import {ModalAdd} from "../ModalAdd/ModalAdd";
import handleTogle from "../../helpers/handleTogle";
import {useGetProgectsQuery} from "../../redux/progectsSlice";

const rightPassword = "12xvkhfd#95ertfs";

export const ProgectList = () => {
  const [togle, setTogle] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [showAdd, setshowAdd] = useState(false);
  const [progect, setProgect] = useState({});
  const [password, setPassword] = useState('');
  const [auditPassword, setAuditPassword] = useState(false);
const {data: progects} = useGetProgectsQuery();


const hedelLogin = () => {
  setshowLogin(showLogin => !showLogin);
}


const showModal = (id) => {
const dataId = progects?.filter(progect => progect.id === id);
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
    handleTogle(setshowLogin);
    return alert('Вітаємо Вас Андрію! Ви успішно залогінились!');
  }
  setAuditPassword(false);
  handleTogle(setshowLogin);
  setPassword('');
  return alert('Ви ввели неправельний пароль');

} 


    return (
      <div>
        {togle && <ProgectModal onModal={handleTogle} setTogle={setTogle} progect={progect}/>}
        {auditPassword ? (<button onClick={() => setAuditPassword(false)} className={s.button}>Вийти</button>) 
        : (<button onClick={hedelLogin} className={s.button}>Увійти</button>)}
        <h2 className={s.title}>Реалізовані Проекти</h2>
        <div className={s.conteiner}>
          
          {progects?.map(({id, title, avatar}) => 
          (
           <ProgektListEL
           onClick={showModal}
           setTogle={setTogle}
           auditPassword={auditPassword}
           key={id}
           title={title}
           link={avatar}
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