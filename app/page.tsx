import Card from "@/components/home/card";

export default function Home() {

  return (
    <div className="mt-40 sm:mt-10">
      <h1 className="text-center text-2xl mb-1">
        <span className="text-purple-700">Do</span>
        <span className="text-yellow-500">Doing</span>
        <span className="text-green-700">Done</span>
      </h1>
      <p className="text-xs sm:text-sm text-center text-slate-600">
        Do some tasks | Doing with focus | Done perfectly<br/>
        Make a good habit,
        create your own targets and focus on them</p>
    
    <div className="hidden sm:grid sm:grid-cols-3 gap-4 justify-center mt-20">
      <Card status={'do'} />
      <Card status={'doing'} />
      <Card status={'done'} />
    </div>

    <div className="sm:hidden grid grid-cols-3 gap-4 justify-center mt-20">
      <Card status={'do'} />
      <Card status={'doing'} />
      <Card status={'done'} />
    </div>
    </div>
  );
}
