const IronManSuitHOC = (Component) => {
    const obj = {
        'version': 'mark85'
    }
    return (props) => <Component suit={obj} {...props} />
};
export default IronManSuitHOC;