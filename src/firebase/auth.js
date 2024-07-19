import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './config';

export async function logout() {
    await signOut(auth);
}

export async function loginGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
}

export async function loginUsuario(email, senha) {
    await signInWithEmailAndPassword(auth, email, senha);
}

export async function cadastrarUsuario(nome, email, senha) {
    const { user } = await createUserWithEmailAndPassword(auth, email, senha);
    console.log('user', user);
    const teste = await updateProfile(user, { displayName: nome });
    console.log('teste', teste);

}