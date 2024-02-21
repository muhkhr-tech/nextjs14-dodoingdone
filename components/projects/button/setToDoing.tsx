'use client'

import GetTodosProject from "@/app/projects/action/getTodosProject"
import SetToDoing from "@/app/projects/action/setToDoing"
import { useState } from "react"

export default function SetToDoingButton({ todoId, status, projectId, onStateChange}: any) {
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await SetToDoing(todoId, projectId)
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
        disabled={isLoading || status==='doing'}
        className="btn btn-xs disabled:bg-warning disabled:text-white">
        {isLoading ? <span className="loading loading-xs"></span> : 'Doing'}
      </button>
    </>
  )
}