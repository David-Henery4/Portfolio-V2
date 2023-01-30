const projectsData = [
  {
    id: 1,
    name: "Audiophile",
    descShort:
      "Audiophile is a multi page Ecommerce site for different audio equipment.",
    descLong:
      "Audiophile is a music equipment ecommerce site. Users can browse different products and categries. It also has cart full cart functionality and checkout validation for when users want to make a purchase.",
    thumbNail: "audiophile-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "React-Router-6",
      "Redux-Toolkit",
      "Redux-Persist",
    ],
    repoUrl: "https://github.com/David-Henery4/Audiophile-Ecommerce-site",
    liveUrl: "https://audiophile-ecommerce-store.netlify.app",
  },
  {
    id: 2,
    name: "Entertainment",
    descShort:
      "This multi-page entertainment web app, where users can bookmark and search for different shows and movies.",
    descLong:
      "Entertainment is a multi-page entertainment app. Users can search for different content and also view filtered pages that show all the T.V shows available or all the movies that are available. It also has a dedicated page to display all the different movies & T.V shows the users has bookmarked.",
    thumbNail: "entertainment-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "React-Router-6",
      "Redux-Toolkit",
      "TailwindCSS",
      "Axios",
      "Json-Server",
      "Redux-persist",
    ],
    repoUrl: "https://github.com/David-Henery4/Entertainment-V1",
    liveUrl: "https://thats-entertainment-v1.netlify.app",
  },
  {
    id: 3,
    name: "Kanban Task Manager",
    descShort:
      "Kanban Tasks manager is a fully-functional task management app with a light/dark mode toggle. It also has a drag and drop feature.",
    descLong:
      "Kanban Tasks is a task management app that allows users to control different tasks, update their status and create different task boards. Users can also change their tasks status by dragging them into different columns.",
    thumbNail: "kanban-task-manager-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "Redux-Persist",
      "Redux-Toolkit",
    ],
    repoUrl: "https://github.com/David-Henery4/Kanban-Task-Manager",
    liveUrl: "https://kanban-taskmanager.netlify.app",
  },
  {
    id: 4,
    name: "Interactive Comments Section",
    descShort:
      "This is a fully interactive comments section, where users can create, edit, like, reply and delete comments",
    descLong:
      "Interactive Comments Section is fully interactive comments section. where users can add, edit and delete their own messages. Users can also reply and like other messages. Messages also display a dynamic timer to keep track of when a message was posted.",
    thumbNail: "interactive-comments-section-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "Redux-Persist",
      "Redux-Toolkit",
    ],
    repoUrl: "https://github.com/David-Henery4/Interactive-Comments-Section",
    liveUrl: "https://comments-interactive-section.netlify.app",
  },
  {
    id: 5,
    name: "Pay API",
    descShort:
      "This is a 4 page website, for a company that sells and distributes different APIs.",
    descLong:
      "This is a 4 page website, for a company called Pay API, that sells and distributes different APIs. It has a shared email sign-up thoughout most pages which has validation. It also has a full contact form page which also provides a validation check.",
    thumbNail: "pay-api-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "React-Router-6",
      "TailwindCSS",
    ],
    repoUrl: "https://github.com/David-Henery4/pay-api-website",
    liveUrl: "https://apy-api-site.netlify.app",
  },
  {
    id: 6,
    name: "Where in the world?",
    descShort:
      "Allows users to search for countries and see information about them.",
    descLong:
      "This application lets users search for different countries around the world and find out details about them. There is also an option to allow users to filter countries by different regions. It also has a dark/light mode toggle for the users preference",
    thumbNail: "where-in-the-world-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "React-Router-6",
      "Redux-Toolkit",
      "Axios",
    ],
    repoUrl: "https://github.com/David-Henery4/Where-in-the-world",
    liveUrl: "https://where-abouts-in-the-world.netlify.app",
  },
  {
    id: 7,
    name: "Bookmarks",
    descShort:
      "A landing page for a company that sell software that helps users bookmark and orginise websites.",
    descLong:
      "Bookmarks is a landing page for a company that sells sfotware that helps to orginse & bookmark your website. It has multiple sections, including a tabbed features section that allows you to switch between the tabs for different features. It also has an accordion section for FAQs and also some light email validation on a contact us section.",
    thumbNail: "where-in-the-world-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: ["HTML", "CSS/SCSS", " Javascript", "TailwindCSS"],
    repoUrl: "https://github.com/David-Henery4/Bookmark-Landing",
    liveUrl: "https://bookmarks-home-landing.netlify.app",
  },
  {
    id: 8,
    name: "Ip address tracker",
    descShort:
      "Ip Address Tracker let's users see their own Ip address information aswell as search for details about other Ip addresses.",
    descLong:
      "Ip address tracker allows users to search for details about a specific Ip address, while also showing details about the users Ip address. It also has an interactive map which shows the location of the users initial ip address location and any seearched for ip addresses.",
    thumbNail: "where-in-the-world-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "Redux-Toolkit",
      "Axios",
      "Git",
      "Leaflet",
    ],
    repoUrl: "https://github.com/David-Henery4/IP-Address-Tracker",
    liveUrl: "https://ip-address-tracker-mentor.netlify.app",
  },
  {
    id: 9,
    name: "Languisa",
    descShort:
      "Languisa is a fictional language learning site which offers users different ways of learning languages. It also has a greeting animation in different languages.",
    descLong:
      "Languisa is a fictional language learning site. Which offers users multiple ways of learning a new language. The site has a small greetings animation, which displays greetings in different languages. It also has a slideshow section showcasing various testimonials",
    thumbNail: "where-in-the-world-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: ["HTML", "CSS/SCSS", "Javascript", "Git", "Parcel"],
    repoUrl: "https://github.com/David-Henery4/Languisa",
    liveUrl: "https://languisa.netlify.app",
  },
  {
    id: 10,
    name: "Mars Weather",
    descShort:
      "Gives the most up to date and available weather data on mars, from nasa's curiosity rover.",
    descLong:
      "Provides the users with weather data from mars, from nasa's curiosity rover. It allows them to see the weather for the most current day aswell as the previous week. Also contains a fahrenheit to celsius converter.",
    thumbNail: "where-in-the-world-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: ["HTML", "CSS", "Javascript", "Git", "Parcel"],
    repoUrl: "https://github.com/David-Henery4/Mars-Weather",
    liveUrl: "https://mars-tiempo.netlify.app",
  },
  {
    id: 11,
    name: "myTeam",
    descShort:
      "This is a dashboard style site for people to check for basic information about a football team.",
    descLong:
      "myTeam lets users search for stats & information about their favourite football teams. Users can get different statistics about their teams current season and can get information about their teams history and more! myTeam also has a light mode & darkmode for the users preference.",
    thumbNail: "where-in-the-world-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "Chart.js",
      "Parcel",
      "Git",
    ],
    repoUrl: "https://github.com/David-Henery4/myTeam-Football-Dashboard",
    liveUrl: "https://myteam-football-dashboard.netlify.app",
  },
  {
    id: 12,
    name: "Pomodoro",
    descShort:
      "A pomodoro timer for users to keep track of time using the pomodoro technique.",
    descLong:
      "This app lets users to use a timer when using the pomodoro technique. It also has different options to allow the user to select a timer for their break time, one for a short break and one for a long break. The app also has a settings menu so users can select custom durations for their timers, as well as being able to choose different font types & a different colour scheme.",
    thumbNail: "where-in-the-world-thumb.png",
    deviceMockupsSml: "device-mockups-small.png",
    deviceMockupsLge: "device-mockups-large.png",
    technologiesUsed: [
      "HTML",
      "CSS/SCSS",
      "Javascript",
      "React",
      "TailwindCSS",
    ],
    repoUrl: "https://github.com/David-Henery4/Pomodoro-App",
    liveUrl: "https://pomodoro-countdown-app.netlify.app",
  },
];

export default projectsData;
