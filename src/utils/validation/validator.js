import validator from 'validator';

const empty = (value) => {
    if (validator.isEmpty(value)) {
        return 'Should not be blank';
    }
};

const email = (value) => {
    if (!validator.isEmail(value)) {
        return 'Invalid email pattern';
    }
};

const maxMinLen = (value, min, max = undefined) => {
    if (!validator.isLength(value, min, max)) {
        return "Invalid length"
    }
};

const validate = {
    empty,
    email,
    maxMinLen
};

export default validate;
