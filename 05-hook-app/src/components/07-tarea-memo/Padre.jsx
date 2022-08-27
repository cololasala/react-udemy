import React from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = ( num ) => {
        setValor( valor + num )
    }

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n } /* este seria como un Input donde paso del padre al hijo el "n" */
                        incrementar={ incrementar } /* este seria como un Output donde del hijo al padre llamo al incrementar y paso un "num"*/
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
