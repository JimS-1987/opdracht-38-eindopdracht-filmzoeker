const newBtn = document.getElementById("new-btn");
const avengerBtn = document.getElementById("avengers-btn");
const xmenBtn = document.getElementById("xmen-btn");
const princessBtn = document.getElementById("princess-btn");
const batmanBtn = document.getElementById("batman-btn");
const buttons = document.getElementById("radio-buttons");
const moviesPosters = document.getElementById("movie-posters")
const movieList = document.querySelector(".movie-list");
const butNames = document.getElementsByName("movie")
const buttonClass = document.querySelectorAll(".input")
const allRadioButtons = document.querySelectorAll("input");



const addMoviesToDom = (moviesArray) => {
    moviesArray.forEach(movie => {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const newImg = document.createElement('img');
        newImg.src = movie.Poster;
        newA.href = `https://www.imdb.com/title/${movie.imdbID}`;
        newA.appendChild(newImg);
        newLi.appendChild(newA);
        moviesPosters.appendChild(newLi);
    });
}

addMoviesToDom(movies)

const addEventListeners = () => {
    allRadioButtons.forEach(radioButton => {
        radioButton.addEventListener("change", e => {
             return (e.target.value)

        });
    });

}
addEventListeners()


const handleOnChangeEvent= () =>{
    let film = addEventListeners(e);
    switch (film) {
        case ("avengers"):
            console.log(e.target.value)
            break;
        case (e.target.value = ("new")):
            console.log("hey ik ben New")
            break;
        case (e.target.value = ("x-men")):
            console.log("hey ik ben X-Men")
            break;
        case (e.target.value = ("princess")):
            console.log("hey ik ben een Princess")
            break;
        case (e.target.value = ("batman")):
            console.log(" du ne nu ne nu ne nu ne nune Batman")
            break;
        default: 
            console.log("kies maar een film uit ");
            break;
    }

}


/*
const filteredMovies = ((moviesArray) => {
    moviesArray.map(movie => {
        const newMovie = movie.Year >= "2014";
        const avengerMovie = movie.Title.includes("Avengers");
        const XmenMovie = movie.Title.includes("X-Men")
        const princessMovie = movie.Title.includes("Princess")
        const batmanMovie = movie.Title.includes("Batman")
        if (newMovie) {
            return console.log(movie.Poster)
        } else if (avengerMovie) {
            return console.log(movie.Poster)
        } else if (XmenMovie) {
            return (movie.Poster)
        } else if (princessMovie) {
            return (movie.Poster)
        } else if (batmanMovie) {
            return (movie.Poster)
        }

    });

});
filteredMovies(movies)



//addMoviesToDom(movies)



*/

/*

newBtn.addEventListener ((e) => {

     if (newBtn.checked = true) {

        return addMoviesToDom(newMovies)
    }
});

avengerBtn.addEventListener ((e) => {

    if (avengerBtn.checked = true) {

        return addMoviesToDom(avengersMovie)
    }
});
xmenBtn.addEventListener((e) => {

    if (xmenBtn.checked = true) {

        return addMoviesToDom(xmenMovie)
    }
});

princessBtn.addEventListener((e) => {

    if (princessBtn.checked = true) {

        return addMoviesToDom(princessMovie)
    }
});

batmanBtn.addEventListener((e) => {

    if (batmanBtn.checked = true) {

        return addMoviesToDom(batmanMovie)
    }
});


*/