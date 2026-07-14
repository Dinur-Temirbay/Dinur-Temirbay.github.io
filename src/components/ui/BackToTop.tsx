import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full
            bg-cyan-500 text-white shadow-lg transition-all duration-300
            hover:-translate-y-1 hover:bg-cyan-400 animate-bounce
            ${visible ? 'opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-75'}`}
		>
			<ArrowUp size={22} />
		</button>
	)
}
