// ractjs.org: https://reactjs.org/docs/code-splitting.html
// for more information please visit above documentation link

import React, { Suspense } from 'react';
import Loader from '../components/LoderDefaultExport';

const OtherComponent = React.lazy(() => import("../components/OtherComponent"));

const CodeSpliting = () => {
    return (
        <Suspense fallback={<Loader />}>
            <OtherComponent />
        </Suspense>
    )
};

export default CodeSpliting;