import validator from 'validator';

export const empty = (value) => {
    if (validator.isEmpty(value)) {
        return 'Field is required';
    }
};

export const email = (value) => {
    if (!validator.isEmail(value)) {
        return 'Invalid email format';
    }
};

export const maxMinLen = (value, min, max = undefined) => {
    if (!validator.isLength(value, min, max)) {
        return "Invalid length"
    }
};