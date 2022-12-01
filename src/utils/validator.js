import validator from 'validator';

export const empty = (value) => {
    if (validator.isEmpty(value)) {
        return 'Should not be blank';
    }
};

export const email = (value) => {
    if (!validator.isEmail(value)) {
        return 'Invalid email pattern';
    }
};

export const maxMinLen = (value, min, max = undefined) => {
    if (!validator.isLength(value, min, max)) {
        return "Invalid length"
    }
};