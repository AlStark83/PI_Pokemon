import React from 'react';
import { Link } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../actions/index';
import { useEffect } from 'react'; 

export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetail(props.match.params.id));// eslint-disable-next-line
    },[])
    const myPokemon = useSelector((state) => state.detail)

    
    console.log(myPokemon);
    return(
        <div>
            {
                // <h1>Hello</h1>
                myPokemon.name ?
                <div>

                    <h1>Hola</h1>

                    <h1>{myPokemon.name}</h1>
                    <img src={myPokemon.img} alt={myPokemon.name}/>


                </div>
                 : <p>Loading...</p>
            }
            <Link to= '/home'>
                <button>Volver</button>
            </Link>
        </div>
    )
}  