import validator from 'validator';

export const checkEmpty = (value) => {
    if (validator.isEmpty(value)) {
        return 'Should not be blank';
    }
};

export const checkEmail = (value) => {
    if (!validator.isEmail(value)) {
        return 'Invalid email pattern';
    }
};

export const checkMaxMinLen = (value, min, max = undefined) => {
    if (!validator.isLength(value, min, max)) {
        return "Invalid length"
    }
};