import { checkEmail, checkEmpty, checkMaxMinLen } from "./validator";

const runValidation = (formData) => {
    let formErrors = {};
    Object.keys(formData).forEach((field) => {
        const { value, rules, message } = formData[field];
        let errors = [];
        rules.forEach((rule) => {
            let errorMessage = null;
            switch (rule) {
                case "isEmpty":
                    errorMessage = checkEmpty(value);
                    break;
                case "isEmail":
                    errorMessage = checkEmail(value);
                    break;
                default:
                    errorMessage = null;
            }
            if (rule.includes("min")) {
                let minLength = rule.split(":")[1];
                if (value?.length < minLength) {
                    errorMessage = checkMaxMinLen(value, minLength, undefined);
                    if (message.hasOwnProperty("min")) {
                        errorMessage = message.min;
                    }
                }
            }
            if (rule.includes("max")) {
                let maxLength = rule.split(":")[1];
                if (value?.length > maxLength) {
                    errorMessage = checkMaxMinLen(value, undefined, maxLength);
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
export default runValidation;
