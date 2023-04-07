import ironManHOC from './index';

const IronMan = ({ version, name }) => {
    return (
        <h1>{version} is with {name}</h1>
    )
};

export default ironManHOC(IronMan);