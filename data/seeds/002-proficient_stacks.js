exports.seed = function(knex) {
  // Inserts seed entries
  return knex("proficient_stacks").insert([
    { name: "HTML", specifics: "" },
    {
      name: "CSS",
      specifics: "styled-components, Less, Sass, Tailwindcss, Material-Ui"
    },
    { name: "JavaScript", specifics: "" },
    { name: "React", specifics: "" },
    { name: "Redux", specifics: "" },
    { name: "Apollo", specifics: "Apollo Server, Apollo Client" },
    { name: "SQL", specifics: "SQLite3, PostgreSQL" },
    { name: "GraphQL", specifics: "" },
    {
      name: "Node.js",
      specifics: "Authorization, JWT, Cookies, Express.js, Knex"
    },
    { name: "Python", specifics: "" },
    {
      name: "Testing",
      specifics: "React Testing Library, Apollo/react Testing, Jest"
    },
    { name: "Git", specifics: "Gitflow, Version Control, Github" }
  ]);
};
