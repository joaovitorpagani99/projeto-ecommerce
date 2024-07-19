import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./config";
import { storage } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
s
export const colecaoProdutos = collection(db, "produtos");

export async function addProdutos(data, file) {
    const imageUrl = await uploadImagem(file);
    const produtoData = { ...data, imageUrl };
    await addDoc(colecaoProdutos, produtoData);
}


export async function getProdutos() {
    const snapshot = await getDocs(colecaoProdutos);
    const produtos = [];
    snapshot.forEach((doc) => {
        produtos.push({ ...doc.data() });
    });
    return produtos;
}

export async function getProdutos(id) {
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



async function uploadImagem(file) {
    const storageRef = ref(storage, `imagens/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}

