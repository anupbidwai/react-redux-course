import { useState } from "react";
import { ThemeTextField2 } from "../components/Elements";
import runValidation from "../utils/runValidation";

const UserRegistration = (props) => {
    const [errors, setErrors] = useState();
    const [form, setForm] = useState({
        name: {
            value: "",
            rules: ["isEmpty"],
            message: {}
        },
        email: {
            value: "",
            rules: ["isEmpty", "isEmail"],
            message: {}
        },
        mobile: {
            value: "",
            rules: ["isEmpty", "min:10", "max:10"],
            message: {
                "min": "Minimum 10 digit require",
                "max": "Maximun 10 digit allowed"
            }
        },
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        if (value) {
            setForm({
                ...form,
                [name]: {
                    ...form[name],
                    value: value,
                },
            });
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let formErrors = runValidation(form);
        setErrors(formErrors);
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <ThemeTextField2
                    placeholder="Name"
                    name="name"
                    value={form.name.value}
                    onChange={handleChange}
                    error={errors?.name?.[0]}
                />
                <ThemeTextField2
                    placeholder="Email"
                    name="email"
                    value={form.email.value}
                    onChange={handleChange}
                    error={errors?.email?.[0]}
                />
                <ThemeTextField2
                    placeholder="Mobile"
                    name="mobile"
                    value={form.mobile.value}
                    onChange={handleChange}
                    error={errors?.mobile?.[0]}
                />
                <button type="submit">submit</button>
            </form>
        </section>
    );
};
export default UserRegistration;
