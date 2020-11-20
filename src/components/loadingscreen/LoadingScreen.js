import React from 'react'
import { Spinner } from './Spinner'

export const LoadingScreen = () => {
    return (
        <>
        <div className="spinner__background">
        <h1 className="spinner__text">Por favor espere...</h1>
        <div className="spinner__container">
           
            <Spinner />
        </div>
        </div>
       </>
    )
}
