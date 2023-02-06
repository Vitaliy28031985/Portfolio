import {Social} from "../Social/Social";
import s from "./Header.module.css";

export const Header = () => {
return (
<div className={s.conteiner}>
<p className={s.title}>Архітектор Андрій Гайдучик</p>
<Social/>
    <ul className={s.contactConteiner}>
        <li className={s.list}>
            <a href="tel:+380968369978" className={s.link}>
                <div className={s.conteinerItem}>
                <p className={s.titleLink}>Teл:</p>
                <p>+38 (096) 837 99 78</p>
                </div>
            </a>
        </li>
  <li className={s.list}>
            <a href="mailto:andrew.gaiduchyk@gmail.com" className={s.link}>
                <div className={s.conteinerItem}>
                <p className={s.titleLink}>Email:</p>
                <p>andrew.gaiduchyk@gmail.com</p>
                </div>
            </a>
        </li>

        <li className={s.list}>
            <a href="tel:+380968369978" className={s.link}>
                <div className={s.phone}>
                </div>
            </a>
        </li>
        <li className={s.list}>
            <a href="mailto:andrew.gaiduchyk@gmail.com" className={s.link}>
                <div className={s.email}>
                </div>
            </a>
        </li>
      
    </ul>
</div>
)

}