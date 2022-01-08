import { useContext } from "react";
import { ThemeContext } from "../context/theme_context";

export function Button(props) {
    const theme = useContext(ThemeContext);
    let style = {};
    if (theme) {
        style = {
            backgroundColor: theme.backgroundColor,
            color: theme.color
        }
    }
    return <button {...props} style={style}>{props.children && props.children}</button>
}
