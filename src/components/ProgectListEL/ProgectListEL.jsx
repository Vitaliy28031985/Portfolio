import s from "./ProgectListEL.module.css";

export const ProgektListEL = ({title, link, onClick, id}) => {
    return (
        <div onClick={() => onClick(id)} className={s.conteiner}>
            <div >
                <img className={s.img} src={link} alt="Foto"/>
            </div>
            <div>
            <p className={s.title}>{title}</p>
            </div>
        </div>
    )
}