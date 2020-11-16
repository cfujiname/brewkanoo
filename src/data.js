export const recipes = [
  {
    id: 1,
    title: "Ollie's Big Flavor Non-Descript Homebrew",
    walkthrough: [

      [ { description: "Heat the following amount of water to the temperature provided", strikeWater: 15, time:0}, 
        { description: "Weigh out the following amount of grain and place inside the fermentation vessel",time:0}
      ],
      [ { description: "Add the water to the grains and start the timer", time: 3600}, 
        { description: "Check the temperature of the liquid - Add boiling or cold water to adjust the temperature to between 65-68 degrees C.",time:0},
        { description: "Heat the following amount of sparge water to 77 degrees C", spargeWater: 12,time:0}
      ],
      [ { description: "Strain the liquid back into the boiling pot" ,time:0},
        { description: "In a few batches rinse the grains with the sparge water, each time pouring the amber liquid into the boiling pot",time:0 }
      ],
      [ { description: "Begin boiling - move to the next step when a rolling boil achieved" ,time:0},
        { description: "Weigh out the bittering hops" ,time:0}
      ],
      [ { description: "Add bittering hops and start the timer", time: 1800 },
        { description: "Weigh out the flavouring hops",time:0 }
      ],
      [ { description: "Add flavouring hops and start the timer", time: 1200 },
        { description: "Weigh out the aroma hops" ,time:0}
      ],
      [ { description: "Add aroma hops and start the timer", time: 600 },
        { description: "After the timer is complete, Add the Finings and begin to cool the liquid" ,time:0}
      ],
      [ { description: "Strain the wort into the fermentation vessel, leaving behind the cold break matter at the bottom" ,time:0},
        { description: "Take a hydrometer reading - this will allow you to know when your beer is ready and also to work out the ABV%",time:0 },
        { description: "If the temp has reached 25 degrees, sprinkle the dried yeast on top" ,time:0},
        { description: "Fit the airlock and close the container" ,time:0}
      ],
      [ { description: "When the hydrometer reading has stabilised (around 1-2 weeks), bottle or keg the beer.",time:0 }]

    ],
    ingredients: {
      grains: [{ item: "Maris Otter Pale Ale Malt", quantity: 4.7 }, { item: "Crystal Malt", quantity: 0.45 }],
      hops: [ { item: "Magnum Hops", quantity: 12, type: "Bittering" },
              { item: "Perle Hops", quantity: 14, type: "Bittering" },
              { item: "Cascade Hops", quantity: 57, type: "Flavouring" },
              { item: "Cascade Hops", quantity: 57, type: "Aroma" }
            ],
      yeast: "Safale US-05 yeast",
    },
    equipment: ["A fermentation vessel/bucket","Thermometer"],
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