const initialStatePlayer = {
    players: [],
    error: undefined,
    loading: false
}

const getPlayer = (state = initialStatePlayer, action) => {
    switch (action.type) {
        case 'GET_PLAYER_REQUEST':
            return {
                ...state,
                players: [],
                error: undefined,
                loading: true
            }
        case 'GET_PLAYER_SUCCESS':
            return {
                ...state,
                players: action.payload,
                error: undefined,
                loading: false
            }
        case 'GET_PLAYER_FAILED':
            return {
                ...state,
                players: [],
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default getPlayer