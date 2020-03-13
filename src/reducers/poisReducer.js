import { GET_POIS_MODEL } from '../constants/types';

const initialState = {
    poisModel: {}
};

const poisReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POIS_MODEL:
            return {
                ...state,
                poisModel: action.payload
            };
        default:
            return state;
    }
}

export default poisReducer;