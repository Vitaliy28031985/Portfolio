import s from "./Hero.module.css";

export const Hero = () => {
return (
    <div className={s.hero}>
        <div className={s.text}>
        <p>Архітектор</p>
        <p>Андрій Гайдучик</p>
        </div>
        <div>
            <img width="600" 
            src="https://api.man.gov.ua/api/assets/man/51e58a6f-6bae-436a-8fb0-688e726c5cef/" alt="Hero"></img>
        </div>
    </div>
)
}