import s from "./ModalAdd.module.css";
export const ModalAdd = ({setAuditPassword}) => {

return (
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
)
}