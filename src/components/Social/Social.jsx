import s from "./Social.module.css"

export const Social = ({link, icon}) => {
   return (
    <>
    <div>
        <ul className={s.list}>
            <li className={s.listItem}><a className={s.link} href="https://www.facebook.com/andrew.gaiduchyk">
                <div className={s.linkInstagram}></div>
                </a>
            </li>
            <li className={s.listItem}><a className={s.link} href="https://www.facebook.com/andrew.gaiduchyk">
                <div className={s.linkFacebuk}></div>
                </a>
            </li>
            <li className={s.listItem}><a className={s.link} href="https://www.facebook.com/andrew.gaiduchyk">
                <div className={s.linkTelegram}></div>
                </a>
            </li>

        </ul>
    </div>
    </>
   ) 
}