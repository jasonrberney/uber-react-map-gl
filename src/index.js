import React from 'react';
import ReactDOM from 'react-dom';
import UberMapContainer from './containers/UberMapContainer/UberMapContainer.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import viewport from './redux/reducers.jsx'


const store = createStore(viewport);

ReactDOM.render(
    <Provider store={store}>
        <UberMapContainer />
    </Provider>,
    document.getElementById('root')
);
