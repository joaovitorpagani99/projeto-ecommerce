import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { getProdutos } from '../firebase/produtos'
import { useEffect, useState } from 'react';

function Home() {
    const [produtos, setProdutos] = useState([]);

    function carregarDados() {
        getProdutos().then((produtos) => {
            setProdutos(produtos);
            console.log(produtos);
        });
    }

    useEffect(() => {
        carregarDados();
    }, []);

    return (
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
    );
}


export default Home;