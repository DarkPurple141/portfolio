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
         description: {
            main: "A little toy 2D game made to experiment with the paper.js vector graphics library." +
                  " It was my first real foray into doing something substantial with JS. A lot of fun to fiddle with.",
            story: "Why do I like tanks? I have NFI, but I do and when I needed an idea to make a game just before the second year uni-break,"+
                   " I thought the idea of a tank game would be pretty friggin’ fun."
         },
         link: "https://github.com/DarkPurple141/Tank-Hunter-2D",
         live: "https://cheap-nation.surge.sh",
         story: "https://medium.com/alex-hinds-portfolio/making-an-html5-game-using-paper-js-dc05f51119d5"
      },
      {
         name: "Map Maker",
         images: {
            large: "static/images/projects/maps/large.jpg",
            small: "static/images/projects/maps/small.jpg"
         },
         languages: ["python"],
         tools: ["pygame"],
         description: {
            main: "I wanted to try my hand at random map generation for games." +
            " It was rough in parts, but I learnt a ton doing it.",
            story: "In every book I’ve ever read maps have helped to bring stories to "+
                   "life in a way that descriptions, and place-names never did total-justice to. "+
                   "They could be as simple as a few lines on a piece of paper, to highly technical documents. Whatever they were I loved them."
         },
         link: "https://github.com/DarkPurple141/Maps",
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
         description: {
            main: "We built the puzzle game 'sokoban' as a major second year project." +
                  " Four man team. Long nights, communication, project management - all key.",
            story: ""
         },
         link: "https://github.com/DarkPurple141/sokoban",
         story: "https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"
      }
   ]
}