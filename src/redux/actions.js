import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './actionTypes';

export function increment_counter() {
    return {
        type: INCREMENT_COUNTER
    }
};

export function decrement_counter() {
    return {
        type: DECREMENT_COUNTER
    }
}