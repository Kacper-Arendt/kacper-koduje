import styled from "styled-components";
import {dog} from '../images/Images';
import {StyledWrapper} from "./UI/Wrapper";

const Div = styled(StyledWrapper)`
  height: 70vh;
  background-image: url(${dog});
  
  div {
    width: 80%;
    max-width: 120rem;
    margin: auto 0;
    
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .8);
    border: .4rem solid black;
    border-radius: 5rem;
    align-items: center;
  }

  p {
    :first-child {
      margin-top: 4rem;
    }

    :last-of-type {
      margin-bottom: 4rem;
    }

    margin: .5rem 4rem;
    padding: .5rem 1rem;
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 1.7px;
    text-shadow: 1px 1px black;
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