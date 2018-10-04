// initialisasi awal
const initialStateTeams = {
    teams: [],
    error: null,
    loading: false
}

// reducer
const getTeams = (state = initialStateTeams, action) => {
    switch (action.type) {
        case 'GET_TEAMS_REQUEST':
            return {
                ...state,
                loading: true,
                teams: [],
                error: null
            }
        case 'GET_TEAMS_SUCCESS':
            return {
                ...state,
                teams: action.payload,
                error: null,
                loading: false
            }
        
        case 'GET_TEAMS_ERROR':
            return {
                ...state,
                teams: [],
                error: action.payload,
                loading: false
            }
        default: 
            return state
    }
}

export default getTeams