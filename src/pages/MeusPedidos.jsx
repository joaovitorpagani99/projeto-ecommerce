import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { deleteProdutoCarrinho, getProdutosCarrinho, getProdutosUsuario } from "../firebase/carrinho";
import "./MeusPedidos.css"

function MeusPedidos() {

    const [pedidos, setPedidos] = useState(null)
    const usuario = useContext(UsuarioContext)
    const navigate = useNavigate()

    async function carregarPedidos() {
        if (usuario) {
            if (usuario.email === 'admin@admin.com.br') {
                const resultados = await getProdutosCarrinho();
                setPedidos(resultados);
            } else {
                const resultados = await getProdutosUsuario(usuario.uid);
                setPedidos(resultados);
            }
        }
    }

    function deletarPedido(id) {
        const deletar = confirm("tem certeza ?");
        if (deletar) {
            deleteProdutoCarrinho(id).then(() => {
                toast.success("Compra cancelada com sucesso!");
                carregarPedidos();
            }).catch((error) => {
                console.log(error);
                toast.error("Um erro aconteceu ao cancelar a compra");
                carregarPedidos();
            });
        }
    }
    useEffect(() => {
        carregarPedidos()
    }, [])

    if (usuario === null) {
        return <Navigate to="/login" />
    }

    return (
        <main className="containerPrincipal">
            <Container>
                <h1>Meus Pedidos</h1>
                <hr />
                <Link className="btn btn-dark" to="/catalogo">Acessar Catalogo</Link>
                {
                    pedidos ? <section className="mt-2">
                        {pedidos.map((pedido) => {
                            return <Card key={pedido.id}>
                                <Card.Body className="pedido">
                                    <Badge className="eletro">{pedido.eletronicos}</Badge>
                                    <br />
                                    <Badge className="estado">{pedido.estado}</Badge>
                                    <Card.Text className="textos">{pedido.cidade}</Card.Text>
                                    <Card.Text className="textos">{pedido.bairro}</Card.Text>
                                    <Card.Text className="textos">{pedido.endereco}</Card.Text>
                                    <Card.Text className="textos">{pedido.observacoes}</Card.Text>
                                    <Button variant="dark" onClick={() => {
                                        navigate(`/alterar-pedido/${pedido.id}`)
                                        console.log(pedido.id)
                                    }}>Alterar Pedido</Button>
                                    <Button variant="danger" onClick={() => {
                                        deletarPedido(pedido.id)
                                    }}>Cancelar Compra</Button>
                                </Card.Body>
                            </Card>
                        })}
                    </section> : <Loader></Loader>
                }
            </Container>
        </main>
    )
}

export default MeusPedidos;
