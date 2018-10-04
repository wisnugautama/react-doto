import axios from 'axios';

function getPlayerByName(nickname) {
    return dispatch => {
        // console.log('masuk', nickname);
        dispatch({ type: 'GET_PLAYER_REQUEST' })
        axios({
            method: 'get',
            url: `https://api.opendota.com/api/search?q=${spliter(nickname)}`
        })
            .then((result) => {
                console.log(result.data);
                dispatch({ type: 'GET_PLAYER_SUCCESS', payload: result.data })
            })
            .catch((err) => {
                dispatch({ type: 'GET_PLAYER_FAILED', payload: err.response })
            });
    }
}

function spliter(input) {
    let splitInput = input.split(' ')
    let joinInput = splitInput.join('+')
    return joinInput
}

export default getPlayerByName