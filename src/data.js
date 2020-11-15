export const recipes = [
  {
    id: 1,
    title: "Ollie's Big Flavor Non-Descript Homebrew",
    walkthrough: [
      [ { description: "Heat the following amount of water to the temperature provided", strikeWater: 25, time: 45}, 
        { description: "Weigh out the following amount of grain"}
      ],
      [{ description: "Add the teabag"}],
      [{ description: "Stir", time: 3 }],
      [{ description: "Remove the teabag"}],
      [{ description: "Enjoy!"}]
    ],
    ingredients: {
      grains: [{ item: "chocolate malt", quantity: 0.5 }, { item: "crystal malt", quantity: 3 }],
      hops: ["Bramling Cross", "Citra"],
      yeast: "Safeale",
    },
    equipment: ["A bucket","Thermometer"],
    specs: {
      mashTemp: 68, 
    }
  },
  {
    id: 2,
    title: "Richard's No Nonsense Pale Ale",
    walkthrough: [
      { description: "Boil the water", time: 10},
      { description: "Add the teabag", time: 0},
      { description: "Stir", time: 3 },
      { description: "Remove the teabag", time: 0 },
     { description: "Enjoy!", time: 0}
    ],
    ingredients: {
      grains: ["chocolate malt", "crystal malt"],
      hops: ["Bramling Cross", "Citra"],
      yeast: "Safeale"
    },
    equipment: ["A bucket","Thermometer"]
  },
  {
    id: 3,
    title: "Linus's Lagom Hard Hitting Lager (NOT FOR KIDS)",
    walkthrough: [
      { description: "Boil the water", time: 10},
      { description: "Add the teabag", time: 0},
      { description: "Stir", time: 3 },
      { description: "Remove the teabag", time: 0 },
     { description: "Enjoy!", time: 0}
    ],
    ingredients: {
      grains: ["chocolate malt", "crystal malt"],
      hops: ["Bramling Cross", "Citra"],
      yeast: "Safeale"
    },
    equipment: ["A bucket","Thermometer"]
  },
  {
    id: 4,
    title: "Cristina's Big Boy (PREMIUM)",
    walkthrough: [
      { description: "Boil the water", time: 10},
      { description: "Add the teabag", time: 0},
      { description: "Stir", time: 3 },
      { description: "Remove the teabag", time: 0 },
     { description: "Enjoy!", time: 0}
    ],
    ingredients: {
      grains: ["chocolate malt", "crystal malt"],
      hops: ["Bramling Cross", "Citra"],
      yeast: "Safeale"
    },
    equipment: ["A bucket","Thermometer"]
  }]

  export default recipes