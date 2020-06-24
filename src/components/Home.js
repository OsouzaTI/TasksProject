import React from 'react';
import { Home, Title, Menu, Item } from './styles'
import Layout from './layout'
import storeConfig from '../store/storeConfig'
import { Provider } from 'react-redux'


const store = storeConfig()
function App(){
    return (
        <Provider store={store}>
            <Home>                        
                <Layout />
            </Home>
        </Provider>
        );
}


export default App;