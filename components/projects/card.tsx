import AddTodosProjectButton from "./button/addTodos";
import ProjectDetailButton from "./button/detail";
import SetStatusButton from "./button/setStatus";

export default function Card({ data }: any) {
  const getTotal = (todo: number, doing: number, done: number) => {
    return todo + doing + done
  }

  return (
    <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm mb-20">
      {data.map((item: any, index: any) => (
        <div key={index} className="relative border p-4 rounded-md shadow-md">
          <div className="flex justify-between">
          <h4 className="text-lg">{item.title}</h4>
          <SetStatusButton projectId={item.id} status={item.status}/>
          </div>
          <p className="mb-2 text-xs text-slate-700">Due date : {new Intl.DateTimeFormat('id', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).format(item.dueDate)}</p>
          <div className="mb-2 flex gap-1 text-xs">
            <p>Total ({getTotal(parseInt(item.totalTodos), parseInt(item.totalTodosInprogress), parseInt(item.totalTodosCompleted))}) |</p>
            <p className="text-purple-700">Do ({item.totalTodos}) |</p>
            <p className="text-warning">Doing ({item.totalTodosInprogress}) |</p>
            <p className="text-success">Done ({item.totalTodosCompleted})</p>
          </div>
          <div className="hidden sm:block text-slate-500 mb-5">{item.description.slice(0, 100)}...</div>
          <div className="flex justify-between items-center">
            <div className="text-xs uppercase">Status : <div className={`${item.status=='do' && 'bg-purple-700 text-white'} ${item.status=='doing' && 'bg-yellow-500 text-white'} ${item.status=='done' && 'bg-green-700 text-white'} badge text-xs`}>{item.status}</div></div>
            <div className="flex justify-end gap-2">
              <AddTodosProjectButton projectId={item.id} />
              <ProjectDetailButton projectId={item.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}