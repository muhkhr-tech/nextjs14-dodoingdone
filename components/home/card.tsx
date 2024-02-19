'use client'

import GetProjects from "@/app/projects/action/getProjects"
import Link from "next/link"
import { useEffect, useState } from "react"
import LoadingSkeleton from "./loadingSekeleton"

export default function Card({ status }: any) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const respData: any = await GetProjects(status, 3)
        setData(respData)
      } catch (err) { console.log(err) }
      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="rounded-md shadow-md border p-4">
      <h2 className={`${status == 'do' && 'text-purple-700'} ${status == 'doing' && 'text-yellow-500'} ${status == 'done' && 'text-green-700'} uppercase`}>{status}</h2>
      <hr className="mb-2" />
      {isLoading ? <LoadingSkeleton />
        : <div>
          <div className="mb-3">{data.map((item: any, index) => (
            <div key={index}>{item.title}</div>
          ))}
          </div>
          <Link href={`/projects?status=${status}`} className="text-primary">See all</Link>
        </div>}
    </div>
  )
}