import { AnimateOnView } from '@components/ui/AnimateOnView'
import { experienceInfo } from '@data/experienceInfo'

export function Experience() {
	return (
		<AnimateOnView delay={0.6}>
			<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black'>
				Exper
				<b className='text-cyan-600'>ience</b>
			</h2>
			{experienceInfo.map((job, index) => (
				<div key={index} className='flex gap-4 mt-6'>
					<div className='flex flex-col items-center'>
						<div
							className={`w-3 h-3 rounded-full bg-blue-500 mt-1 shrink-0 ${index === 0 ? `animate-pulse` : ''}`}
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
		</AnimateOnView>
	)
}
