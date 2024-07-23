import { Button, Card, Container } from "react-bootstrap";
import "../components/Cards.css";
import { getProdutos } from '../firebase/produtos';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Cards() {

    const [produto, setProdutos] = useState([]);
    const navigate = useNavigate();

    function carregarDados() {
        getProdutos().then((produtos) => {
            setProdutos(produtos);
        });
    }
    useEffect(() => {
        carregarDados();
    }, []);


    const produtos = produto.map((prod) => {
        return (
            <div className="">
                <Container fluid className="cardserv">
                    <Card className="alinhar" style={{ width: '18rem' }} key={prod.id}>
                        <Card.Img variant="top" src={prod.imageUrl} />
                        <Card.Body>
                            <Card.Text>{prod.texto}</Card.Text>
                            <Card.Title>{prod.preco}</Card.Title>
                            <Button variant="primary" onClick={() => {
                                navigate(`/catalogo/${prod.id}`);
                            }}>Acessar Catalogo</Button>
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




