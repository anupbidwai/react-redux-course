import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../actionTypes';

const initialState = {
    value: 0
};

export function CounterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                value: ++state.value
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                value: --state.value
            }
        default: return state;
    }
}