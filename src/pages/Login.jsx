import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { useForm } from 'react-hook-form';

function Login() {
    const { register, formState: { errors } } = useForm();
    return (
        <main className='container-principal'>
            <div className='container-secundario'>
                <Form className="mt-5 form">
                    <h1 className='titulo'>Login</h1>
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
                    <Button
                        variant="dark"
                        className=" button mt-3 mb-5 w-25"
                        type="submit">
                        Entrar
                    </Button>
                    <Button
                        variant="danger"
                        className="mt-3 mb-5 w-25 button"
                        type="button"
                    >
                        Entrar com o Google
                    </Button>
                    <p>Não tem cadastro ? <a href='/cadastro'>Cadastre-se</a> </p>
                </Form>
            </div>
        </main>
    )
}


export default Login;