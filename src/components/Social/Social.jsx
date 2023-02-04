import s from "./Social.module.css"

export const Social = ({link, icon}) => {
   return (
    // <li className={s.social__itam}>
    //         <a className={s.social__link} href={icon}>
    //             <svg className={s.social__icon}>
    //             <use href={icon}></use>
    //         </svg>
    //         </a>
    //     </li>
    <div>
        <ul className={s.list}>
            <li className={s.listItem}><a className={s.link} href="#">
                <p>Instagram</p>
                </a>
            </li>
            <li className={s.listItem}><a className={s.link} href="#">
                <p>Telegram</p>
                </a>
            </li>
            <li className={s.listItem}><a className={s.link} href="https://www.facebook.com/andrew.gaiduchyk">
                <p>Facebook</p>
                </a>
            </li>
        </ul>
    </div>
   ) 
}