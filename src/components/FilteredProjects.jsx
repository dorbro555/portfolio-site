import { useState } from 'react'

export default function FilteredProjects({ projects}){
    const [activeTag, setActiveTag] = useState('none')
    const allTags = [...new Set([].concat(...projects.map(project => project.madeWith)))]
    return(
        <>
        <div className="btn-group mx-auto">
            {/* TODO: tailwind breaks if I add a placeholder in the template literal. figure out why  */}
            <button className={`my-2 btn text-neutral-content`}
                    onClick={() => setActiveTag('none')}
                    key='tag none'
            >
                All
            </button>
            {allTags.map((tag, idx) => (
                <button className={`my-2 btn${tag == activeTag ? ' btn-active':''} text-neutral-content`}
                        onClick={() => setActiveTag(tag)}
                        key={'tag ' + idx}
                >
                            {tag}
                </button> 
            ))}

        </div> 
        <div className='flex flex-row flex-wrap'>
            { projects.filter( project => activeTag == 'none' ? true : project.madeWith.includes(activeTag)).map( (project, idx) => (
            <div className="p-4 md:w-1/3" key={idx}>
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.photoLink} alt="blog"></img>
                <div className="p-6">
                    <h2 className="tracking-widest title-font font-medium text-base-content mb-1">
                        {project.madeWith.join(', ')}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-base-content mb-3">{project.title}</h1>
                    <p className="leading-relaxed mb-3">{project.description}</p>
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
                </div>
                </div>
            </div>
        )
    )
    }
        </div>
        </>
    )
}