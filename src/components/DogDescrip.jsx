import React from 'react'
import '../styles/DogDescrip.css'
function DogDescrip(props) {
    const name=props.name
    const race=props.race
    const sex=props.sex
    const imgDog = props.imgDog
    const size=props.size
    const obser=props.obser
    const color=props.color
    const esteri=props.esteri
    const dateIngr=props.dateIngr

  return (
    <div className='card-body'>
           
           <img src={imgDog} alt="aqui hay una foto" />
            <div className='description'>
            <div>{name}</div>
            
            <div>{`Raza: ${race}`}</div>
            <div>{`Genero: ${sex}`}</div> 
            <div>{`Tamaño: ${size}`}</div>
            <div>{`Color: ${color}`}</div>
            <div>{`Esterilizado ${esteri ? `SI`:`NO`}`}</div>
            <div>{`Fecha de Ingreso ${dateIngr}`}</div>
            </div>
            
        </div>



  )
}

export {DogDescrip}