import styled from "styled-components";
import {StyledWrapper} from "./UI/Wrapper";

const Div = styled(StyledWrapper)`

  div {
    width: 85%;
    max-width: 120rem;
    margin: 3rem 0;

    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .6);
    border: .2rem solid black;
    border-radius: 5rem;
    align-items: center;
  }

  p {
    margin: .5rem 2rem;
    font-size: 1rem;
    line-height: 1.8;
    letter-spacing: 1.7px;
    text-align: center;

    :first-child {
      margin-top: 3rem;
    }

    :last-of-type {
      margin-bottom: 3rem;
    }
  }
`

export const AboutMe = () => {
    return (
        <Div id='aboutMe'>
            <h2> O mnie</h2>
            <div>
                <p>
                    Mam 25 lat jestem żołnierzem oraz studentem trzeciego roku studiów inżynierskich -
                    kierunek Logistyka. Programowaniem zajmuję się od roku. Przy pomocy wielu kursów internetowych
                    solidnie
                    przepracowałem podstawowe zagadnienia JavaScript/TypeScript. Swoją przygodę z programowaniem
                    zacząłem od
                    nauki HTML/CSS3 oraz PHP i MYSQL.
                </p>
                <p>
                    Po zdobyciu wystarczającej wiedzy zacząłem tworzyć własne aplikację pod skrzydłami dwójki
                    zaprzyjaźnionych programistów. Dzięki możliwości pracy w trójkę uczę się jak wykorzystywać najnowsze
                    technologie, a możliwość sprawdzanie owoców mojej pracy daje mi szansę na zrozumienie moich błędów
                    oraz
                    poprawę jakości kodu.
                </p>
                <p>
                    Programowanie i chęć samodoskonalenia wciągnęły mnie w takim stopniu, że postanowiłem zmienić swoje
                    życie zawodowe i spróbować swoich sił w branży IT, dlatego szukam pracy lub stażu jako junior
                    front-end
                    developer.
                </p>
            </div>

        </Div>
    )
}