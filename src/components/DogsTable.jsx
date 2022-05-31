import React from 'react'
import dogList from '../APIDOGS'
import { DogCard } from './DogCard'
function DogsTable() {
  return (
    <div className='dog-table'>
        <div className='dog-table_header'>
            NUESTROS REFUGIADOS
        </div>   
        <div className='dog-table_body'>
            <DogCard list={dogList}></DogCard>            

        </div>

    </div>
  )
}

export  {DogsTable}