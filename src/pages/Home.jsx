import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { getProdutos } from '../firebase/produtos'
import { useEffect, useState } from 'react';
import Galeria from './Galeria';

function Home() {
    const [produtos, setProdutos] = useState([]);

    function carregarDados() {
        getProdutos().then((produtos) => {
            setProdutos(produtos);
        });
    }

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <main>
            <Carousel variant='dark'>
                {produtos.map((produtos) => (
                    <Carousel.Item key={produtos.id} interval={1200}>
                        <img
                            className="d-block mx-auto"
                            src={produtos.imageUrl}
                        />
                        <Carousel.Caption>
                            <p className='text-secondary'>{produtos.descricaoProduto}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div>
                <Galeria></Galeria>
            </div>
        </main>
    );


}


export default Home;