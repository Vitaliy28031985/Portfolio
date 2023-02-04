import { useState } from 'react';

import s from "./ProgectList.module.css";
import {db} from "../../db/db";
import {ProgektListEL} from "../ProgectListEL/ProgectListEL";
import {ProgectModal} from "../ProgectModal/ProgectModal";

export const ProgectList = () => {
  const [togle, setTogle] = useState(false);
  const [progect, setProgect] = useState({});

  const handleTogle = () => {
    setTogle(togle => !togle);
};


    return (
      <div>
        {togle && <ProgectModal onModal={handleTogle}/>}
        <h2 className={s.title}>Реалізовані Проекти</h2>
        <div className={s.conteiner}>
          
          {db.map(({id, title, link}) => 
          (
           <ProgektListEL
           onClick={handleTogle}
           key={id}
           title={title}
           link={link}
           /> 
          )
          )}
        </div>
        </div>
    )
}