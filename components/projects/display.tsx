'use client'

import GetProjects from "@/app/projects/action/getProjects"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import AddTodosProjectButton from "./button/addTodos"
import ProjectDetailButton from "./button/detail"
import LoadingSkeleton from "./loadingSkeleton"
import Card from "./card"

export default function DisplayProjects() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const respData: any = await GetProjects(status, 0)
        setData(respData)
      } catch (err) { console.log(err) }
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [status])

  return (
    <>
      {isLoading ? <LoadingSkeleton />
        : <div>{data.length == 0 ? <div className="flex justify-center items-center">No projects found</div>
          : <Card data={data} />}</div>}
    </>
  )
}