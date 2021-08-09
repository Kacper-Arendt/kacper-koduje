import {quizLab, orlik, todoApp, weatherState} from '../../images/Images';

interface IProject {
    id: number,
    name: string,
    link: string,
    description: string,
    technologies: Array<string>,
    img: string,
    alt: string,
}

export const ProjectData: Array<IProject> = [
    {
        id: 0,
        name: "QuizLab",
        img: quizLab,
        alt: "Game page from quiz lab",
        link: "https://kacper-arendt.github.io/quiz-lab/",
        description: `An application that allows users to test their knowledge of the frontend. The user can play 
        without registration. I used the Firebase platform to create the database and authorize users.`,
        technologies: ['TypeScript', 'React', 'Redux', 'StyledComponents']
    },
    {
        id: 1,
        name: "Weather State",
        img: weatherState,
        alt: "Weather state page",
        link: "https://kacper-arendt.github.io/Weather-State/",
        description: `The application allows users to check the weather anywhere on earth. In the city menu, user can
         add a city to the favorites list. All favorite cities are loaded automatically. Weather data comes from 
         OpenWeatherMap.`,
        technologies: ['TypeScript', 'React', 'Redux', 'StyledComponents']
    },
    {
        id: 2,
        name: "TodoApp",
        img: todoApp,
        alt: "Todo app page",
        link: "https://kacper-arendt.github.io/Todo-App/",
        description: `The Todo App is a simple application that is used to create a to-do list. This is the first 
        project I've ever written in TypeScript.`,
        technologies: ['TypeScript', 'React', 'Redux', 'StyledComponents']
    },
    {
        id: 3,
        name: "Orlik",
        img: orlik,
        alt: "Orlik page",
        link: 'https://github.com/Kacper-Arendt/OrlikApi-Front-',
        description: `Orlik is an application that will allow users to add or reserve a pitch. When creating this 
        application, I took my first steps in Php. Orlik was created in JS and PHP. This is my first independent project.`,
        technologies: ['React', 'Symfony', 'MySQL', 'CSS Modules']
    }
]