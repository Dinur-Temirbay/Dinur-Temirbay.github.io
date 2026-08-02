import { useState } from 'react'
import { projectsInfo } from '@data/projectsInfo.ts'
import { AnimateOnView } from '@components/ui/AnimateOnView'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '@/types'
import { ProjectDrawer } from './ProjectDrawer'

export function Projects() {
	const [selected, setSelected] = useState<Project | null>(null)

	return (
		<>
			<ProjectDrawer project={selected} onClose={() => setSelected(null)} />
			<AnimateOnView delay={0.4}>
				<section
					id='projects'
					className='max-w-7xl mx-auto px-6 md:px-4 mt-40 scroll-mt-20'
				>
					<h2 className='text-white text-4xl font-bold text-center dark:text-black border-b-4 border-cyan-700 w-fit leading-normal mx-auto'>
						Recent Projects
					</h2>
					<div className='mt-15 grid gap-10 grid-cols-1 md:grid-cols-3'>
						{projectsInfo.map(project => (
							<div
								key={project.name}
								onClick={() => setSelected(project)}
								className='border border-none shadow-white/10  shadow-md dark:shadow-black rounded-xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-cyan-700'
							>
								<img
									src={
										Array.isArray(project.images)
											? project.images[0]
											: project.images
									}
									alt={project.name}
									className='w-full h-48 object-cover'
								/>
								<div className='p-5'>
									<div className='flex items-center justify-between'>
										<h3 className='text-xl font-semibold text-white dark:text-black'>
											{project.name}
										</h3>
										<a
											href={project.link}
											target='_blank'
											onClick={e => e.stopPropagation()}
										>
											<FaGithub className='w-6 h-6 text-white dark:text-black' />
										</a>
									</div>
									<p className='text-gray-400 mt-2 dark:text-black'>
										{project.shortDescr}
									</p>
									<div className='mt-4 flex flex-wrap gap-2'>
										{project.tech.split(',').map((tech, index) => (
											<span
												key={index}
												className='inline-flex items-center text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-cyan-700 dark:text-black dark:border-black'
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
		</>
	)
}
