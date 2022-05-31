import React from 'react'
import '../styles/DogCard.css'
import { DogDescrip } from './DogDescrip'
function DogCard(props) {
    const list = props.list
  return (
    <div className='card-container'>
        {list.map((dog)=>
        <DogDescrip
        name={dog.nombre}
        race={dog.raza}
        sex={dog.sexo}
        imgDog={dog.foto}
        size={dog.tamagno}
        obser={dog.observaciones}
        color={dog.color}
        esteri={dog.esterilizado}
        dateIngr={dog.fechaIngreso}>
        

        </DogDescrip>
        )}

    </div>
  )
}

export {DogCard}