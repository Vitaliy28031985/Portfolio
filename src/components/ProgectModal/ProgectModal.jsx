import { useEffect} from 'react';
import s from "./ProgectModal.module.css";

export const ProgectModal = ({onModal, progect}) => {

    // const link = evLink.map(link => link.link);
    // const title = evLink.map(link => link.title);
 
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
             <button className={s.button} onClick={onModal} type="button">Згорнути</button>
             
         </div>
         </div>
         
     )
 };
 