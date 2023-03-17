import IronManSuitHOC from './index';
const TonyStark = ({ suit, name }) => {
    return (
        <h1>{suit.version} is with {name}</h1>
    )
};

export default IronManSuitHOC(TonyStark);