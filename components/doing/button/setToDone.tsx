'use client'

import SetToDone from "@/app/projects/action/setToDone"
import { useState } from "react"
import GetTodosProject from "@/app/projects/action/getTodosProject"

export default function SetToDoneButton({ todoId, status, projectId, onStateChange}: any) {
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await SetToDone(todoId, projectId)
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
        disabled={isLoading || status==='done'}
        className="btn btn-xs disabled:bg-green-700 disabled:text-white">
        {isLoading ? <span className="loading loading-xs"></span> : 'Done'}
      </button>
    </>
  )
}