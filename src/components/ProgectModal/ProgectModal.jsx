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
            <p>{progect[0].title}</p>
             <button className={s.button} onClick={onModal} type="button">Згорнути</button>
             
         </div>
         </div>
         
     )
 };
 