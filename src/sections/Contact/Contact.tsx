import { AnimateOnView } from '@components/ui/AnimateOnView'
import { ContactForm } from './ContactForm'

export function Contact() {
	return (
		<AnimateOnView>
			<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black'>
				Let`s
				<b className='text-cyan-600'>talk</b>
			</h2>
			<ContactForm />
		</AnimateOnView>
	)
}
