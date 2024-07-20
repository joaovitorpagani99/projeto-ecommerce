import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

const images = [
    {
        cod: 1,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/9/19358-1_1_jpg.webp",
        texto: "EFlydigi Apex 4 | Wireless | Switch, PC, Android e TV | Cinza",
    },
    {
        cod: 2,
        imagem: "https://br.octoshop.com/media/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/m/e/meta-quest-3-capa.webp",
        texto: "Meta Quest 3 | Realidade Virtual 4K+ e Som 3D",
    },
    {
        cod: 3,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/4/14228-1_1_jpg.webp",
        texto: "Flydigi B6 Lite | Compatível com a maioria dos iPhone e Android | 74g",
    }
];



function Home() {
    return (
        <Carousel variant='dark'>
            {images.map((image) => (
                <Carousel.Item key={image.cod} interval={1200}>
                    <img
                        className="d-block mx-auto"
                        src={image.imagem}
                    />
                    <Carousel.Caption>
                        <p className='text-secondary'>{image.texto}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}


export default Home;