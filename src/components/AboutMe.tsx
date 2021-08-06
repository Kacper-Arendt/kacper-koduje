import styled from "styled-components";
import {StyledWrapper} from "./UI/Wrapper";
import {device} from "../Models/MediaQueries";
import {me} from '../images/Images'

const Div = styled(StyledWrapper)`
  div {
    width: 80%;
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
  }

  h2 {
    width: 80%;
    margin-top: 2rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.8;
    letter-spacing: 1.7px;

    :first-of-type {
      margin: 0;
    }
  }

@media${device.tablet} {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;

  div {
    width: 50%;

    :nth-of-type(2) {
      width: 35%;
      margin-left: 2rem;
      background-image: url(${me});
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: 65%;
    }
  }

} @media${device.desktop} {
  p {
    line-height: 1.5;
  }
}
`

export const AboutMe = () => {
    return (
        <Div id='aboutMe'>
            <h2>About</h2>
            <div>
                <p>
                    Mam 25 lat jestem studentem trzeciego roku studiów inżynierskich -
                    kierunek Logistyka. Programowaniem zajmuję się od roku. Przy pomocy wielu kursów internetowych
                    solidnie przepracowałem podstawowe zagadnienia JavaScript/TypeScript. Swoją przygodę z
                    programowaniem zacząłem od nauki HTML/CSS3 oraz PHP i MYSQL.
                </p>
                <p>
                    Po zdobyciu wystarczającej wiedzy zacząłem tworzyć własne aplikację pod skrzydłami dwójki
                    zaprzyjaźnionych programistów. Dzięki możliwości pracy w trójkę uczę się jak wykorzystywać najnowsze
                    technologie, a możliwość sprawdzanie owoców mojej pracy daje mi szansę na zrozumienie moich błędów
                    oraz poprawę jakości kodu.
                </p>
                <p>
                    Programowanie i chęć samodoskonalenia wciągnęły mnie w takim stopniu, że postanowiłem zmienić swoje
                    życie zawodowe i spróbować swoich sił w branży IT, dlatego szukam pracy lub stażu jako junior
                    front-end
                    developer.
                </p>
            </div>
            <div>
            </div>
        </Div>
    )
}