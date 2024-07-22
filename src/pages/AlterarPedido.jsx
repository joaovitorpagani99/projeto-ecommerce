import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProduto, updateProduto } from "../firebase/produtos";
import { useEffect } from "react";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";
import { getProdutosCarrinho, updateCarrinho } from '../firebase/carrinho'
function AlterarPedido() {
    const { id } = useParams();
    const usuario = useContext(UsuarioContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const navigate = useNavigate();

    // function carregarDados() {
    //     getProduto(id).then((produto) => {
    //         if (produto) {
    //             reset(produto)
    //         } else {
    //             navigate("/meus-pedidos")
    //         }
    //     })
    // }

    function carregarDados() {
        getProdutosCarrinho(id).then((carrinho) => {
            if (carrinho) {
                reset(carrinho)
            } else {
                navigate("/meus-pedidos")
            }
        })
    }

    function atualizarProduto(data) {
        updateCarrinho(id, data[0]).then(() => {
            toast.success("Compra alterada com sucesso")
            navigate("/meus-pedidos")
        }).catch((error) => {
            console.log(error)
            toast.error("Erro ao alterar a compra")
        })
    }

    useEffect(() => {
        carregarDados()
    }, [])

    if (usuario === null) {
        return <Navigate to="/login" />
    }


    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(atualizarProduto)}>
                <h1>Alterar Compra</h1>
                <hr></hr>
                <div>
                    <label htmlFor="eletronicos">Selecione o produto desejado:</label>
                    <select id="eletronicos"
                        className="form-select"
                        {...register("eletronicos")}
                    >
                        <option value="" ></option>
                        <option value="EFlydigi-Apex-4" >EFlydigi Apex 4</option>
                        <option value="Meta-Quest-3" >Meta Quest 3</option>
                        <option value="Flydigi-B6-Lite" >Flydigi B6 Lite</option>
                        <option value="ROG-Ally" >ROG Ally</option>
                        <option value="Philips-SHP9500" >Philips SHP9500</option>
                        <option value="Flydigi-Phone-Holder" >Flydigi Phone Holder</option>
                        <option value="Flydigi-Apex-3-Elite" >Flydigi Apex 3 Elite</option>
                        <option value="EFlydigi-Apex-4" >EFlydigi Apex 4</option>
                        <option value="Loona-Cão-de-Estimação" >Loona Cão de Estimação</option>
                        <option value="Mobilador-Flydigi-Q1" >Mobilador Flydigi Q1</option>
                        <option value="ASUS-ROG-Ally-X" >ASUS ROG Ally X</option>
                        <option value="iPad-Pro-Apple" >iPad Pro Apple</option>
                    </select>
                    <div>
                        <label htmlFor="estado">Selecione seu estado:</label>
                        <select
                            id="estado"
                            className="form-select"
                            {...register("estado")}
                        >
                            <option value=""></option>
                            <option value="acre">Acre</option>
                            <option value="alagoas">Alagoas</option>
                            <option value="amapa">Amapa</option>
                            <option value="amazonas">Amazonas</option>
                            <option value="ceara">Ceara</option>
                            <option value="espirito-santo">Espirito Santo</option>
                            <option value="goias">Goias</option>
                            <option value="maranhão">Maranhão</option>
                            <option value="mato-grosso">Mato Grosso</option>
                            <option value="mato-grosso-do-sul">Mato Grosso do Sul</option>
                            <option value="minas-gerais">Minas Gerais</option>
                            <option value="para">Pará</option>
                            <option value="paraiba">Paraiba</option>
                            <option value="pernambuco">Pernambuco</option>
                            <option value="piaui">Piauí</option>
                            <option value="rio-de-janeiro">Rio de Janeiro</option>
                            <option value="rio-grande-do-norte">Rio Grande do Norte</option>
                            <option value="rio-grande-do-sul">Rio Grande do Sul</option>
                            <option value="rondonia">Rondonia</option>
                            <option value="roraima">Roraima</option>
                            <option value="santa-catarina">Santa Catarina</option>
                            <option value="sao-paulo">São Paulo</option>
                            <option value="sergipe">Sergipe</option>
                            <option value="tocantins">Tocantins</option>
                            <option value="df">Distrito Federal</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cidade">Cidade:</label>
                        <input
                            type="text"
                            id="cidade"
                            className="form-control"
                            {...register("cidade", { maxLength: 200 })}
                        />
                        {errors.titulo && <small className="invalid">A cidade é invalido</small>}
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro:</label>
                        <input
                            type="text"
                            id="bairro"
                            className="form-control"
                            {...register("bairro", { maxLength: 200 })}
                        />
                        {errors.titulo && <small className="invalid">O Bairro é invalido</small>}
                    </div>
                    <div>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            type="text"
                            id="endereco"
                            className="form-control"
                            {...register("endereco", { maxLength: 200 })}
                        />
                        {errors.titulo && <small className="invalid">O endereço é invalido</small>}
                    </div>
                    <div>
                        <label htmlFor="dataCompra">Data da compra:</label>
                        <input
                            type="date"
                            id="dataCompra"
                            className="form-control"
                            {...register("dataCompra")}
                        />
                    </div>
                    <div>
                        <label htmlFor="observacoes">Observaçoes</label>
                        <textarea
                            id="observacoes"
                            className="form-control"
                            {...register("observacoes")}
                        ></textarea>

                    </div>

                </div>


                <Button variant="dark" className="w-100 mt-1" type="submit">Alterar Compra</Button>
            </form>
        </main>
    )
}

export default AlterarPedido;


