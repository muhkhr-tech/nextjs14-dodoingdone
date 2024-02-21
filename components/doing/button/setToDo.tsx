'use client'

import SetToDo from "@/app/projects/action/setToDo"
import { useState } from "react"
import GetTodosProject from "@/app/projects/action/getTodosProject"

export default function SetToDoButton({ todoId, status, projectId, onStateChange }: any) {
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await SetToDo(todoId, projectId)
      const updatedTodos = await GetTodosProject(projectId)
      onStateChange(updatedTodos)
    } catch (err) { console.log(err) }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        disabled={isLoading || status==="do"}
        className={`btn btn-xs disabled:bg-purple-700 disabled:text-white`}>
        {isLoading ? <span className="loading loading-xs"></span> : 'Do'}
      </button>
    </>
  )
}