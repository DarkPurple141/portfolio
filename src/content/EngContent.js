export default {
   copy: "I believe good software is maintainable, testable, and shipped. I believe premature optimisation is evil. I don't forget the value of the aesthetic.",
   projects: [
      {
         name: "Tank Hunter",
         images: {
            large: "static/images/projects/tanks/large.png",
            small: "static/images/projects/tanks/small.png"
         },
         languages: ["javascript", "css", "html"],
         tools: ["paper.js"],
         description: "A little toy 2D game made to experiment with paper.js. Game is currently available and playable here.",
         link: "",
         live: "https://cheap-nation.surge.sh"
      },
      {
         name: "Map Maker",
         images: {
            large: "static/images/projects/maps/large.jpg",
            small: "static/images/projects/maps/small.jpg"
         },
         languages: ["python"],
         tools: ["pygame"],
         description: "This is a sub-repository of some work I did on creating a map-generating framework for games. The code is pretty rough in parts. But I leant a bunch doing it.",
         link: "https://github.com/DarkPurple141/Maps",
         gif: "static/images/projects/maps/maps.gif",
         story: "https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"
      }
   ]
}
