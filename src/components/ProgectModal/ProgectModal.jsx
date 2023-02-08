import { useEffect} from 'react';
import s from "./ProgectModal.module.css";

export const ProgectModal = ({onModal, progect, setTogle, }) => {
 
    useEffect(() => {
     window.addEventListener('keydown', handleKeyDown);
     return () => {
     window.removeEventListener('keydown', handleKeyDown);
     } 
     });
 
     const handleKeyDown = e => {
         if (e.code === 'Escape') {
             onModal(setTogle);
             }
          };
    
          const handleBackdropClick = e => {
            if (e.currentTarget === e.target) {
                onModal(setTogle);
             }
             };
           
 
     return (
         <div className={s.Overlay} >
         <div className={s.Modal}>
            <div className={s.conteiner}>
            <div className={s.dataConteiner} >
            <div >
                <img className={s.img} src={progect[0].avatar} alt={progect[0].title}/>
                
               
            </div>
            <div className={s.discriptionConteiner}>
            <div className={s.discriptionEl}>
            <p className={s.discriptionElTitle}>Нaзва проекту:</p>
            <p>{progect[0].title}</p>
            </div>
            <div className={s.discriptionEl}>
            <p className={s.discriptionElTitle}>Роль в проекті:</p>
            <p>{progect[0].role}</p>
            </div>
            <div className={s.discriptionEl}>
            <p className={s.discriptionElTitle}>Час виконання:</p>
            <p>{progect[0].time}</p></div> 
            <div className={s.discriptionElAbout}>
            <p className={s.discriptionElTitle}>Короткий опис проекту:</p>
            <p>{progect[0].about}</p></div>
            
            <a className={s.link} href={progect[0].link}><p>Подивитись креслення у форматі PDF</p></a>
            </div>
            </div>
             <div className={s.button} onClick={handleBackdropClick} ></div>
             </div>
             
         </div>
         </div>
         
     )
 };

 //target="_blank"