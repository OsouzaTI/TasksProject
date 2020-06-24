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
                <Title>Black Lives Matter. ✊🏽</Title>
                <Layout />
            </Home>
        </Provider>
        );
}


export default App;