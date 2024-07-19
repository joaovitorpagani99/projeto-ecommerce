import { Button, Card, Container } from "react-bootstrap"
import "../components/Cards.css"

const cards = [
    {
        cod: 1,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/9/19358-1_1_jpg.webp",
        texto: "EFlydigi Apex 4 | Wireless | Switch, PC, Android e TV | Cinza",
        preco: "R$748,80" ,
       
    },
    {
        cod: 2,
        imagem: "https://br.octoshop.com/media/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/m/e/meta-quest-3-capa.webp",
        texto: "Meta Quest 3 | Realidade Virtual 4K+ e Som 3D",
        preco: "R$4.135,71",
        
    },
    {
        cod: 3,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/4/14228-1_1_jpg.webp",
        texto: "Flydigi B6 Lite | Compatível com a maioria dos iPhone e Android | 74g",
        preco: "R$251,87",
        
    },
    {
        cod: 4,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/6/16173-1_1_1_jpg.webp",
        texto: "ROG Ally | 512GB | Windows com Ryzen Z1",
        preco: "R$3.945,15" ,
        
    },
    {
        cod: 5,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/9/191-1_1_jpg.webp",
        texto: "Philips SHP9500 - Fone de Ouvido de Altissima Qualidade",
        preco: "R$583,57" ,
        
    },
    {
        cod: 6,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/8/18768-1_1_png.webp",
        texto: "Flydigi Phone Holder| Compatível com Séries Vader e Apex",
        preco: "R$122,53" ,
        
    },
    {
        cod: 7,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/r/a/rack_-_2023-10-26t141039.993_jpg.webp",
        texto: "Flydigi Apex 3 Elite | Wireless | Switch, PC, Android e TV | Preto",
        preco: "R$707,95" ,
        
    },
    {
        cod: 8,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/c/a/canon_powershot_g7_x_mark_ii__jpg.webp",
        texto: "EFlydigi Apex 4 | Wireless | Switch, PC, Android e TV | Cinza",
        preco: "R$748,80" ,
        
    },
    {
        cod: 9,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/2/5/25744-1_1_jpg.webp",
        texto: "Loona Cão de Estimação | Robô Inteligente com Chat GPT Habilitado ",
        preco: "R$4.950,43" ,
        
    },
    {
        cod: 10,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/1/9/19192-2_1_jpg.webp",
        texto: "Mobilador Flydigi Q1 | Adaptador Teclado e Mouse para Smartphone",
        preco: "R$238,23" ,
        
    },
    {
        cod: 11,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/3/1/31491-1_1_png.webp",
        texto: "ASUS ROG Ally X | 24GB + 1TB SSD | Console Portátil | AMD Ryzen Z1 Extreme | Envio Após 26 de Julho",
        preco: "R$8251,20",
        
    },
    {
        cod: 12,
        imagem: "https://br.octoshop.com/media/amasty/webp/catalog/product/cache/9b65684147d6c4cb86032021df1ef00e/a/p/apple_ipad_pro_1__1_jpg.webp",
        texto: "iPad Pro Apple | Chip M4 | 2024",
        preco: "R$7796,00",
        
    }
]
    
    







function Cards() {
    const produtos = cards.map((prod) => {
        return (
            <div className="">
            <Container fluid className="cardserv">
            <Card className="alinhar"style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {prod.imagem}  />
            <Card.Body>
              <Card.Text>{prod.texto}</Card.Text>
              <Card.Title>{prod.preco}</Card.Title>
              <Button variant="primary">Acessar Catalogo</Button>
            </Card.Body>
          </Card>
          </Container>
          </div>
           
        );
    });

    return (
        <div className="card-container">
            {produtos}
        </div>
    );
}

export default Cards
       

   
 
    