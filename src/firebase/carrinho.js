import { db } from "./config";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore"; // Adicione esta linha

export const colecaoCarrinho = collection(db, "carrinho");

export async function addProdutoCarrinho(data) {
    return await addDoc(colecaoCarrinho, data);
}

export async function getProdutosCarrinho() {
    const snapshot = await getDocs(colecaoCarrinho);
    const carrinho = [];
    snapshot.forEach((doc) => {
        carrinho.push({ ...doc.data(), id: doc.id });
    });
    return carrinho;
}

export async function getProdutosUsuario(idUsuario) {
    const filtro = query(colecaoCarrinho, where("idUsuario", "==", idUsuario));
    const snapshot = await getDocs(filtro);
    const carrinho = [];

    snapshot.forEach((doc) => {
        carrinho.push({ ...doc.data(), id: doc.id });
    });
    return carrinho;
}

export async function deleteProdutoCarrinho(id) {
    const carrinhoDoc = doc(colecaoCarrinho, id);
    console.log(carrinhoDoc);
    await deleteDoc(carrinhoDoc);
}

export async function updateCarrinho(id, data) {
    const carrinhoDoc = doc(colecaoCarrinho, id);
    await updateDoc(carrinhoDoc, data);
}