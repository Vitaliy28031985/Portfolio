// import {Social} from "../Social/Social";
import s from "./Header.module.css";

export const Header = () => {
return (
<div className={s.conteiner}>
    <ul>
        <li className={s.list}>
            <a href="tel:+380968369978" className={s.link}>
                <div className={s.conteinerItem}>
                <p className={s.title}>Teл:</p>
                <p>+38 (096) 837 99 78</p>
                </div>
            </a>
        </li>
    </ul>
</div>
)

}