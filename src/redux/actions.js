import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actionTypes';

export function increment_counter(incrementBy) {
    return {
        type: INCREMENT_COUNTER,
        payload: incrementBy
    }
};

export function decrement_counter() {
    return {
        type: DECREMENT_COUNTER
    }
}