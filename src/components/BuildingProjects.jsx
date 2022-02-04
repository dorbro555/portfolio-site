
export default function FilteredProjects({ projects}){

    return(
        <>
        {/* Building gallery */}
        <div className='flex flex-row flex-wrap rounded-xl bg-base-100 mb-14 py-4'>
            <div className="w-full p-4 flex flex-row">
                <h1 className="font-bold text-base-content/80 font-andika text-5xl">In Development</h1>
            </div>
            { projects
                .filter(project => project?.building).map( (project, idx) => (
                <div className="p-4 md:w-1/2 xl:w-1/3" key={idx}>
                    <div className="h-full">
                        <div className="relative pb-48">
                            <img className="lg:h-48 md:h-36 h-full w-full object-cover object-center 
                                    absolute rounded-xl shadow-xl shadow-base-300/60 transition hover:scale-110" 
                                src={project.photoLink} alt="blog"></img>
                        </div>
                        <div className="relative -mt-4 px-6">
                            <div className="p-2 bg-base-200 rounded-xl shadow-xl shadow-base-300/60 transition 
                                hover:bg-gradient-to-br from-primary to-accent card-gradient-border">
                                <div className="px-5 py-4 bg-base-200 rounded-xl">
                                    <h2 className="tracking-widest title-font font-poppins text-base-content mb-1 opacity-60">
                                        {project.madeWith.join(', ')}
                                    </h2>
                                    <h1 className="title-font text-xl tracking-tight font-medium font-poppins text-base-content mb-3 opacity-90">{project.title}</h1>
                                    <p className="leading-relaxed mb-3 font-merriweather opacity-90">{project.description}</p>
                                    {/* Links */}
                                    <div className="flex items-center flex-wrap ">
                                        <a href={project.sourceLink}>
                                            <span className="fill-base-content mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800 h-10 w-10">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <title>GitHub</title>
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                                                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 
                                                1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
                                                0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 
                                                .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 
                                                1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                            </span>
                                        </a>
                                        <a href={project.siteLink}>
                                            <span className="text-base-content inline-flex items-center leading-none text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <span className='mx-2 text-neutral-content opacity-50 lowercase'>
                                        {project.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>

        </>
    )
}