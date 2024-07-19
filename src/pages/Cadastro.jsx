import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { cadastrarUsuario, loginGoogle } from "../firebase/auth";
import './Cadastro.css';

function Cadastro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    function cadastrar(data) {
        cadastrarUsuario(data.nome, data.email, data.senha)
            .then(() => {
                toast.success(`Bem-vindo(a)! ${data.nome}`);
                navigate('/produtos');
            }).catch((error) => {
                toast.error('aconteceu um erro: ' + error.code);
            });
    }

    function handleEntrarGoogle() {
        loginGoogle().then(() => {
            toast.success('Usuário cadastrado com sucesso!');
            navigate('/produtos');
        }).catch((error) => {
            console.log('Erro ao cadastrar usuário: ', error.message);
            toast.error('aconteceu um erro: ' + error.message);
        });
    }

    return (
        <main className='container-principal'>
            <div className='container-secundario'>
                <form className="form-section mt-5 form" onSubmit={handleSubmit(cadastrar)}>
                    <h1 className='titulo'>Cadastre-se</h1>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            className="form-control mt-3"
                            {...register("nome", { required: true, maxLength: 150 })}
                        />
                        {errors.nome && <small className="invalid">O nome é inválido!</small>}
                    </div>
                    <div>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            type="text"
                            id="endereco"
                            className="form-control mt-3"
                            {...register("endereco", { required: true, maxLength: 150 })}
                        />
                        {errors.endereco && <small className="invalid">O endereço é inválido!</small>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mt-3"
                            {...register("email", { required: true, maxLength: 150 })}
                        />
                        {errors.email && <small className="invalid">O email é inválido!</small>}
                    </div>
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            className="form-control mt-3"
                            {...register("senha", { required: true, maxLength: 150 })}
                        />
                        {errors.senha && <small className="invalid">A senha é inválido!</small>}
                    </div>
                    <Button
                        type="submit"
                        className='mt-3'>Cadastrar</Button>
                    <Button
                        onClick={handleEntrarGoogle}
                        type="button"
                        className='mt-3 btn'
                        variant='danger'>Entrar com Goolgle</Button>
                </form>
            </div>
        </main>
    );
}

export default Cadastro;