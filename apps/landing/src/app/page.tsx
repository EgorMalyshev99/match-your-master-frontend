import { homeCards } from "@/mock";
import HomeCard from "@/components/cards/HomeCard";
import { Container, Grid, GridCol } from "@mantine/core";
import s from "./home.module.scss";

export default function Home() {
  return (
    <div className={s.home}>
      <Container size="xl">
        <h1 className={`${s.title} mb-12 mt-0`}>
          Стань моделью у профессиональных мастеров
        </h1>
        <Grid>
          {homeCards.map((card, index) => (
            <GridCol span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <HomeCard
                title={card.title}
                img={card.img}
                description={card.description}
                filter={card.filter}
              />
            </GridCol>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
