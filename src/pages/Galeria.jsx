import { useContext } from 'react';
import Cards from '../components/Cards';
import './Galeria.css'

function Galeria() {


    return (
        <div className='galeria'>
            <h1 className='g1'>Conheça alguns de nossos produtos</h1>
            <Cards></Cards>
        </div >
    )
}

export default Galeria;