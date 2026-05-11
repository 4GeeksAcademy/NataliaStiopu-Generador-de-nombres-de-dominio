


  let pronoun = ["the", "our", "that", "best", "top"];
  let adj = ["great", "big", "fast", "smart", "cool"];
  let noun = ["jogger", "racoon", "rocket", "planet", "market", "vision", "welcome", "telecom"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let h = 0; h < adj.length; h++) {
      for (let k = 0; k < noun.length; k++) {

        let word = noun[k];

        if (word.endsWith("com")) {
          word = word.slice(0, -3);
        } else if (word.endsWith("come")) {
          word = word.slice(0, -4);
        }

        console.log(pronoun[i] + adj[h] + word + ".com");

      }
    }
  }

