import { connect } from "react-redux";
import { increment_counter, decrement_counter } from '../redux/actions';

function Counter(props) {
    return (
        <>
            <span>{props.value}</span>
            <br />
            <button onClick={props.increment_counter}>increment</button>
            <button onClick={props.decrement_counter}>decrement</button>
        </>
    )
}

function mapStateToProps(state) {
    const { CounterReducer } = state;
    return { value: CounterReducer.value }
}

export default connect(mapStateToProps, { increment_counter, decrement_counter })(Counter);