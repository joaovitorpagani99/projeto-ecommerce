import { useForm } from 'react-hook-form';
import './Cadastro.css';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Cadastro() {

    const { register, formState: { errors } } = useForm();
    const navigate = useNavigate();

    return (
        <main className='container-principal'>
            <div className='container-secundario'>
                <Form className=" form">
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
                        <label htmlFor="endereco">Endereco:</label>
                        <input
                            type="text"
                            id="endereco"
                            className="form-control mt-3"
                            {...register("nome", { required: true, maxLength: 150 })}
                        />
                        {errors.nome && <small className="invalid">O nome é inválido!</small>}
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mt-3"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <small className="invalid">O email é inválido!</small>
                        )}
                    </div>
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            className="form-control mt-3"
                            {...register("senha", { required: true, minLength: 6 })}
                        />
                        {errors.senha && (
                            <small className="invalid">A senha é inválida!</small>
                        )}
                    </div>
                    <Button variant="secondary" className="mt-3 w-25 " type="submit">
                        Cadastrar
                    </Button>
                    <Button
                        variant="danger"
                        className="mt-3 w-25 button"
                        type="button"
                    >
                        Entrar com o Google
                    </Button>
                </Form>

            </div>
        </main>
    )
}

export default Cadastro;