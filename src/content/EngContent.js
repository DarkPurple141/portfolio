export default {
   copy: "I'm a full-stack software engineer and designer." +
   " I can develop an idea from scratch and turn it into a minimum viable product." +
   "\nI'm a product manager that bridges the gap between the dev team and the client. "+
   "I can translate an idea into a technical solution --" +
   " and I can decode the technical jargon into terms a client can understand.\n" +
   "If this sounds like the kind of thing you're looking for; get in touch.",
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
            main: "This is a little 2D game made to experiment with the paper.js vector graphics library." +
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
            main: "A Java project pulling together design patterns, game design, map generation." +
                  " Four man team. Long nights, communication, project management - all key.",
            story: ""
         },
         link: "https://github.com/DarkPurple141/sokoban",
         story: "https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"
      },
      {
         name: "Portfolio",
         images: {
            large: "static/images/projects/portfolio/large.png",
            small: "static/images/projects/portfolio/small.png"
         },
         languages: ["javascript", "vuejs", "npm", "css", "node"],
         tools: ["less", "vuejs", "node"],
         description: {
            main: "This website tries to bring together eveything I've worked on. " +
                  "It's much more than a portfolio -- it itself is a culmination of me. "+
                  "What I can do. What I've done. Who I am.",
            story: ""
         },
         link: "https://github.com/DarkPurple141/portfolio",
         story: "https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"
      }
   ]
}
