import { PromoText } from './PromoText'
import { AnimateOnView } from '@components/ui/AnimateOnView'

export function Promo() {
	return (
		<AnimateOnView>
			<div className='max-w-7xl mx-auto px-4 flex md:flex-row flex-col items-center justify-between mt-30'>
				<div className='md:text-left text-center flex flex-col gap-6'>
					<p className='text-white text-xl'>Hello World!</p>
					<h1 className='text-white md:text-6xl font-bold text-4xl leading-normal'>
						My name is Dinur
					</h1>
					<PromoText />
					<div className='flex md:justify-start justify-center gap-3 mt-10'>
						<a
							href='/contact'
							className='text-sm md:text-base bg-cyan-700 text-white font-bold py-3 px-8 rounded transition duration-300 dark:text-black dark:bg-gray-400 hover:-translate-y-1'
						>
							Contact Me
						</a>
						<a
							href='/myResume.pdf'
							download='Dinur_Temirbay_Resume.pdf'
							className='text-sm md:text-base bg-transparent border border-cyan-700 hover:-translate-y-1 text-white font-bold py-3 px-8 rounded transition duration-300 dark:text-black'
						>
							Download CV
						</a>
					</div>
				</div>
				<div>
					<img src='promo.png' alt='Profile' className='w-xl h-xl' />
				</div>
			</div>
		</AnimateOnView>
	)
}
