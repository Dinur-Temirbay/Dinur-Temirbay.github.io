import { CustomCursor } from '@/components/ui/CustomCursor'
import { Header } from '@/sections/Header/Header'
import { Promo } from '@/sections/Promo/Promo'
import { About } from '@/sections/About/About'
import { Projects } from '@sections/Projects/Projects.tsx'
import { Experience } from '@sections/Experience/Experience.tsx'
import { Contact } from '@sections/Contact/Contact.tsx'

export function Home() {
	return (
		<>
			<CustomCursor />
			<Header />
			<Promo />
			<About />
			<Projects />
			<Experience />
			<Contact />
		</>
	)
}
