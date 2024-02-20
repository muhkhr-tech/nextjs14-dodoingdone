'use client'

import GetTodos from "@/app/projects/action/getTodos"
import { useState } from "react"
import { HiOutlineX } from "react-icons/hi"
import SetToDoButton from "@/components/doing/button/setToDo"
import SetToDoneButton from "@/components/doing/button/setToDone"
import SetToDoingButton from "./setToDoing"

export default function ProjectDetailButton({ projectId }: any) {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])

  const handleChange = async (e: any) => {
    setModal(!modal)

    if (modal) {
      setTodos([])
    } else {
      setLoading(true)
      try {
        const data: any = await GetTodos(projectId)
        setTodos(data)
        setLoading(false)
      } catch (err) { console.log(err) }
    }
  }

  const handleChildStateChange = (todos: any) => {
    setTodos(todos)
  }

  return (
    <div>

      <button className="btn btn-xs font-thin sm:btn-sm text-white btn-info" onClick={handleChange}>
        Detail
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box sm:w-1/2 max-w-full">
          <div className="flex justify-between items-center w-full mb-3">
            <h3 className="font-bold text-lg">Todo List</h3>
            <button onClick={handleChange}><HiOutlineX size={25} /></button>
          </div>
          {isLoading ? <span className="loading"></span>
            : <div>
              {todos.length > 0 ? <div>{todos.map((todo: any, index) => (
                <div key={index} className="flex justify-between space-y-1">
                  <p>{todo.title}</p>
                  <div className="flex space-x-1">
                    <SetToDoButton todoId={todo.id} status={todo.status} projectId={projectId} onStateChange={handleChildStateChange} />
                    <SetToDoingButton todoId={todo.id} status={todo.status} projectId={projectId} onStateChange={handleChildStateChange} />
                    <SetToDoneButton todoId={todo.id} status={todo.status} projectId={projectId} onStateChange={handleChildStateChange} />
                  </div>
                </div>
              ))}</div>
                : <div>No todos found</div>}
            </div>}
        </div>
      </div>
    </div>
  )
}