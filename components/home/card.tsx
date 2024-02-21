'use client'

import { useEffect, useState } from "react"
import LoadingSkeleton from "./loadingSekeleton"
import GetTodos from "@/app/projects/action/getTodos"

export default function Card({ status }: any) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const respData: any = await GetTodos(status, 3, true)
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
          {data.length === 0 ? <p className="text-sm text-slate-600">No todos found.</p>
            : <div className="mb-3">{data.map((item: any, index) => (
              <div key={index}>
                <div>{item.title}</div>
                <div className="text-xs">
                  Project : <span className="text-slate-600">{item.project.title}</span>
                </div>
              </div>
            ))}
            </div>
          }
          {/* <Link href={`/projects?status=${status}`} className="text-primary">See all</Link> */}
        </div>}
    </div>
  )
}