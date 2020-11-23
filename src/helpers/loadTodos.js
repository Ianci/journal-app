import { db } from '../firebase/config'
export const loadTodos = async (uid)=> {

    const snapshotTodos = await db.collection(`${uid}/todos/usertodos`).get()
    const todos = []

    snapshotTodos.forEach(snap => {
        todos.push({
            id: snap.id,
            ...snap.data()
        })
    })
    console.log(todos)
    return todos
}