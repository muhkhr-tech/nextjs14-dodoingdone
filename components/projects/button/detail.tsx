'use client'

import GetTodos from "@/app/projects/action/getTodos"
import { useState } from "react"
import { HiOutlineX } from "react-icons/hi"
import SetToDoButton from "@/components/doing/button/setToDo"
import SetToDoneButton from "@/components/doing/button/setToDone"
import SetToDoingButton from "./setToDoing"

export default function ProjectDetailButton({ project }: any) {
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
        const data: any = await GetTodos(project.id)
        setTodos(data)
        setLoading(false)
      } catch (err) { console.log(err) }
    }
  }

  const handleChildStateChange = (todos: any) => {
    setTodos(todos)
  }

  const getTotal = (todo: number, doing: number, done: number) => {
    return todo + doing + done
  }

  const getCompletion = (todo: number, doing: number, done: number) => {
    const total = todo + doing + done
    const percentage: any = (done / total) * 100
    return parseInt(percentage)
  }

  const getDaysLeft = (createdAt: any, dueDate: any) => {
    var days = Math.floor((dueDate - createdAt) / (1000 * 60 * 60 * 24));
    return days
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
            <h3 className="font-bold text-sm sm:text-lg">{project.title}</h3>
            <button onClick={handleChange}><HiOutlineX size={25} /></button>
          </div>
          <div className="mb-3 text-slate-600">
            {project.description}
          </div>
          <div className="mb-3 text-xs">
            <p>Due date : {new Intl.DateTimeFormat('id', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format(project.dueDate)} (<span className="font-semibold">{getDaysLeft(project.createdAt, project.dueDate)} days left</span>)</p>
          </div>
          <div className="mb-2 flex gap-1 text-xs">
            <p>Total ({getTotal(parseInt(project.totalTodos), parseInt(project.totalTodosInprogress), parseInt(project.totalTodosCompleted))}) |</p>
            <p className="text-purple-700">Do ({project.totalTodos}) |</p>
            <p className="text-warning">Doing ({project.totalTodosInprogress}) |</p>
            <p className="text-success">Done ({project.totalTodosCompleted})</p>
          </div>
          <div className="mb-2 flex gap-1 text-xs">
            <p>Completion {getCompletion(parseInt(project.totalTodos), parseInt(project.totalTodosInprogress), parseInt(project.totalTodosCompleted))}%</p>
          </div>
          <h2 className="text-md mb-3 font-semibold">Todo List :</h2>
          {isLoading ? <span className="loading"></span>
            : <div>
              {todos.length > 0 ? <div>{todos.map((todo: any, index) => (
                <div key={index} className="flex justify-between space-y-1">
                  <p>{index + 1}. {todo.title}</p>
                  <div className="flex space-x-1">
                    <SetToDoButton todoId={todo.id} status={todo.status} projectId={project.id} onStateChange={handleChildStateChange} />
                    <SetToDoingButton todoId={todo.id} status={todo.status} projectId={project.id} onStateChange={handleChildStateChange} />
                    <SetToDoneButton todoId={todo.id} status={todo.status} projectId={project.id} onStateChange={handleChildStateChange} />
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