import { AnimateOnView } from '@components/ui/AnimateOnView'
import { AboutHeader } from './AboutHeader.tsx'

export function About() {
	return (
		<AnimateOnView>
			<AboutHeader />
			<p className='text-white mt-3 text-sm md:text-base text-center md:text-left dark:text-black'>
				I'm a front-end developer who builds user-friendly, modern websites.
				<br />I love learning new things and turning ideas into high-quality
				products.
			</p>
			<div className='mt-10 text-white flex justify-center md:justify-start gap-6 md:gap-10 dark:text-black'>
				<div>
					<span className='text-4xl md:text-6xl font-semibold'>+1.6</span>
					<p className='text-sm mt-1'>
						YEARS OF
						<br />
						EXPERIENCE
					</p>
				</div>
				<div>
					<span className='text-4xl md:text-6xl font-semibold'>+13</span>
					<p className='text-sm mt-1'>
						PET PROJECTS
						<br />
						COMPLETED
					</p>
				</div>
			</div>
		</AnimateOnView>
	)
}
