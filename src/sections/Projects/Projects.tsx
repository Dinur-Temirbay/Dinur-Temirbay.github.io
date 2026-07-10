import { projectsInfo } from '@data/projectsInfo.ts'
import { AnimateOnView } from '@components/ui/AnimateOnView'

export function Projects() {
	return (
		<AnimateOnView delay={0.2}>
			<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black'>
				Recent <b className='text-cyan-600'>Projects</b>
			</h2>
			<div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 w-full'>
				{projectsInfo.map((project, index) => (
					<div key={index} className='w-full'>
						<div className='rounded-lg bg-gray-800 cursor-pointer text-white overflow-hidden dark:text-black dark:bg-gray-200 h-full'>
							<img
								src={Array.isArray(project.img) ? project.img[0] : project.img}
								alt={project.title}
								className='w-full h-48 object-cover transition duration-300 hover:scale-105'
							/>
							<div className='p-4'>
								<p className='text-left text-xl font-bold mt-2'>
									{project.title}
								</p>
								<p className='text-left text-sm mt-2'>{project.shortDescr}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</AnimateOnView>
	)
}
