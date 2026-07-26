import { AnimateOnView } from '@components/ui/AnimateOnView'
import { experienceInfo } from '@data/experienceInfo'

export function Experience() {
	return (
		<AnimateOnView delay={0.4}>
			<section
				id='experience'
				className='max-w-7xl mx-auto px-6 md:px-4 mt-40 scroll-mt-20'
			>
				<div className='flex flex-col md:flex-row gap-20'>
					<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black border-b-4 border-cyan-700 md:border-none leading-normal md:w-1/5 mx-auto'>
						Experience
					</h2>
					<div className='flex-1'>
						<p className='text-gray-500 dark:text-black text-center md:text-left'>
							2+ years of experience in IT, combining frontend development and
							technical support.
						</p>
						{experienceInfo.map((job, index) => (
							<div key={index} className='flex gap-4 mt-6'>
								<div className='flex flex-col items-center'>
									<div
										className={`w-4 h-4 rounded-full bg-cyan-400 mt-1 shrink-0 ${index === 0 ? `animate-pulse` : ''}`}
									/>
									<div className='w-px flex-1 bg-gray-700 mt-1' />
								</div>
								<div className='text-gray-500 text-sm leading-6 pb-6 dark:text-black'>
									<span>{job.duration}</span>
									<p className='text-white font-bold text-lg dark:text-black'>
										{job.role}
									</p>
									<p>{job.company}</p>
									<p className='mt-3'>{job.descr}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</AnimateOnView>
	)
}
