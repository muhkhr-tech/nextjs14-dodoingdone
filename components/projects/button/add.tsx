'use client'

import AddProject from "@/app/projects/action/add"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function AddProjectButton() {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [inputData, setInputData] = useState({
    title: '',
    description: '',
    dueDate: ''
  })

  const handleChange = (e: any) => {
    setModal(!modal)

    if (modal) {
      setInputData({
        title: '',
        description: '',
        dueDate: ''
      })
    }
  }

  const handleInput = (e: any) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)

    try {
      await AddProject(inputData)
      setModal(false)
      setInputData({
        title: '',
        description: '',
        dueDate: ''
      })

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>

      <button className="text-success text-sm hover:text-green-500" onClick={handleChange}>
        + Create new project
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b-2 pb-2">Add a Project</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                value={inputData.title}
                required={true}
                onChange={handleInput}
                className="input input-sm w-full input-bordered"
                placeholder="Learn about digital marketing"
              />
            </div>

            <div className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                value={inputData.description}
                rows={7}
                required={true}
                onChange={handleInput}
                className="textarea textarea-bordered"
                placeholder="This project about..."></textarea>
            </div>

            <div className="form-control">
              <div className="label">
                <span className="label-text">Due Date</span>
              </div>
              <input
                type="date"
                name="dueDate"
                value={inputData.dueDate}
                required={true}
                onChange={handleInput}
                className="input input-sm w-full input-bordered"
              />
            </div>

            <div className="modal-action">
              {!isLoading ? (
                <div>
                  <button type="button" className="btn btn-sm me-1" onClick={handleChange}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Save
                  </button>
                </div>
              ) : (
                <button type="button" className="btn btn-sm loading">
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}