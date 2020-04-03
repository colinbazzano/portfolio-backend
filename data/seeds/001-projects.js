exports.seed = function(knex) {
  // TRUNCATE handled by cleanup file.
  // Inserts seed entries
  return knex("projects").insert([
    {
      name: "Trash Panda",
      start_data: "01/2020",
      end_date: "03/2020",
      image: "data/images/IMG_2247.jpg",
      description:
        "Progressive Web Application that helps users search or use a camera to identify a material and retrieve information about recycling that material",
      role: "Full Stack Developer",
      stack:
        "React, Apollo Client, Apollo Server, GraphQL, PostgreSQL, styled-components"
    },
    {
      name: "Symphinity",
      start_data: "01/2020",
      end_date: "01/2020",
      image: "data/images/symphinity.png",
      description:
        "Web application that takes songs you enjoy and recommends other songs with similar characteristics",
      role: "Back End Developer",
      stack: "Node.js, Express, Knex"
    },
    {
      name: "NBA Career Longevity Predictor",
      start_data: "10/2019",
      end_date: "10/2019",
      image: "data/images/nba.png",
      description:
        "React application that compares professional basketball players to the most similar over history, as well as predict the length of a current player's career",
      role: "Front End Developer",
      stack: "React, Redux, Material-Ui"
    }
  ]);
};
