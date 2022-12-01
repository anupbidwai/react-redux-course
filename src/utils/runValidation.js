import { email, empty, maxMinLen } from "./validator";

const runValidation = (formData) => {
    let formErrors = {};
    Object.keys(formData).forEach((field) => {
        const { value, rules } = formData[field];
        let errors = [];
        rules.forEach((rule) => {
            let errorMessage = null;
            switch (rule) {
                case "isEmpty":
                    errorMessage = empty(value);
                    break;
                case "isEmail":
                    errorMessage = email(value);
                    break;
                default:
                    errorMessage = null;
            }
            if (rule.includes("min")) {
                let minLength = rule.split(":");
                errorMessage = maxMinLen(value, minLength[1], undefined);
            }
            if (rule.includes("max")) {
                let maxLength = rule.split(":");
                errorMessage = maxMinLen(value, undefined, maxLength[1]);
            }
            if (errorMessage) {
                errors.push(errorMessage);
            }
        });
        if (errors.length > 0) {
            formErrors[field] = errors;
        }
    });
    return formErrors;
};
export default runValidation;
