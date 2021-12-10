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
        img: 'https://ik.imagekit.io/kacper/kacper-koduje/quizLab_gJGiOTr54.png?updatedAt=1629348366068',
        alt: "Game page from quiz lab",
        link: "https://kacper-arendt.github.io/quiz-lab/",
        description: `An application that allows users to test their knowledge of the frontend. The user can play 
        without registration. I used the Firebase platform to create the database and authorize users.`,
        technologies: ['TypeScript', 'React', 'Redux', 'StyledComponents', 'Firebase']
    },
    {
        id: 1,
        name: "Weather State",
        img: 'https://ik.imagekit.io/kacper/kacper-koduje/weatherState_XBtgeOvOL.png?updatedAt=1629348365265',
        alt: "Weather state page",
        link: "https://kacper-arendt.github.io/Weather-State/",
        description: `The application allows users to check the weather anywhere on earth. All favorite cities are
         loaded automatically. Weather data comes from OpenWeatherMap.`,
        technologies: ['TypeScript', 'React', 'Redux', 'StyledComponents']
    },
    {
        id: 2,
        name: "TodoApp",
        img: 'https://ik.imagekit.io/kacper/kacper-koduje/todoApp_P9JiP-Xg3n.png?updatedAt=1629348365984',
        alt: "Todo app page",
        link: "https://kacper-arendt.github.io/Todo-App/",
        description: `The Todo App is a simple application that is used to create a to-do list. This is the first 
        project I've ever written in TypeScript.`,
        technologies: ['TypeScript', 'React', 'Redux', 'StyledComponents']
    },
    // {
    //     id: 3,
    //     name: "Orlik",
    //     img: 'https://ik.imagekit.io/kacper/kacper-koduje/orlik_pqXT4wfpZD.png?updatedAt=1629348469867',
    //     alt: "Orlik page",
    //     link: 'https://github.com/Kacper-Arendt/OrlikApi-Front-',
    //     description: `Orlik is an application that will allow users to add or reserve a pitch. When creating this
    //     application, I took my first steps in Php. Orlik was created in JS and PHP. This is my first project.`,
    //     technologies: ['React', 'Symfony', 'MySQL', 'CSS Modules']
    // },
    {
        id: 3,
        name: "Green-World",
        img: 'https://ik.imagekit.io/kacper/kacper-koduje/gw2_Jc1n6fn9H.png?updatedAt=1629347933273',
        alt: "Green-World homepage",
        link: 'https://kacper-arendt.github.io/green-world/',
        description: `Green-World is a simple vegetable and fruit shop. The main reason I created this application was
         to learn about useReducer and useContext hooks.`,
        technologies: ['React', 'TypeScript', 'StyledComponents']
    },
    {
        id: 4,
        name: "My-GeaR",
        img: 'https://ik.imagekit.io/kacper/kacper-koduje/gear6_dEItY8d10UE.png?updatedAt=1632122426175',
        alt: "My-gear homepage",
        link: 'https://my-gear-d05d1.web.app/',
        description: `User can add components that have been replaced on his bikes. In the future,
         it will be possible to connect the account with strava, so that the application will remind about upcoming 
         services based on kilometers traveled.`,
        technologies: ['React', 'TypeScript', 'Redux', 'StyledComponents', 'Chakra UI', 'Firebase']
    },
    {
        id: 5,
        name: 'Multi Step Form',
        img: 'https://ik.imagekit.io/kacper/kacper-koduje/Screenshot_2021-12-04_at_12.11.07_dOi9Hm9Gk.png?updatedAt=1638616293102',
        alt: 'Multi Step Form starting page',
        link: 'https://kacper-arendt.github.io/multi-step-form/',
        description: `I created this app to practice multi step form handling. User can choose side, then type his data
            and select planet. I used Swapi for fetch planet names`,
        technologies: ['React', 'TypeScript', 'StyledComponents'],
    }
]