import { connect } from "react-redux";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../redux/actionTypes';

function Counter(props) {
    return (
        <>
            <span>{props.value}</span>
            <br />
            <button onClick={props.increment}>increment</button>
            <button onClick={props.decrement}>decrement</button>
        </>
    )
}

function mapStateToProps(state) {
    const { CounterReducer } = state;
    return { value: CounterReducer.value }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch({ type: INCREMENT_COUNTER }),
        decrement: () => dispatch({ type: DECREMENT_COUNTER })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);