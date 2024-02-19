export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="skeleton h-3 w-full"></div>
      <div className="skeleton h-3 w-full"></div>
      <div className="skeleton h-3 w-full"></div>
    </div>
  )
}