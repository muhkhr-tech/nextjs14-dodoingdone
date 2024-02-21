import AddTodosProjectButton from "./button/addTodos";
import ProjectDetailButton from "./button/detail";

export default function Card({ data }: any) {
  const getCompletion = (todo: number, doing: number, done: number) => {
    const total = todo + doing + done
    let percentage: any = (done / total) * 100

    if (isNaN(percentage)) {
      percentage = 0
    }

    return parseInt(percentage)
  }

  const getDaysLeft = (createdAt: any, dueDate: any) => {
    var days = Math.floor((dueDate - createdAt) / (1000 * 60 * 60 * 24));
    return days
  }

  return (
    <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm mb-20">
      {data.map((item: any, index: any) => (
        <div key={index} className="relative border p-4 rounded-md shadow-md">
          <div className="flex justify-between">
            <h4 className="text-md font-bold sm:font-normal sm:text-lg">{item.title}</h4>
          </div>
          <div className="mb-2 flex gap-1 text-xs">
            <p className="mb-2 text-xs text-slate-700">{getDaysLeft(item.createdAt, item.dueDate)} days left</p> |
            <p>Completion {getCompletion(parseInt(item.totalTodos), parseInt(item.totalTodosInprogress), parseInt(item.totalTodosCompleted))}%</p>
          </div>
          <div className="hidden sm:block text-slate-500 mb-5">{item.description.slice(0, 100)}...</div>
            <div className="flex justify-end gap-2">
              <AddTodosProjectButton projectId={item.id} />
              <ProjectDetailButton project={item} />
            </div>
        </div>
      ))}
    </div>
  )
}