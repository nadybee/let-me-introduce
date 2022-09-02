import {
  NewspaperIcon,
  HeartIcon,
  SunIcon,
  LightBulbIcon,
  CakeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline"

const projects = [
  {
    id: 1,
    name: "The Wedding Loop",
    href: "https://limitless-journey-28555.herokuapp.com/",
    github: "https://github.com/brinton0739/cometomywedding",
    description:
      "Users can manage their guest list and let guests upload pictures to their wedding album",
    paragraph:
      "This application was a group project to showcase the MVC model. My main contribution was the app design and styling of the front end, the sign up and login features and the functionality of the photo uploading and saving to AWS S3 bucket.",
    highlights: [
      "Vanilla Javascript",
      "mySQL, sequelize",
      "AWS S3 Bucket",
      "Tailwind css",
      "Node.js",
      "express",
      "Handlebars",
    ],
    icon: CakeIcon,
    imageSrc: "./images/wedding.jpeg",
    imageSrc2: "./images/wedding_loop.png",
    imageAlt: "screenshot of the Wedding loop homepage",
    version: { name: "1.0", date: "July, 2021" },
   click: 'wedding'
  },
  {
    id: 2,
    name: "Plan My Date App",
    href: "https://nadybee.github.io/date_ideas/",
    github: "https://github.com/nadybee/date_ideas",
    description:
      "Users can let the app choose a random resturant in their area, along with a random activity",
    paragraph:
      "This application was a group project showcasing a front end application and intergrating 3rd party API's. I was primarily response for the intergration of the Yelp API and the Bored API and the CSS",
    highlights: [
      "Vanilla Javascript",
      "Yelp API",
      "Bored API",
      "Tailwind css",
      "HTML/CSS",
    ],
    icon: LightBulbIcon,
    imageSrc: "./images/date.jpeg",
    imageSrc2: "./images/plan_my_date.png",
    imageAlt: "screenshot of plan my date app",
    version: { name: "1.0", date: "June, 2021" },
    click: 'date'
  },
  {
    id: 3,
    name: "BlackJack",
    href: "https://nadybee.github.io/Blackjack/",
    github: "https://github.com/nadybee/Blackjack",
    description: "Classic BlackJack using OOP Vanilla Javascript",
    paragraph:
      "This was my first project before my bootcamp, trying to learn Javascript on my own. I got the game to work, and made some improvements to that game during my studies",
    highlights: ["Vanilla Javascript", "HTML/CSS"],
    icon: HeartIcon,
    imageSrc: "./images/AdobeStock_236741674.jpeg",
    imageSrc2: "./images/blackjack.png",
    imageAlt: "screenshot of plan my date app",
    version: { name: "2.0", date: "Jan, 2022" },
    click: 'blackjack'
  },
  {
    id: 4,
    name: "Weather Dashboard",
    href: "https://nadybee.github.io/Weather_Dashboard/",
    github: "https://github.com/nadybee/Weather_Dashboard",
    description: "App to check the weather",
    paragraph:
      "The project showcased my learning on how to fetch and use data from the 3rd party api, and how to use a CSS library",
    highlights: ["Javascript", "OpenWeather API", "Bootstrap", "HTML/CSS"],
    icon: SunIcon,
    imageSrc: "./images/weather.jpeg",
    imageSrc2: "./images/weather_dashboard.png",
    imageAlt: "screenshot of plan my date app",
    version: { name: "1.0", date: "May, 2022" },
    click: 'weather'
  },

  {
    id: 5,
    name: "Mock Tech Blog",
    href: "https://warm-dusk-87697.herokuapp.com/",
    github: "https://github.com/nadybee/Tech-Blog-using-MVC",
    description:
      "A mock blog that users can create an account, make posts and comments",
    paragraph:
      "This app was built from scratch using the MVC model. This showcases my CRUD knowledge",
    highlights: [
      "Javascript",
      "SQL",
      "mySQL, Sequelize",
      "Bootstrap",
      "Node.js",
      "express",
      "Handlebars",
    ],
    icon: NewspaperIcon,
    imageSrc: "./images/tech_blog.jpeg",
    imageSrc2: "./images/tech_blog_screenshots.png",
    imageAlt: "screenshot of plan my date app",
    version: { name: "1.0", date: "July, 2022" },
    click: 'tech-blog'
  },
  {
    id: 6,
    name: "Yoodlize",
    href: "https://www.yoodlize.com/",
    branch: "https://yoodlize.app.link/fOK6zoT2Rsb",
    description: "The rent anything app",
    paragraph:
      "Yoodlize is the reason I am learning to code. I designed 2.0 version of the app and oversee the further development, and I look forward to be able to dive into the code.",
    highlights: ["React", "React Native", "Graphql", "POSTgreSQL", "Figma"],
    icon: DevicePhoneMobileIcon,
    imageSrc: "./images/yoodlize.png",
    imageSrc2: "./images.yoodlize.png",
    imageAlt: "screenshot of plan my date app",
    version: { name: "2.2.1", date: "Aug, 2022" },
    click: 'yoodlize'
  },
]

export default projects
