import s from "./ProgectList.module.css";
import {db} from "../../db/db";
import {ProgektListEL} from "../ProgectListEL/ProgectListEL";

export const ProgectList = () => {
    return (
        <div className={s.conteiner}>
          {db.map(({id, title, link}) => 
          (
           <ProgektListEL
           key={id}
           title={title}
           link={link}
           /> 
          )
          )}
        </div>
    )
}