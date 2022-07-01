import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actionTypes';

function increment_counter(incrementBy) {
    return {
        type: INCREMENT_COUNTER,
        payload: incrementBy
    }
};

function decrement_counter() {
    return {
        type: DECREMENT_COUNTER
    }
}

// this is like named export
export { increment_counter, decrement_counter }