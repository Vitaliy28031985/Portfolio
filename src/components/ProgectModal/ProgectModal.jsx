// import { logDOM } from '@testing-library/react';
import { useEffect} from 'react';
import s from "./ProgectModal.module.css";

export const ProgectModal = ({onModal, progect}) => {
 
    useEffect(() => {
     window.addEventListener('keydown', handleKeyDown);
     return () => {
     window.removeEventListener('keydown', handleKeyDown);
     } 
     });
 
     const handleKeyDown = e => {
         if (e.code === 'Escape') {
             onModal();
             }
          };
           
 
     return (
         <div className={s.Overlay} >
         <div className={s.Modal}>
            <div className={s.conteiner}>
            <div className={s.dataConteiner} >
            <div >
                <img className={s.img} src={progect[0].link} alt={progect[0].title}/>
            </div>
            <div className={s.discriptionConteiner}>
            <div className={s.discriptionEl}>
            <p className={s.discriptionElTitle}>Нaзва проекту:</p>
            <p>{progect[0].title}</p>
            </div>
            <div className={s.discriptionEl}>
            <p className={s.discriptionElTitle}>Роль в проекті:</p>
            <p>Старший архітектор</p>
            </div>
            <div className={s.discriptionEl}>
            <p className={s.discriptionElTitle}>Час виконання:</p>
            <p>2017 рік</p></div> 
            <div className={s.discriptionElAbout}>
            <p className={s.discriptionElTitle}>Короткий опис проекту:</p>
            <p>
            Реконструкція житлового будинку з перебудовою 
            горища на мансардний поверх. Великий будинок
            будівництва кінця ХХст. з високим горищем та старою покрівлею. 
            Проектом було передбачено зменшення кута даху.
            В результаті отримали симпатичний будинок з раціональним використанням житлового 
            простору та енергоресурсів.</p></div>
            
            <a href='
            https://drive.google.com/file/d/10NbqlkI5dFs1FUoSyRGaJjfOStt0mhvv/view?usp=share_link'
            target="_blank"
            ><p>PDF</p></a>
            </div>
            </div>
             <button className={s.button} onClick={onModal} type="button">Згорнути</button>
             </div>
             
         </div>
         </div>
         
     )
 };
 