import validate from "./validator";

const runValidation = (formData) => {
    let formErrors = {};
    Object.keys(formData).forEach((field) => {
        const { value, rules, message } = formData[field];
        let errors = [];
        rules.forEach((rule) => {
            let errorMessage = null;
            switch (rule) {
                case "isEmpty":
                    errorMessage = validate.empty(value);
                    break;
                case "isEmail":
                    errorMessage = validate.email(value);
                    break;
                default:
                    errorMessage = null;
            }
            if (rule.includes("min")) {
                let minLength = parseInt(rule.split(":")[1]);
                if (value?.length < minLength) {
                    errorMessage = validate.maxMinLen(value, minLength, undefined);
                    if (message.hasOwnProperty("min")) {
                        errorMessage = message.min;
                    }
                }
            }
            if (rule.includes("max")) {
                let maxLength = parseInt(rule.split(":")[1]);
                if (value?.length > maxLength) {
                    errorMessage = validate.maxMinLen(value, undefined, maxLength);
                    if (message.hasOwnProperty("max")) {
                        errorMessage = message.max;
                    }
                }
            }
            if (errorMessage) {
                if (message.hasOwnProperty(rule)) {
                    errors.push(message[rule]);
                } else {
                    errors.push(errorMessage);
                }
            }
        });
        if (errors.length > 0) {
            formErrors[field] = errors;
        }
    });
    return formErrors;
};

const validation = {
    run: runValidation
}
export default validation;
