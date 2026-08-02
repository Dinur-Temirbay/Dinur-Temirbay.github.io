import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import type { Project } from '@/types/index.ts'
import { ImageCarousel } from './ImageCarousel'

interface Props {
	project: Project | null
	onClose: () => void
}

export function ProjectDrawer({ project, onClose }: Props) {
	return (
		<AnimatePresence>
			{project && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className='fixed inset-0 bg-black/60 z-40'
					/>

					<motion.div
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						className='fixed right-0 top-0 h-full w-full md:w-[500px] bg-[#16171d] z-50 overflow-y-auto'
					>
						<div className='p-8'>
							<button
								onClick={onClose}
								className='mb-6 text-white hover:text-cyan-400 transition-colors'
							>
								<IoClose className='text-3xl' />
							</button>

							<div className='space-y-4'>
								<div className='flex items-center justify-between'>
									<h2 className='text-white text-2xl font-bold'>
										{project.name}
									</h2>
									<a
										href={project.link}
										target='_blank'
										className='hover:text-cyan-400 transition-colors'
									>
										<FaGithub className='text-white text-2xl' />
									</a>
								</div>
								<div className='mt-6 flex flex-wrap gap-2'>
									{project.tech.split(',').map((tech, i) => (
										<span
											key={i}
											className='text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-cyan-700'
										>
											{tech.trim()}
										</span>
									))}
								</div>

								<ImageCarousel images={project.images} alt={project.name} />
								<p className='text-gray-400 mt-4 leading-7'>{project.desc}</p>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	)
}
