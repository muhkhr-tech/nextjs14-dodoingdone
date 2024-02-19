export default function LoadingSkeleton() {
  return (
    <div className="grid sm:grid-cols-3 gap-4 mb-10">
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 sm:h-6 w-full"></div>
        <div className="skeleton h-2 sm:h-4 w-28"></div>
        <div className="skeleton h-2 sm:h-4 w-40"></div>
        <div className="hidden sm:block skeleton h-14 w-full"></div>
        <div className="flex justify-between">
          <div className="skeleton h-2 sm:h-4 w-28"></div>
          <div className="flex justify-items-end gap-2">
            <div className="skeleton h-2 sm:h-4 w-16"></div>
            <div className="skeleton h-2 sm:h-4 w-16"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 sm:h-6 w-full"></div>
        <div className="skeleton h-2 sm:h-4 w-28"></div>
        <div className="skeleton h-2 sm:h-4 w-40"></div>
        <div className="hidden sm:block skeleton h-14 w-full"></div>
        <div className="flex justify-between">
          <div className="skeleton h-2 sm:h-4 w-28"></div>
          <div className="flex justify-items-end gap-2">
            <div className="skeleton h-2 sm:h-4 w-16"></div>
            <div className="skeleton h-2 sm:h-4 w-16"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="skeleton h-4 sm:h-6 w-full"></div>
        <div className="skeleton h-2 sm:h-4 w-28"></div>
        <div className="skeleton h-2 sm:h-4 w-40"></div>
        <div className="hidden sm:block skeleton h-14 w-full"></div>
        <div className="flex justify-between">
          <div className="skeleton h-2 sm:h-4 w-28"></div>
          <div className="flex justify-items-end gap-2">
            <div className="skeleton h-2 sm:h-4 w-16"></div>
            <div className="skeleton h-2 sm:h-4 w-16"></div>
          </div>
        </div>
      </div>
    </div>
  )
}