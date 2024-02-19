'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { LuRefreshCcw } from "react-icons/lu"

export default function FilterStatusSelect() {
  const searchParams = useSearchParams()
  const queryStatus: any = searchParams.get('status') ? searchParams.get('status') : ''

  const [status, setStatus] = useState(queryStatus)
  const router = useRouter()

  const handleChange = (e: any) => {
    setStatus(e.target.value)
  }

  useEffect(() => {
    router.push('/projects?status=' + status)
  }, [status])

  return (
    <div className="flex items-center gap-2">
      <select name="" id=""
        value={status}
        onChange={handleChange}
        className="select select-bordered select-xs">
        <option value="" disabled={true}>Filter project by status</option>
        <option value="do">DO</option>
        <option value="doing">DOING</option>
        <option value="done">DONE</option>
      </select>
      <button onClick={() => setStatus('')}>
        <LuRefreshCcw />
      </button>
    </div>
  )
}