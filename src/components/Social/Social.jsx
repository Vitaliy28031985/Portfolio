import s from "./Social.module.css"

export const Social = ({link, icon}) => {
   return (
    <li className={s.social__itam}>
            <a className={s.social__link} href={icon}>
                <svg className={s.social__icon}>
                <use href={icon}></use>
            </svg>
            </a>
        </li>
   ) 
}