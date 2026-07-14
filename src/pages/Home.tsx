import { CustomCursor } from '@/components/ui/CustomCursor'
import { BackToTop } from '@/components/ui/BackToTop'
import { Header } from '@/sections/Header/Header'
import { Promo } from '@/sections/Promo/Promo'
import { About } from '@/sections/About/About'
import { Projects } from '@sections/Projects/Projects.tsx'
import { Experience } from '@sections/Experience/Experience.tsx'
import { Skills } from '@/sections/Skills/Skills'
import { Contact } from '@sections/Contact/Contact.tsx'
import { Footer } from '@/sections/Footer/Footer'

export function Home() {
	return (
		<>
			<CustomCursor />
			<BackToTop />
			<Header />
			<Promo />
			<About />
			<Projects />
			<Experience />
			<Skills />
			<Contact />
			<Footer />
		</>
	)
}
