import s from "./SocialNew.module.css"

export const SocialNew = () => {

const blank = "_blank";

return (
   
    <ul className={s.list}>
        <li className={s.listItem}>
          <a href="https://www.facebook.com/andrew.gaiduchyk" target={blank}>
            <div className={s.instagram}>
            </div>
            </a>  
        </li>
        <li className={s.listItem}>
          <a href="https://www.facebook.com/andrew.gaiduchyk" target={blank}>
            <div className={s.facebook}>
            </div>
            </a>  
        </li>
        <li>
          <a href="https://www.facebook.com/andrew.gaiduchyk" target={blank}>
            <div className={s.telegram}>
            </div>
            </a>  
        </li>
    </ul>
    
)
}