'use client'

import SetToDo from "@/app/projects/action/setToDo"
import GetTodos from "@/app/projects/action/getTodos"
import { useState } from "react"
import Image from "next/image"

export default function SetToDoButton({ todoId, status, projectId, onStateChange }: any) {
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      await SetToDo(todoId, projectId)
      const updatedTodos = await GetTodos(projectId)
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
        {isLoading ? <Image src={'/spinner.gif'} className="bg-none" width={25} height={25} alt="spinner"/> : 'Do'}
      </button>
    </>
  )
}