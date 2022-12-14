// assets
import JavaScript from '../assets/images/javascript.png'
import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import MongoDB from '../assets/images/mongodb.png'
import Express from '../assets/images/express.png'
import React from '../assets/images/react.png'
import Node from '../assets/images/node.png'
import MySql from '../assets/images/mysql.png'
import TypingGameModel from '../assets/images/typinggame.png'
import BlogitModel from '../assets/images/blogit.png'
import AskitModel from '../assets/images/askit.png'

export const ProjectsData = [
  {
    id: 1,
    title: 'Typing Game',
    description:
      'A typing speed game built with vanilla javascript. It has a 90 sec time limit, a try again button to refresh the page, and WPM, CPM, & mistakes stats.',
    model: TypingGameModel,
    tech: [JavaScript, Html, Css],
    demo: 'https://thriving-travesseiro-aca26f.netlify.app/',
    github: 'https://github.com/Arianejay/Typing-Speed-Game-Vanilla-Js',
  },
  {
    id: 2,
    title: 'Blog It',
    description:
      'A blog app built with MERN stack. Has login/register functionality, write, update, & delete post, and update account settings.',
    model: BlogitModel,
    tech: [MongoDB, Express, React, Node],
    demo: 'https://mellow-cobbler-136d1e.netlify.app/',
    github: 'https://github.com/Arianejay/Blog-it-MERN',
  },
  {
    id: 3,
    title: 'Ask It',
    description:
      'A forum app built with React Js as the client side, and Node Js with MySQL as the backend side. Has login/register functionality, profile page containing questions and comments, post/update/delete questions, and upvote questions.',
    model: AskitModel,
    tech: [MySql, Express, React, Node],
    github: 'https://github.com/Arianejay/Forum-MySql',
  },
]
