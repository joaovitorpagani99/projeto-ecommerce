import { Badge, Button, Card, Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { deletarProduto, getProdutos, getProdutosUsuario } from "../firebase/produtos";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext";

function Produtos() {
    const [produtos, setProdutos] = useState(null)

    const usuario = useContext(UsuarioContext)

    const navigate = useNavigate()

    function carregarProdutos() {
        if(usuario) {
            getProdutosUsuario(usuario.uid).then((resultados) => {
                setProdutos(resultados)
            })
        }
    }

    function deletaProduto(id) {
        const deletar = confirm("tem certeza ?")
        if(deletar) {
            deletarProduto(id).then(() => {
                toast.success("Compra cancelada com sucesso!")

                carregarProdutos()
            })


        }
    }

    useEffect(() => {
        carregarProdutos()
    }, [])

    if(usuario === null) {
        return <Navigate to="/login"/>
    }

    return (
        <main>
            <Container>
                <h1>Meus Pedidos</h1>
                <hr />
                <Link className="btn btn-dark" to="/catalogo">Acessar Catalogo</Link>
                {
                    produtos ? <section className="mt-2">
                        {produtos.map((produto) => {
                            return <Card key={produto.id}>
                                <Card.Body>
                                    <Badge>{produto.eletronicos}</Badge>
                                    <Badge>{produto.estado}</Badge>
                                    <Card.Text>{produto.cidade}</Card.Text>
                                    <Card.Text>{produto.bairro}</Card.Text>
                                    <Card.Text>{produto.endereco}</Card.Text>
                                    <Card.Text>{produto.observacoes}</Card.Text>
                                    <Button variant="dark" onClick={() => {
                                        navigate(`/alterar-pedido/${produto.id}` )
                                    }}>Alterar Pedido</Button>
                                    <Button variant="danger" onClick={() => {
                                        deletaProduto(produto.id)
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

export default Produtos
