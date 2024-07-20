import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./config";
import { storage } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const colecaoProdutos = collection(db, "produtos");

export async function addProdutos(data, imagemUrl) {
    data.imageUrl = imagemUrl;
    return await addDoc(colecaoProdutos, data);
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
        produtos.push({ ...doc.data() });
    });
    return produtos;
}

export async function getProduto(id) {
    const docRef = doc(colecaoProdutos, id);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
}

export async function deletarProduto(id) {
    await deleteDoc(doc(colecaoProdutos, id));
}

export async function editarProduto(id, data, file) {
    const docRef = doc(colecaoProdutos, id);
    await updateDoc(docRef, data);
}