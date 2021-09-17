import React from 'react'
import { useHistory } from 'react-router-dom';


export default function Home() {
    const history = useHistory();
    const routToPizza = () => {
        history.push('/pizza');
    }

    return (
        <div classname='home-wrapper'>
            <button
                onClick={routToPizza}
                className='shop-button'
            >
                Order Now!    
            </button>    
        </div>
    )
}