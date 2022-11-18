import React, { useEffect } from "react";
import { ThemeContext } from "../context/theme_context";

export function Button(props) {
  const { label, ...rest } = props;
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <button area-label={label} {...rest} style={{ ...theme }}>
          {props.children && props.children}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export const ThemeButton = (props) => {
  const { children, ...other } = props;
  return <button {...other}>{props.children}</button>;
};

export const ThemeTextField = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export const TodoItem = (props) => {
  const { children } = props;

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: props.isDone ? "green" : "#f32174",
    color: "#ffffff",
    padding: 6,
  };
  return (
    <>
      <li style={style}>
        <input
          type="checkbox"
          onChange={props.onChangeBox}
          checked={props.isDone}
        />
        {children}
        <ThemeButton
          onClick={props.handleDel}
          type="buttton"
          style={{ fontSize: 10 }}
        >
          X
        </ThemeButton>
      </li>
    </>
  );
};
