import styled from 'styled-components'
const cores = require('./colors/default.json')

export const Title = styled.h1`
    color: ${cores.FG};
    font-size: 16px;
    text-align: center;
`;

export const Home = styled.div`
    background-color: ${cores.BG};
    height: 100vh;
    font-family: 'MuseoModerno', cursive;
    a {
        color: white;
        text-decoration: none;       
    }

`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 240px auto;
    grid-template-rows: 50px auto auto;
    grid-template-areas:
        'AT DL'
        'AL DL ';    
    height: 100vh;
`;

export const Container = styled.div`
    grid-area: AL;
    /* border-radius: 15px; */
    
    -webkit-box-shadow: 4px 6px 17px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 6px 17px -4px rgba(0,0,0,0.75);
    box-shadow: 4px 6px 17px -4px rgba(0,0,0,0.75);

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${cores.AL};
    padding: 10px 5px;
    max-height: 100vh;
    overflow-y: scroll;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

`;

export const Tasks = styled.div`

    background-color: ${cores.TASKS};
    height: 50px;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 10px;
    text-align: center;
    /* line-height: 50px; */
    border-radius: 5px;
    &:hover {
        transition: .5s;
        background-color: ${cores.TASKS_HOVER}
    }
`;

export const ContentMiddle = styled.div`
    grid-area: DL;
    background-color: ${cores.TASKS_MANAGER};
    height: 100vh;
`;

export const Menu = styled.div`
    background-color: ${cores.AL};
    height: 50px;
    display: flex;
    vertical-align: middle;
    border-bottom: 2px solid ${cores.TASKS};

`;

export const Item = styled.div`
    margin: 5px;
    width: 150px;
    text-align: center;
/*     
    &:hover{
        transition: .2s;
        border-bottom: 3px solid ${cores.TASKS};
    } */

`;

export const Timer = styled.div`
    grid-area: AT;
    display: flex;
    line-height: 50px;
    justify-content: center;
    color: ${cores.CLOCK};
    text-align: center;
    font-size: 2vw;
    background-color: ${cores.AL};
    border-bottom: 2px solid ${cores.TASKS};
`;

export const Divisor = styled.div`
    width: 2px;
    margin: 5px;
    border-right: 2px solid ${cores.CLOCK};
`;

export const TaskManager = styled.div`

    background-color: ${cores.TASKS_MANAGER};
    height: 100%;
    margin: 10px;
`;

export const TaskItemManager = styled.div`
    display: flex;
    flex-direction: row;
    color: ${props => props.checked ? 'white' : 'black'};
    background-color: ${props => props.checked ? cores.TASKS_CHECKED : 'white'} ;
    border-radius: 15px;
    padding: 5px 10px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;
    font-size: 20px;
    word-wrap: break-word;
`;

export const TaskManagerContainerTitle = styled.div`
    width: 50%;
    word-wrap: break-word;
`;

export const ModalTaksContainer = styled.div`
    position: absolute;
    top: 0;
`;

export const Formulario = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;