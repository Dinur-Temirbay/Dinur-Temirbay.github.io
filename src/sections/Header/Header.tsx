import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export function Header() {
	const { theme, toggleTheme } = useTheme()

	return (
		<nav className='container mx-auto fixed inset-x-0 top-0 z-50 w-full flex items-center justify-between gap-5 md:gap-8 p-4 bg-[#16171d]'>
			<div className='text-xl font-bold text-white dark:text-black'>
				<a href='/'>dinur.dev</a>
			</div>
			<ul className='hidden md:flex gap-6 text-white font-bold text-md dark:text-black'>
				<a href='/'>
					<li>Home</li>
				</a>
				<a href='#about'>
					<li>About</li>
				</a>
				<a href='#projects'>
					<li>Projects</li>
				</a>
				<a href='#skills'>
					<li>Skills</li>
				</a>
				<a href='#contact'>
					<li>Contact</li>
				</a>
			</ul>
			<button onClick={toggleTheme}>
				{theme === 'dark' ? (
					<Sun className='text-black hover:rotate-180 transition duration-500 cursor-pointer' />
				) : (
					<Moon className='text-white hover:rotate-180 transition duration-500 cursor-pointer' />
				)}
			</button>
		</nav>
	)
}
