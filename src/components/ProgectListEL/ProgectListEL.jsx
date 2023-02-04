import s from "./ProgectListEL.module.css";

export const ProgektListEL = ({title, link, onClick}) => {
    return (
        <div onClick={onClick} className={s.conteiner}>
            <div >
                <img className={s.img} src={link} alt="Foto"/>
            </div>
            <div>
            <p className={s.title}>{title}</p>
            </div>
        </div>
    )
}