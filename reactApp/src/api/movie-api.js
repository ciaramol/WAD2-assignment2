export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
        '/api/movies/tmdb/upcoming', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const getUpcomingMovies = () => {
    return fetch(
        '/api/upcomingMovies', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const getTopRatedMovies = () => {
    return fetch(
        '/api/topRatedMovies', {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then(res => res.json());
};

export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        //`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        `/api/movies/tmdb/upcoming/${id}`, {
        headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getCredits = (id) => {

    return fetch(
        `/api/movies/tmdb/${id}/credits`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    ).then(res => res.json());
};



