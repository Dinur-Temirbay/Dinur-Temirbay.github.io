import { AnimateOnView } from '@components/ui/AnimateOnView'
import { ContactLinks } from '@sections/Contact/ContactLinks.tsx'
import { ContactForm } from './ContactForm'

export function Contact() {
	return (
		<AnimateOnView delay={0.4}>
			<section
				id='contact'
				className='max-w-7xl mx-auto px-6 md:px-4 mt-40 scroll-mt-20'
			>
				<div className='flex flex-col md:flex-row item-start gap-10 md:gap-20'>
					<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black border-b-4 border-cyan-700 md:border-none leading-normal md:w-1/5 mx-auto'>
						Let`s talk
					</h2>
					<div className='flex flex-col'>
						<p className='text-gray-500 dark:text-black text-center md:text-left'>
							Have an interesting project or opportunity? Let’s talk.
						</p>
						<ContactLinks />
					</div>
					<div className='flex-1'>
						<ContactForm />
					</div>
				</div>
			</section>
		</AnimateOnView>
	)
}
