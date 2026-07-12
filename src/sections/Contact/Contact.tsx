import { AnimateOnView } from '@components/ui/AnimateOnView'
import { ContactLinks } from '@sections/Contact/ContactLinks.tsx'
import { ContactForm } from './ContactForm'

export function Contact() {
	return (
		<AnimateOnView delay={1}>
			<section id='contact' className='max-w-7xl mx-auto px-15 my-40'>
				<div className='flex flex-col md:flex-row item-start  justify-between gap-10 md:gap-20'>
					<div>
						<h2 className='text-center md:text-left text-white text-4xl font-bold dark:text-black'>
							Let`s talk
						</h2>
					</div>
					<div className='flex flex-col'>
						<span className='text-gray-500'>
							Have an interesting project or opportunity? Let’s talk.
						</span>
						<ContactLinks />
					</div>
					<div className='w-full md:flex-1'>
						<ContactForm />
					</div>
				</div>
			</section>
		</AnimateOnView>
	)
}
