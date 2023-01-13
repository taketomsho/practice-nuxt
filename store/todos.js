import { firestoreAction } from 'vuexfire'
import app from '~/plugins/firebase'
import { getFirestore,collection, doc,setDoc,addDoc,deleteDoc } from "firebase/firestore";

const db = getFirestore(app);
const todosRef = collection(db,"todos");

export const state = () => ({
  todos: []
})

export const actions = {
//   init: firestoreAction(({ bindFirestoreRef }) => {
//     bindFirestoreRef('todos', todosRef)
//     .catch((e =>{
//         console.log(e.message)
//     })

//     )
//   }),
  add: firestoreAction((context, name) => {
    if(name.trim()) {
        addDoc(todosRef,{
        name: name,
        done: false,
        // created: FieldValue.serverTimestamp()
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    deleteDoc(todosRef,doc(id))
  }),
  toggle: firestoreAction((context, todo) => {
    setDoc(todosRef,doc(todo.id),{
      done: !todo.done
    })
  })
}