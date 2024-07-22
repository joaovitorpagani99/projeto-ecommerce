import './Catalogo.css'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';
import { addProdutoCarrinho } from '../firebase/carrinho';
import { getProdutos } from '../firebase/produtos';

function Catalogo() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const usuario = useContext(UsuarioContext)
    const navigate = useNavigate()
    const [produtos, setProdutos] = useState([]);

    function salvarProduto(data) {
        console.log(data);
        data.idUsuario = usuario.uid
        addProdutoCarrinho(data)
            .then(() => {
                toast.success("Compra realizada com sucesso!")
                navigate("/meus-pedidos")
            }).catch(() => {
                toast.error("Um erro aconteceu ao comprar o produto")
            })
    }

    if (usuario === null) {
        return <Navigate to="/login" />
    }
    function carregarDados() {
        getProdutos().then((produtos) => {
            setProdutos(produtos);
        }).catch((error) => {
            console.error("Erro ao carregar produtos:", error);
        });
    }

    useEffect(() => {
        carregarDados();
    }, []);



    return (
        <main>
            <form className="form-section" onSubmit={handleSubmit(salvarProduto)}>
                <h1>Catalógo de produtos</h1>
                <hr></hr>
                <div>
                    <label htmlFor="eletronicos">Selecione o produto desejado:</label>
                    <select id="eletronicos"
                        className="form-select"
                        {...register("eletronicos")}
                    >
                        <option value="" ></option>
                        {produtos.map((produto) => (
                            <option key={produto.id} value={produto.nomeProduto}>
                                {produto.nomeProduto}
                            </option>
                        ))}
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
                            {...register("cidade", { required: true, maxLength: 200 })}
                        />
                        {errors.titulo && <small className="invalid">A cidade é invalido</small>}
                    </div>
                    <div>
                        <label htmlFor="bairro">Bairro:</label>
                        <input
                            type="text"
                            id="bairro"
                            className="form-control"
                            {...register("bairro", { required: true, maxLength: 200 })}
                        />
                        {errors.titulo && <small className="invalid">O Bairro é invalido</small>}
                    </div>
                    <div>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            type="text"
                            id="endereco"
                            className="form-control"
                            {...register("endereco", { required: true, maxLength: 200 })}
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


                <Button variant="dark" className="w-100 mt-1" type="submit">Finalizar Compra</Button>
            </form>
        </main>
    )

}



export default Catalogo;