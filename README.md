# portfolio-backend

Node.js with Express backend for my portfolio website.

This backend is deployed [here](https://colinbazzano-portfolio.herokuapp.com/)

# Getting Started

To get the server running locally:

    - Fork/Clone the repo
    - `npm install` to install dependencies
    - `npm run server` to start the local server

There are only a few requests you can make to this API, but are as follows:

## Requests

| Method | Endpoint                      | Access Control | Description                                                            |
| ------ | ----------------------------- | -------------- | ---------------------------------------------------------------------- |
| GET    | `/api/projects/`              | all projects   | Returns all of the projects                                            |
| GET    | `/api/projects/[id]`          | project        | Returns a project with the specified ID value                          |
| GET    | `/api/proficient-stacks/`     | all stacks     | Returns string values of the name of each stack I can write code in    |
| GET    | `/api/proficient-stacks/[id]` | stack          | Returns a string value of specified stack I can write code in          |
| GET    | `/api/interested-stacks/`     | all stacks     | Returns stacks that I am interested in learning                        |
| GET    | `/api/interested-stacks/[id]` | stack          | Returns a stack with the specified ID that I am interested in learning |

### Shapes of the returned data

A GET request to `/api/projects/` will return:

    [
        {
            "id": 1,
            "name": "Trash Panda",
            "start_data": "01/2020",
            "end_date": "03/2020",
            "image": "data/images/IMG_2247.jpg",
            "description": "Progressive Web Application that helps users search or use a camera to identify a material and retrieve information about recycling that material",
            "role": "Full Stack Developer",
            "stack": "React, Apollo Client, Apollo Server, GraphQL, PostgreSQL, styled-components"
        },
        {
            "id": 2,
            "name": "Symphinity",
            "start_data": "01/2020",
            "end_date": "01/2020",
            "image": "data/images/symphinity.png",
            "description": "Web application that takes songs you enjoy and recommends other songs with similar characteristics",
            "role": "Back End Developer",
            "stack": "Node.js, Express, Knex"
        },
        {
            "id": 3,
            "name": "NBA Career Longevity Predictor",
            "start_data": "10/2019",
            "end_date": "10/2019",
            "image": "data/images/nba.png",
            "description": "React application that compares professional basketball players to the most similar over history, as well as predict the length of a current player's career",
            "role": "Front End Developer",
            "stack": "React, Redux, Material-Ui"
        }
    ]

A GET request to `/api/projects/[id]` will return something such as:

    {
        "id": 1,
        "name": "Trash Panda",
        "start_data": "01/2020",
        "end_date": "03/2020",
        "image": "data/images/IMG_2247.jpg",
        "description": "Progressive Web Application that helps users search or use a camera to identify a material and retrieve information about recycling that material",
        "role": "Full Stack Developer",
        "stack": "React, Apollo Client, Apollo Server, GraphQL, PostgreSQL, styled-components"
    }

A GET request to `/api/proficient-stacks/` will return:

    [
        {
            "id": 1,
            "name": "HTML",
            "specifics": ""
        },
        {
            "id": 2,
            "name": "CSS",
            "specifics": "styled-components, Less, Sass, Tailwindcss, Material-Ui"
        },
        {
            "id": 3,
            "name": "JavaScript",
            "specifics": ""
        },
        {
            "id": 4,
            "name": "React",
            "specifics": ""
        },
        {
            "id": 5,
            "name": "Redux",
            "specifics": ""
        },
        {
            "id": 6,
            "name": "Apollo",
            "specifics": "Apollo Server, Apollo Client"
        },
        {
            "id": 7,
            "name": "SQL",
            "specifics": "SQLite3, PostgreSQL"
        },
        {
            "id": 8,
            "name": "GraphQL",
            "specifics": ""
        },
        {
            "id": 9,
            "name": "Node.js",
            "specifics": "Authorization, JWT, Cookies, Express.js, Knex"
        },
        {
            "id": 10,
            "name": "Python",
            "specifics": ""
        },
        {
            "id": 11,
            "name": "Testing",
            "specifics": "React Testing Library, Apollo/react Testing, Jest"
        },
        {
            "id": 12,
            "name": "Git",
            "specifics": "Gitflow, Version Control, Github"
        }
    ]

A GET request to `/api/proficient-stacks/[id]` will return something such as:

    {
        "id": 6,
        "name": "Apollo",
        "specifics": "Apollo Server, Apollo Client"
    }

A GET request to `/api/interested-stacks/` will return:

    [
        {
            "id": 1,
            "name": "Swift"
        },
        {
            "id": 2,
            "name": "Svelte"
        },
        {
            "id": 3,
            "name": "TailwindUI"
        },
        {
            "id": 4,
            "name": "Relay"
        },
        {
            "id": 5,
            "name": "Objective-C"
        },
        {
            "id": 6,
            "name": "Golang"
        }
    ]

A GET request to `/api/interested-stacks/[id]` will return something such as:

    {
        "id": 2,
        "name": "Svelte"
    }
