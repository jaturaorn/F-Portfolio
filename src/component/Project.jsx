import ProjectItem from "./ProjectItem"


const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center py-8">I project that i have make</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectItem img='' title='' />
          <ProjectItem img='' title='' />
          <ProjectItem img='' title='' />
          <ProjectItem img='' title='' />
        </div>
    </div>
  )
}

export default Project