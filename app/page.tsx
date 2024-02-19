import Card from "@/components/home/card";

export default function Home() {

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl mb-1">DoDoingDone</h1>
      <p className="text-center text-slate-600">
        Do some tasks | Doing with focus | Done perfectly<br/>
        Make a good habit,
        create your own targets and focus on them</p>
    
    <div className="grid grid-cols-3 gap-4 justify-center mt-20">
      <Card status={'do'} />
      <Card status={'doing'} />
      <Card status={'done'} />
    </div>
    </div>
  );
}
