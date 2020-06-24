import React, { useState } from 'react';
import { Home, Title, Menu, Item, Splash, ContainerSplash } from './styles'
import Layout from './layout'
import storeConfig from '../store/storeConfig'
import { Provider } from 'react-redux'


const store = storeConfig()
function App(){
    const [loading, setLoading] = useState(false)

    const splashScreen = (timer = 1000) => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Resolvido')
                resolve('Promise Ok')
            }, timer);            
        })
        .then(()=>setLoading(true))
    }
    
    splashScreen(); 

    return (
        <>
        {loading ?
            <Provider store={store}>
                <Home>  
                    <Title>Black Lives Matter. ✊🏽</Title>
                    <Title size={14}>
                        Github: <a href={'https://github.com/OsouzaTI/TasksProject'} target={'blank'}> {'->Tasks Project by Osouza'}</a>
                    </Title>
                    <Layout />
                </Home>
            </Provider>
        : 
            <Splash>
                <ContainerSplash>
                    <img style={{width: '30vw', height: '30vw'}} src={require('../img/engrenagem.png')}/>
                </ContainerSplash>
            </Splash>
        }
        </>
        );
}


export default App;