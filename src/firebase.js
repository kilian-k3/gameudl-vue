
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCDnybU8leXMlgoJVNtE1eT--Iv0HhfAUg',
  authDomain: 'gameudl-catalogo.firebaseapp.com',
  projectId: 'gameudl-catalogo',
  storageBucket: 'gameudl-catalogo.firebasestorage.app',
  messagingSenderId: '604625119307',
  appId: '1:604625119307:web:e91ea3833cf86a7d7185ce',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
