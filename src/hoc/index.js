const ironManHOC = (Component) => {
    const IronManSuit = (props) => {
        const obj = {
            'version': 'mark85'
        }
        return (
            <Component {...props} version={obj.version} />
        )
    }
    return IronManSuit;
};
export default ironManHOC;