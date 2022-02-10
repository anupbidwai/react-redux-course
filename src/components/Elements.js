import { ThemeContext } from "../context/theme_context";

export function Button(props) {
    const { label, ...rest } = props;
    return (
        <ThemeContext.Consumer>
            {
                (theme) => (
                    <button area-label={label} {...rest} style={{ ...theme }} >{props.children && props.children}</button>
                )
            }
        </ThemeContext.Consumer>
    )
}
