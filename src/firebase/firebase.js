// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, query, getDoc, getDocs, getFirestore, addDoc, setDoc, writeBatch, deleteDoc, onSnapshot } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBV7smNYlC6CNqcm7q5xByzBXrcCdmFpKQ",
    authDomain: "chanchitofeliz-a8a25.firebaseapp.com",
    projectId: "chanchitofeliz-a8a25",
    storageBucket: "chanchitofeliz-a8a25.appspot.com",
    messagingSenderId: "710624754056",
    appId: "1:710624754056:web:f8eb53fb5e55c76604223d",
    measurementId: "G-P26WQT147E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

/*trae los productos */
export const getProducts = () =>{
    const colRef = collection(db, 'productos')
    const q = query(colRef)
    return getDocs(q)
}

/* trae el producto */
export  const getProduct = async (id) =>{
    const docRef = doc(db, 'productos', id)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()
      } else {
        // doc.data() will be undefined in this case
        return {}
      }
}

/*trae el carrito */
export const getCart = () =>{
    const colRef = collection(db, 'carrito')
    const q = query(colRef)
    return getDocs(q)
}

/*inserta un producto al carrito */
export const insertProduct = async (product) => {
    const colRef = collection(db, 'carrito')
    const docRef = await addDoc(colRef, product)
    return docRef.id;
}
/*actualiza el carrito */
export const updateProduct = async (id, product) => {
    const docRef = doc(db, 'carrito', id)
    await setDoc(docRef, product, {merge: true})
}
/*remueve un producto del carrito */
export const removeProduct = async (id) => {
    const docRef = doc(db, 'carrito',id)
    await deleteDoc(docRef)
}
/*actualiza el carrito de manera multiple */
export const updateMultipleProduct = (products) =>{
    const batch = writeBatch(db) 
    try {
        products.forEach((product) => {
            let docRef = doc(db, 'carrito', product.id)
            batch.update(docRef, product)
        })
        batch.commit()
    }catch (e){
        console.log(e)
    }
}

export const insertPurchase = async (carrito) => {
    const colRef = collection(db, 'compras')
    const docRef = await addDoc(colRef, carrito)
    return docRef.id;
}

export const onChangesProduct = (id, cb) => {
    onSnapshot(doc(db, 'carrito', id), (snp) => {
      cb({ id: snp.id, ...snp.data() });
    });
  };

  export const removeAllProducts = (products) => {
    const batch = writeBatch(db)
    try{
        products.forEach((product) =>{
            let docRef = (db, 'carrito', products.id )
            batch.delete(docRef, product)
        })
        batch.commit()
    }catch (e){
        console.log(e)
    }
  }