import { addDoc, collection, doc, getDoc, getDocs, updateDoc, query, where, deleteDoc } from "firebase/firestore";
import { db } from "./config";
//import { storage } from "./config";
//import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const colecaoProdutos = collection(db, "produtos");

/*export async function addProdutos(data, imagemUrl) {
    data.imageUrl = imagemUrl;
    return await addDoc(colecaoProdutos, data);
}*/

export async function addProdutos(data) {
    await addDoc(colecaoProdutos, data)
}

export async function uploadImagem(file) {
    const storageRef = ref(storage, `imagens/${file.name}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
}


export async function getProdutos() {
    const snapshot = await getDocs(colecaoProdutos);
    const produtos = [];
    snapshot.forEach((doc) => {
        produtos.push({ ...doc.data(), id:doc.id });
    });
    return produtos;
}

export async function getProdutosUsuario(idUsuario) {
    const filtro = query(colecaoProdutos, where("idUsuario", "==", idUsuario));
    const snapshot = await getDocs(filtro);
    const produtos = []

    snapshot.forEach((doc) => {
        produtos.push({...doc.data(), id: doc.id})
    })

    return produtos
    
}

export async function deletarProduto(id) {
    const produtoDoc = doc(colecaoProdutos, id)
    await deleteDoc(produtoDoc);
}

export async function getProduto(id) {
    const produtoDoc = doc(colecaoProdutos, id)
    const snapshot = await getDoc(produtoDoc)

    return snapshot.data()
}

export async function updateProduto(id, data) {
    const produtoDoc = doc(colecaoProdutos, id);
    await updateDoc(produtoDoc, data);
}