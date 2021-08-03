import {quizLab, orlik, todoApp, weatherState} from '../../images/Images';

interface IProject {
    id: number,
    name: string,
    link: string,
    description: string,
    img: string,
    alt: string,
}

export const ProjectData: Array<IProject> = [
    {
        id: 0,
        name: "QuizLab",
        img: quizLab,
        alt: "Game page from quiz lab",
        link: "https://kacykvaa.github.io/quiz-lab/#/",
        description: `Aplikacja dzięki której można poszerzać swoją wiedzę z zakresu frontendu. Użytkownik może zagrać 
            bez konieczności rejestracji. Przy tworzeniu korzystałem z takich technologii jak TypeScript,React, Redux,
             StyledComponents. Do stworzenia bazy danych oraz autoryzacji użytkowników użyłem platformy Firebase.`,
    },
    {
        id: 1,
        name: "Weather State",
        img: weatherState,
        alt: "Weather state page",
        link: "https://kacykvaa.github.io/Weather-State/",
        description: ` Aplikacja umożliwia sprawdzenie pogody w dowolnym mieście na ziemi. W menu miasta istnieje
            możliwość dodania do listy ulubionych. Wszystkie ulubione miasta ładują się automatycznie.
            Dane pogodowe pobierane są z serwisu OpenWeatherMap. Do napisania Weather State użyłem
            TypeScript, React, Redux i StyledComponents.`
    },
    {
        id: 2,
        name: "TodoApp",
        img: todoApp,
        alt: "Todo app page",
        link: "https://kacykvaa.github.io/Todo-App/",
        description: ` TodoApp to bardzo prosta aplikacja, która służy do tworzenia listy zadań. Był to pierwszy
            projekt, który napisałem w TypeScripcie. TodoApp powstała przy pomocy Reacta, Reduxa i
            StyledComponents`,
    },
    {
        id: 3,
        name: "Orlik",
        img: orlik,
        alt: "Orlik page",
        link: 'https://github.com/kacykvaa/OrlikApi-Front-',
        description:`Orlik to aplikacja, dzięki której będzie można dodać, zarezerwować orlik. Przy pisaniu
             tej aplikacji poznawałem świat backendu pisząc w języku PHP. W moim repozytorium można znaleźć
             kod pisany w JS oraz PHP. Jest to mój pierwszy samodzielny projekt.`,
    }
]