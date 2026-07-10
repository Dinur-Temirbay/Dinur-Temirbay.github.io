import { AnimateOnView } from '@components/ui/AnimateOnView'
export function About() {
	return (
		<AnimateOnView>
			<div className='container mx-auto mt-30 flex md:flex-row flex-col items-center justify-between'>
				<div className=''>
					<h2 className='text-white text-3xl font-bold text-center md:text-left dark:text-black'>
						About Me
					</h2>
					<div className='border w- h-1 bg-cyan-700 mt-3'></div>
					<p className='text-white mt-3 text-sm md:text-base text-center md:text-left dark:text-black'>
						Hey there! I'm Dinur, a front-end developer who builds
						user-friendly, modern websites.
						<br />I love learning new things and turning ideas into high-quality
						products.
					</p>
				</div>
				<div className=''></div>
			</div>
		</AnimateOnView>
	)
}
