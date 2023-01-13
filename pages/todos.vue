<template>
    <div>
        <!-- <li v-for="todo in todos" :key="todo.id">
            {{ todo.id  }}, {{ todo.company.name }}
        </li> -->
        {{ todos }}

    <div class="form">
        <form v-on:submit.prevent="add">
        <input v-model="name">
        <button>add</button>
        </form>

    </div>

    </div>
</template>

<script>
import app from '~/plugins/firebase'
import { getFirestore,collection, doc,setDoc,addDoc,deleteDoc,getDocs } from "firebase/firestore";

    export default {
        // asyncData({params, error}){
        //     const db = getFirestore(app);
        //     const todosRef = collection(db,"todos");
        //     // return this.$store.state.todos
        //     const querySnapshot = getDocs(todosRef);
        //     return querySnapshot
        //       .then((data) =>{
        //         return {todos:data}
        //       })
            // const todo = querySnapshot
            // querySnapshot.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            //     });
            // return {todos:todo}
        // },
        data: function(){
            return {
                name: '',
                done: false
            }
        },
        // created: function() {
        //     this.$store.dispatch('todos/init')
        // },
        methods: {
            add() {
                this.$store.dispatch('todos/add', this.name)
                this.name = ''
            }
        },
        // computed:{
        //     async todos(){
        //         const db = getFirestore(app);
        //         const todosRef = collection(db,"todos");
        //         // return this.$store.state.todos
        //         const querySnapshot = await getDocs(todosRef);
        //         // return {todos:querySnapshot}
        //         const todos = []
        //         querySnapshot.forEach((doc) => {
        //             // doc.data() is never undefined for query doc snapshots
        //             todos.push({id:doc.id,data:doc.data()})
        //         });
        //         return todos
        //     }
        // }
    }
</script>