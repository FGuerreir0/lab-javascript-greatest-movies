// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {
    return array.map(movie => movie.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
    const filterDirect = array.filter((movie) => {
        const stevenMovie = movie.director === "Steven Spielberg";
        const dramaMovie = movie.genre.includes('Drama');
        return (stevenMovie && dramaMovie);
    });
    return (filterDirect.length);
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    // RETURN AVERAGE EVEN RATE IS EMPTY
    const average = array.reduce((sum, array) => {
        return sum += array.rate;
    }, 0);
    if (!average) {
        return 0;
    } else {
        return Math.round((average / array.length) * 100) / 100;
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const arrayDrama = array.filter((movieDrama) => {
        return drama = movieDrama.genre.includes('Drama');
    });
    return ratesAverage(arrayDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const arrayYear = array.filter((movieYear) => {
        return year = movieYear.year;
    });
    return arrayYearSorted = arrayYear.sort((a, b) => {
        if (a.year > b.year) { //YEAR SORTING
            return 1;
        } else if (a.year === b.year) { //IF YEAR IS EQUAL THEN TITLE SORT
            if (a.title > b.title) {
                return 1;
            } else return -1;
            return 1;
        } else return -1;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(array) {
    const arrayTitle = array.map(movie => movie.title);
    const arrayTitleSorted = arrayTitle.sort((a, b) => {
        if (a > b) {
            return 1;
        } else return -1;
    });
    if (arrayTitleSorted.length > 20) {
        let removedItems = arrayTitleSorted.splice(20, arrayTitleSorted.length);
        return arrayTitleSorted;
    } else return arrayTitleSorted;
};



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average