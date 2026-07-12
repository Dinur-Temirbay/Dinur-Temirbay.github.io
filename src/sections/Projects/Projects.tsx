import { projectsInfo } from '@data/projectsInfo.ts'
import { AnimateOnView } from '@components/ui/AnimateOnView'
import { FaGithub } from 'react-icons/fa'

export function Projects() {
	return (
		<AnimateOnView delay={0.4}>
			<section id='projects' className='max-w-7xl mx-auto px-15 mt-40'>
				<h2 className='text-white text-4xl font-bold text-center dark:text-black border-b-4 border-cyan-700 w-fit leading-normal mx-auto'>
					Recent Projects
				</h2>
				<div className='mt-15 grid gap-10 grid-cols-1 md:grid-cols-3'>
					{projectsInfo.map(project => (
						<div
							key={project.name}
							className='border border-none shadow-white/10 shadow-md rounded-xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-cyan-700'
						>
							<img
								src={project.img}
								alt={project.name}
								className='w-full h-48 object-cover'
							/>
							<div className='p-5'>
								<div className='flex items-center justify-between'>
									<h3 className='text-xl font-semibold text-white dark:text-black'>
										{project.name}
									</h3>
									<a href={project.link} target='_blank'>
										<FaGithub className='w-6 h-6 text-white' />
									</a>
								</div>
								<p className='text-gray-400 dark:text-gray-600 mt-2'>
									{project.shortDescr}
								</p>
								<div className='mt-4 flex flex-wrap gap-2'>
									{project.tech.split(',').map((tech, index) => (
										<span
											key={index}
											className='inline-flex items-center text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-cyan-700'
										>
											{tech.trim()}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</AnimateOnView>
	)
}
