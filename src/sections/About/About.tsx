import { AnimateOnView } from '@components/ui/AnimateOnView'
import { MyCode } from './MyCode.tsx'

export function About() {
	return (
		<AnimateOnView delay={0.4}>
			<section
				className='max-w-7xl mx-auto px-6 md:px-4 mt-40 flex md:flex-row flex-col items-center gap-10 scroll-mt-60'
				id='about'
			>
				<div className='w-full md:w-1/2 flex flex-col items-center md:items-start gap-8'>
					<h2 className='text-white text-4xl font-bold text-center md:text-left dark:text-black border-b-4 border-cyan-700 w-fit leading-normal'>
						About Me
					</h2>
					<p className='text-gray-400 mt-3 text-sm md:text-lg text-center md:text-left dark:text-black'>
						Hey there! I'm Dinur, a front-end developer who builds
						user-friendly, modern websites.💻✨
						<br /> <br />
						Front-end developer with commercial experience in React. I have
						developed admin panels 📊, integrated REST APIs, and collaborated
						with designers in Figma 🎨. I am currently actively developing my
						skills: working on my own projects and deepening my knowledge of the
						tech stack 📚. I am looking for a front-end developer position where
						I can grow and make a real contribution to the 💼🚀.
						<br /> <br />I love learning new things and turning ideas into
						high-quality products.
					</p>
				</div>
				<div className='w-full md:w-1/2 border rounded-lg overflow-hidden shadow-lg shadow-cyan-700/50 dark:shadow-black/50 dark:bg-black'>
					<MyCode />
				</div>
			</section>
		</AnimateOnView>
	)
}
