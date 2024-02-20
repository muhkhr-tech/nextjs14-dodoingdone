'use client'

import AddTodo from "@/app/projects/action/addTodo"
import { useState } from "react"
import { BsDot } from "react-icons/bs"

export default function AddTodosProjectButton(projectId: any) {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [title, setTitle] = useState('')
  const [tempData, setTempData] = useState<string[]>([])

  const handleChange = async (e: any) => {
    setModal(!modal)

    if (modal) {
      setTitle('')
      setTempData([])
    }
  }

  const handleRemoveButton = (e: any) => {
    setTempData((prevData) => {
      let updateTempData = [...prevData]
      updateTempData = updateTempData.filter((title) => title != e.target.value)
      return updateTempData
    })
  }

  const handleForm = async (e: any) => {
    e.preventDefault()

    if (!tempData.includes(title)) {
      setLoading(true)
      setTempData(prevData => [...prevData, title])
      setLoading(false)
    }
  }

  const handleSaveButton = async (e: any) => {

    setLoading(true)

    try {
      await AddTodo(projectId, tempData)
      setTitle('')
      setModal(false)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>

      <button className="btn btn-xs sm:btn-sm font-thin text-white btn-primary" onClick={handleChange}>
        Add
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b-2 pb-2">Todo List</h3>
          <form onSubmit={handleForm}>
            <div className="flex items-end justify-between space-x-2">
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  type="text"
                  name="title"
                  value={title}
                  required={true}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input input-sm w-full input-bordered"
                  placeholder="Baca buku"
                />
              </div>
              <div>
                <button type="submit" className="btn btn-sm btn-success text-white">+</button>
              </div>
            </div>
          </form>
          <div className="mt-3">
            {tempData.map((item, index) => (
              <div key={index} className="flex items-center space-x-1">
                <p className="flex space-x-1"><BsDot size={20}/> {item}</p>
                <button value={item} onClick={handleRemoveButton} className="text-error text-lg">x</button>
              </div>
            ))}
          </div>

          <div className="modal-action">
            {!isLoading ? (
              <div>
                <button type="button" className="btn btn-sm me-1" onClick={handleChange}>
                  Cancel
                </button>
                <button type="submit" onClick={handleSaveButton} className="btn btn-sm btn-primary" disabled={tempData.length==0}>
                  Save
                </button>
              </div>
            ) : (
              <button type="button" className="btn btn-sm loading">
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}