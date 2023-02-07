import { useState } from 'react';

import s from "./ModalAdd.module.css";
import handleTogle from "../../helpers/handleTogle";


export const ModalAdd = ({setAuditPassword, setshowAdd}) => {

  const [avatar, setAvatar] = useState('');
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [time, setTime] = useState('');
  const [link, setLink] = useState('');
  const [about, setAbout] = useState('');



  const handleChange = e => {
    const {name, value,} = e.currentTarget;
    switch (name) {

     case 'avatar':
     setAvatar(value);
     break;
     
     case 'title':
     setTitle(value);
     break;

     case 'role':
     setRole(value);
     break;

     case 'time':
     setTime(value);
     break;

     case 'link':
     setLink(value);
     break;

     case 'about':
     setAbout(value);
     break;


     default:
     return;  
   }
      };

      const handleBackdropSubmit = e => {
        e.preventDefault();
        console.dir({avatar, title, role, time, link, about})
      }
   

return (
    <div className={s.backdrop}>
    <div className={s.backdropModal}>
      <div onClick={() => handleTogle(setshowAdd)} className={s.close}></div>
      <form onSubmit={handleBackdropSubmit} className={s.addForm}>

      <div className={s.formElement}>
      <input 
      className={s.formInput} 
      value={avatar}
      onChange={handleChange}
      name="avatar"
      type="url"/>
      <label className={s.formLabel} for="avatar">Посилання на aватарку</label>   
        </div>

        <div className={s.formElement}>
        
        <input 
        className={s.formInput}
        value={title}
        onChange={handleChange}
        name="title"
        type="text"/>
        <label className={s.formLabel} for="title">Назва проекту</label>
        </div>

        <div className={s.formElement}>
        
        <input className={s.formInput}
        value={role}
        onChange={handleChange}
        name="role"
        type="text"/>
        <label className={s.formLabel} for="role">Роль в проекті</label>
        </div>

        <div className={s.formElement}>
        <input 
        className={s.formInput} 
        value={time}
        onChange={handleChange} 
        name="time" 
        type="text"/>
        <label className={s.formLabel} for="time">Час Виконання</label>
        </div>

        <div className={s.formElement}>
        <input 
        className={s.formInput} 
        value={link}
        onChange={handleChange} 
        name="link" 
        type="url"/>
        <label className={s.formLabel} for="link">Посилання на креслення проекту</label>
        </div>

          <div className={s.formElement}>

        <textarea 
        className={s.formInputTextarea} 
        value={about}
        onChange={handleChange} 
        name="about" 
        type="text"/>
        <label className={s.formLabel}>Короткий опис проекту</label>
        </div>

        <button className={s.buttonSubmit} >Надіслати дані</button>
      </form>
      </div>
      </div>
)
}