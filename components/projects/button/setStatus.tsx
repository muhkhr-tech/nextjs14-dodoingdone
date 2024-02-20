'use client'

import SetStatus from "@/app/projects/action/setStatus"
import { useState } from "react"
import { HiOutlineX } from "react-icons/hi"
import { HiEllipsisVertical } from "react-icons/hi2"

export default function SetStatusButton({ status, projectId }: any) {
  const [isLoading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)

  const handleChange = () => {
    setModal(!modal)
  }

  const handleClick = async (e: any) => {
    setLoading(true)
    try {
      await SetStatus(projectId, e.target.value)
      setModal(false)
    } catch (err) { console.log(err) }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div>

        <button className="btn btn-xs btn-ghost btn-circle" onClick={handleChange}>
          <HiEllipsisVertical />
        </button>

        <input
          type="checkbox"
          checked={modal}
          onChange={handleChange}
          className="modal-toggle"
        />

        <div className="modal">
          <div className="modal-box w-1/5 max-w-full">
            <div className="flex justify-between">
              <h3 className="font-bold text-xs pb-2">Change status project?</h3>
              <button onClick={handleChange}><HiOutlineX size={20} /></button>
            </div>

            <div>
              {isLoading ? <span className="loading"></span>
                : <div>
                  {status === 'do' || status === 'done' ? <button onClick={handleClick} value={'doing'} className="btn btn-xs btn-warning text-white">Doing</button>
                    : <div className="flex gap-1"><button onClick={handleClick} value={'do'} className="btn btn-xs bg-purple-700 text-white">Do</button>
                      <button onClick={handleClick} value={'done'} className="btn btn-xs btn-success">Done</button></div>}
                </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}