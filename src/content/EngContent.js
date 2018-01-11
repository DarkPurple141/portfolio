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
         description: "A little toy 2D game made to experiment with the paper.js vector graphics library." +
         " It was my first real foray into doing something substantial with JS. A lot of fun to fiddle with.",
         link: "https://github.com/DarkPurple141/Tank-Hunter-2D",
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
         description: "I wanted to try my hand at random map generation for games. It was rough in parts, but I learnt a ton doing it.",
         link: "https://github.com/DarkPurple141/Maps",
         gif: "static/images/projects/maps/maps.gif",
         story: "https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"
      },
      {
         name: "Sokoban",
         images: {
            large: "static/images/projects/sokoban/large.png",
            small: "static/images/projects/sokoban/small.png"
         },
         languages: ["java"],
         tools: ["junit", "swing"],
         description: "We built the puzzle game 'sokoban' as a major second year project." +
         " Four man team. Long nights, communication, project management - all key.",
         link: "https://github.com/DarkPurple141/sokoban"
         //gif: "static/images/projects/maps/maps.gif",
         //story: "https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"
      }
   ]
}
