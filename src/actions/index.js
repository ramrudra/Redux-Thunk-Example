import 'whatwg-fetch';

export default function fetchMatches(country) {
    const url = `http://worldcup.sfg.io/matches/country?fifa_code=${country.toUpperCase()}`;
    return (dispatch) => {
        dispatch({ type: 'FETCH_LOADING', status: true });
        fetch(url)
            .then(checkStatus)
            .then(parseJSON)
            .then(function(data) {
                dispatch({ type: 'FETCH_ERROR', error: null });
                dispatch({ type: 'FETCH_MATCHES', data });
                dispatch({ type: 'FETCH_LOADING', status: false });
            }).catch(function(error) {
            dispatch({ type: 'FETCH_MATCHES', data: null });
            dispatch({ type: 'FETCH_ERROR', error });
            dispatch({ type: 'FETCH_LOADING', status: false });
        })
    }
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

function parseJSON(response) {
    return response.json()
}