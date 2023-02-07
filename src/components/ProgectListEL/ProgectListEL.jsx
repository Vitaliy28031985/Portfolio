import {useDeleteProgectMutation} from "../../redux/progectsSlice";
import s from "./ProgectListEL.module.css";

export const ProgektListEL = ({title, link, onClick, id, auditPassword}) => {

    const [deleteProgect] = useDeleteProgectMutation();
    const onDeleteProgect = id => deleteProgect(id);

    return (
        <div onClick={() => onClick(id)} className={s.conteiner}>
            <div >
                <img className={s.img} src={link} alt="Foto"/>
                {auditPassword && (
                   <div onClick={() => onDeleteProgect(id)}>Bидалити</div>  
                )}
            </div>
            <div>
            <p className={s.title}>{title}</p>
            </div>
        </div>
    )
}