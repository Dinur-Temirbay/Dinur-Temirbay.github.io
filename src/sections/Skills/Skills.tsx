import { Marquee } from './Marquee.tsx'
import { skillsRow1, skillsRow2 } from '@data/skillsList.ts'
import { AnimateOnView } from '@components/ui/AnimateOnView.tsx'

export function Skills() {
	return (
		<AnimateOnView delay={0.4}>
			<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black'>
				Ski
				<b className='text-cyan-600'>lls</b>
			</h2>
			<div className='mt-8 overflow-hidden flex flex-col gap-5'>
				<Marquee skillsList={skillsRow1} />
				<Marquee skillsList={skillsRow2} reverse />
			</div>
		</AnimateOnView>
	)
}
