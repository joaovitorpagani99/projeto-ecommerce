import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loginGoogle, loginUsuario } from '../firebase/auth';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function entrar(data) {
        loginUsuario(data.email, data.senha).then(() => {
            toast.success('Usuário entrou com sucesso!');
            navigate('/');
        }).catch((error) => {
            console.log('Erro ao entrar: ', error);
            toast.error("Email e/ou senha incorreta!");
        });
    }

    function handleEntrarGoogle() {
        loginGoogle().then(() => {
            {
                toast.success('Usuário entrou com sucesso!');
                navigate('/');
            }
        }).catch((error) => {
            console.log('Erro ao entrar com Google: ', error);
            toast.error("Erro ao entrar com Google!");
        })
    }

    return (
        <main className='container-principal'>
            <div className='container-secundario'>
                <form className="form-section mt-5 form" onSubmit={handleSubmit(entrar)}>
                    <h1 className='titulo'>Login</h1>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control mt-3"
                            {...register("email", { required: true, maxLength: 150 })}
                        />
                        {errors.email && <small className="invalid">O endereço é inválido!</small>}

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
                        className="mt-3 mb-5  button"
                        type="button"
                        onClick={handleEntrarGoogle}
                    >
                        Entrar com o Google
                    </Button>
                    <p>Não tem cadastro ? <a href='/cadastro'>Cadastre-se</a> </p>
                </form>
            </div>
        </main>
    )
}


export default Login;