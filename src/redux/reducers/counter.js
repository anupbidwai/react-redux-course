import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actionTypes';

const initialState = {
    value: 0
};

export function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                value: state.value > 0 ? --state.value : 0
            }
        default: return state;
    }
}