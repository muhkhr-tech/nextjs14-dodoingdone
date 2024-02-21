import AddProjectButton from "@/components/projects/button/add";
import FilterStatusSelect from "@/components/projects/filterStatusSelect";
import DisplayProjects from "@/components/projects/display";

export const dynamic = 'force-dynamic'

export default async function ProjectsPage() {

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4 sm:mb-4">
        <h1>PROJECTS</h1>
        {/* <div className="hidden sm:flex">
          <FilterStatusSelect />
        </div> */}
        <AddProjectButton />
      </div>
      <DisplayProjects />
    </div>
  )
}