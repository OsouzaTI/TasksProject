import React, { useState } from 'react'
import { Timer, Divisor } from './styles'

export default function Clock() {
    const [time, setTime] = useState('')
    const [mensagem, setMensagem] = useState('')

    const getTime = () => {

        const formateNumber = number => number < 10 ? `0${number}` : `${number}`;

        return new Promise(resolve => {
            const data = new Date();
            const hora = formateNumber(data.getHours());
            const minutos = formateNumber(data.getMinutes());
            const segundos = formateNumber(data.getSeconds());            
            const dataFormatada = `${hora}:${minutos}:${segundos}`
            
            if(hora >= 0 && hora < 12){
                setMensagem('Bom dia')
            }else if(hora >= 12 && hora < 18){
                setMensagem('Boa Tarde')
            }else if(hora >= 18){
                setMensagem('Boa noite')
            }  

            //console.log(dataFormatada)
            resolve(dataFormatada)
        })
        .then((time)=>setTime(time))
    }
    setInterval(getTime, 1000);  

    return (
        <Timer>
            {time ? time : 'loading...'}
            {time ? <Divisor /> :  ''}
            {mensagem}
        </Timer>
    )
}
