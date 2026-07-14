import { skillsList } from '@/data/skillsList.ts'
import { AnimateOnView } from '@components/ui/AnimateOnView.tsx'

export function Skills() {
	return (
		<AnimateOnView delay={0.6}>
			<section id='skills' className='max-w-7xl mx-auto px-15 mt-40'>
				<div className='flex flex-col md:flex-row gap-20'>
					<div>
						<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black'>
							Skills
						</h2>
					</div>
					<div className='flex flex-col gap-10'>
						{skillsList.map((group, index) => (
							<div key={index}>
								<h3 className='text-gray-400 text-sm font-bold uppercase mb-4'>
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
												<span className='text-gray-400 text-xs'>
													{skill.name}
												</span>
											</div>
										)
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</AnimateOnView>
	)
}
