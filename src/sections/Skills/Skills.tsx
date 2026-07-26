import { skillsList } from '@/data/skillsList.ts'
import { AnimateOnView } from '@components/ui/AnimateOnView.tsx'

export function Skills() {
	return (
		<AnimateOnView delay={0.4}>
			<section
				id='skills'
				className='max-w-7xl mx-auto px-6 md:px-4 mt-40 scroll-mt-20'
			>
				<div className='flex flex-col md:flex-row gap-20'>
					<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black border-b-4 border-cyan-700 md:border-none leading-normal md:w-1/5 mx-auto'>
						Skills
					</h2>
					<div className='flex flex-col gap-10 flex-1'>
						{skillsList.map((group, index) => {
							const CategoryIcon = group.icon

							return (
								<div key={index}>
									<h3 className='flex items-center gap-2 text-gray-400 text-sm font-bold uppercase mb-4 dark:text-black'>
										{CategoryIcon && (
											<CategoryIcon className='text-lg dark:text-gray-500 text-cyan-400' />
										)}
										{group.title}
									</h3>
									<div className='flex flex-wrap gap-3'>
										{group.skills.map((skill, i) => {
											const Icon = skill.icon
											return (
												<div
													key={i}
													className='flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-md hover:border-cyan-700 shadow-sm hover:shadow-cyan-300 
                                                    transition-colors duration-300'
												>
													<Icon
														className='text-xl'
														style={{ color: skill.color }}
													/>
													<span className='text-gray-400 text-xs dark:text-black'>
														{skill.name}
													</span>
												</div>
											)
										})}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
		</AnimateOnView>
	)
}
