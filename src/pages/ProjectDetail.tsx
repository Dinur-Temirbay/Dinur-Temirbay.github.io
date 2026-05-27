import { AnimateOnView } from '@components/ui/AnimateOnView'
import { useParams } from 'react-router-dom'
import { projectsInfo } from '@data/projectsInfo'

export function ProjectDetail() {
	const { id } = useParams()

	const project = projectsInfo.find(project => project.id === id)

	if (!project) return <p className='text-white'>Project not found</p>

	return (
		<AnimateOnView delay={0.4}>
			<img
				src={project.img}
				alt={project.title}
				className='w-auto rounded-lg'
			/>
			<h1 className='mt-5 text-4xl font-bold text-white text-center md:text-left'>
				{project.title}
			</h1>
			<p className='mt-5 text-white'>{project.desc}</p>
		</AnimateOnView>
	)
}
