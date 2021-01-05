function getMovies() {
    return [{
            id: 1,
            type: "now",
            thumbnail: "../images/casablanca.png",
            src: "http://courses.cs.cityu.edu.hk/cs2204/video/casablanca-s.mp4",
            name: "Cassblanca",
            cast: "Humphrey Bogart, Ingrid Bergmen",
            director: "Michael Curtiz",
            duration: 130
        },
        {
            id: 2,
            type: "now",
            thumbnail: "../images/wildlife.jpg",
            src: "http://courses.cs.cityu.edu.hk/cs2204/video/wildlife.mp4",
            name: "Big Buck",
            cast: "Big Bunny, Little Fox",
            director: "Forest King",
            duration: 100
        },
        {
            id: 3,
            type: "upcoming",
            thumbnail: "../images/nature.jpg",
            src: "http://courses.cs.cityu.edu.hk/cs2204/video/nature.mp4",
            name: "Nature",
            cast: "Parrot, birds",
            director: "Mother Nature",
            duration: 100
        }
    ]
}