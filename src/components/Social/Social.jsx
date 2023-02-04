import s from "./Social.module.css"

export const Social = ({link, icon}) => {
   return (
    <>
    <div>
        <ul className={s.list}>
            <li className={s.listItem}><a className={s.link} href="https://www.facebook.com/andrew.gaiduchyk">
                <p>Instagram</p>
                </a>
            </li>
            <li className={s.listItem}><a className={s.link} href="https://www.facebook.com/andrew.gaiduchyk">
                <p>Telegram</p>
                </a>
            </li>
            <li className={s.listItem}><a className={s.link} href="https://www.facebook.com/andrew.gaiduchyk">
                <p>Facebook</p>
                </a>
            </li>
        </ul>
    </div>
    </>
   ) 
}