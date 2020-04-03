exports.seed = function(knex) {
  // Inserts seed entries
  return knex("interested_stacks").insert([
    { name: "Swift" },
    { name: "Svelte" },
    { name: "TailwindUI" },
    { name: "Relay" },
    { name: "Objective-C" },
    { name: "Golang" }
  ]);
};
