import s from "./home.module.scss";
import { homeCards } from "@/mock";
import HomeCard from "@/app/ui/HomeCard";

export default function Home() {
  return (
    <div className={s.home}>
      <div className="container">
        <h1 className={`${s.title} mb-8`}>
          Стань моделью у профессиональных мастеров
        </h1>
        <div className={s.cards}>
          {homeCards.map((card, index) => (
            <HomeCard
              title={card.title}
              img={card.img}
              description={card.description}
              filter={card.filter}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
