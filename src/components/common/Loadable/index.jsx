import React from 'react';
import Loadable from 'react-loadable';
import { NProgress } from '../../../utils/cdn';

class Loading extends React.Component {
    componentWillMount() {
        NProgress.start();
    }

    componentWillUnmount() {
        NProgress.done();
    }

    render() {
        return null;
    }
}

const LoadableComponent = component => Loadable({
    loader: component,
    loading: () => <Loading />,
});

export default LoadableComponent;
