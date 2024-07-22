import { Navigate, useNavigate } from 'react-router-dom';
import './AdicionarProdutos.css';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { addProdutos, uploadImagem } from '../firebase/produtos';
import { useContext } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';

function AdicionarProduto() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const usuario = useContext(UsuarioContext);

    if (usuario === null) {
        return <Navigate to='/login' />
    }


    function adicionarProduto(data) {
        const file = data.imagemProduto[0];
        uploadImagem(file).then((imagemUrl) => {
            console.log(imagemUrl);
            delete data.imagemProduto; // Remover o campo imagemProduto
            addProdutos(data, imagemUrl).then(() => {
                toast.success('Produto adicionado com sucesso!');
                navigate('/');
            }).catch((error) => {
                toast.error('Erro ao adicionar produto!');
                console.log(error);
            });
        }).catch((error) => {
            toast.error('Erro ao fazer upload da imagem!');
            console.log(error);
        });
    }

    return (
        <main>
            <form className="form-section mt-5" onSubmit={handleSubmit(adicionarProduto)} >
                <h1>Adicionar Produtos</h1>
                <div>
                    <label htmlFor='nomeProduto'>Nome: </label>
                    <input
                        id="nomeProduto"
                        type="text"
                        placeholder="Nome do produto"
                        className="form-control mt-3"
                        {...register("nomeProduto", { required: true, maxLength: 150 })}
                    />
                    {errors.nomeProduto && <small className="invalid">O nome é inválido!</small>}
                </div>
                <div>
                    <label htmlFor='precoProduto'>Preço: </label>
                    <input
                        id="precoProduto"
                        type="number"
                        placeholder="Preço do produto"
                        className="form-control mt-3"
                        {...register("precoProduto", { required: true, maxLength: 150 })}
                    />
                    {errors.precoProduto && <small className="invalid">O preço é inválido!</small>}
                </div>
                <div>
                    <label htmlFor='descricaoProduto'>Descrição: </label>
                    <input
                        id="descricaoProduto"
                        type="text"
                        placeholder="Descrição do produto"
                        className="form-control mt-3"
                        {...register("descricaoProduto", { required: true, maxLength: 150 })}
                    />
                </div>

                <div>
                    <label htmlFor='imagemProduto'>Imagem: </label>
                    <input
                        id="imagemProduto"
                        type="file"
                        placeholder="Imagem do produto"
                        className="form-control mt-3"
                        {...register("imagemProduto", { required: true, maxLength: 150 })}
                    />
                    <Button type='submit' className='mt-3' >Upload</Button>
                </div>

            </form>
        </main>
    )
}

export default AdicionarProduto;