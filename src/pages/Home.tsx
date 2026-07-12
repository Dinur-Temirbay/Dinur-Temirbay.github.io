import { CustomCursor } from '@/components/ui/CustomCursor'
import { Header } from '@/sections/Header/Header'
import { Promo } from '@/sections/Promo/Promo'
import { About } from '@/sections/About/About'
import { Projects } from '@sections/Projects/Projects.tsx'
import { Education } from '@sections/Education/Education.tsx'
import { Experience } from '@sections/Experience/Experience.tsx'
import { Skills } from '@sections/Skills/Skills.tsx'
import { Contact } from 'lucide-react'

export function Home() {
	return (
		<>
			<CustomCursor />
			<Header />
			<Promo />
			<About />
			<Projects />
			{/*}
		<Skills />
		<Experience />
		<Education />
		<Contact /> */}
		</>
	)
}
