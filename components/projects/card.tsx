import AddTodosProjectButton from "./button/addTodos";
import ProjectDetailButton from "./button/detail";

export default function Card({data}: any) {
  const getTotal = (todo: number, doing: number, done: number) => {
    return todo+doing+done
  }

    return (
        <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
          {data.map((item: any, index: any) => (
            <div key={index} className="relative border p-4 rounded-md shadow-md">
              <h4 className="text-lg">{item.title}</h4>
              <p className="mb-2 text-xs text-slate-700">{new Intl.DateTimeFormat('id', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format(item.dueDate)}</p>
              <div className="mb-2 flex gap-1 text-xs">
                <p>Total ({getTotal(parseInt(item.totalTodos),parseInt(item.totalTodosInprogress),parseInt(item.totalTodosCompleted))}) |</p>
                <p className="text-purple-700">Do ({item.totalTodos}) |</p>
                <p className="text-warning">Doing ({item.totalTodosInprogress}) |</p>
                <p className="text-success">Done ({item.totalTodosCompleted})</p>
              </div>
              <div className="text-slate-500 mb-5">{item.description.slice(0, 100)}...</div>
              <div className="flex justify-between items-center">
                <div className="text-xs uppercase">Status : {item.status}</div>
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