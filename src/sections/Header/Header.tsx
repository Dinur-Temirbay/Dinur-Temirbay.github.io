import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '@/context/ThemeContext'
import { useState } from 'react'
import { navLinks } from '@/data/navLinks'
import { IoIosMenu, IoIosClose } from 'react-icons/io'

export function Header() {
	const { theme, toggleTheme } = useTheme()
	const [isOpen, setIsOpen] = useState(false)
	const [activeLink, setActiveLink] = useState('/')

	const handleLinkClick = (href: string) => {
		setActiveLink(href)
		setIsOpen(false)
	}

	return (
		<header className='fixed inset-x-0 top-0 z-50 w-full bg-[#16171d] dark:bg-gray-100 border-b border-gray-800 dark:border-gray-200 transition-colors duration-300'>
			<nav className='container mx-auto max-w-7xl flex items-center justify-between gap-5 md:gap-8 p-4'>
				<div className='text-xl font-bold text-white dark:text-black'>
					<a href='/'>
						dinur.<span className='text-cyan-400'>dev</span>
					</a>
				</div>
				<ul className='hidden md:flex gap-6 text-white font-bold text-md dark:text-black'>
					{navLinks.map(link => {
						const isActive = activeLink === link.href
						return (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={() => handleLinkClick(link.href)}
									className={`transition-colors ${
										isActive
											? 'text-cyan-400 dark:text-cyan-400'
											: 'text-white dark:text-black hover:text-cyan-400 dark:hover:text-cyan-600'
									}`}
								>
									{link.label}
								</a>
							</li>
						)
					})}
				</ul>
				<div className='flex items-center gap-4'>
					<button onClick={toggleTheme}>
						{theme === 'dark' ? (
							<FaSun className='text-black hover:rotate-180 transition duration-500 cursor-none' />
						) : (
							<FaMoon className='text-white hover:rotate-180 transition duration-500 cursor-none' />
						)}
					</button>
					<button
						className='md:hidden text-white dark:text-black p-2'
						onClick={() => setIsOpen(!isOpen)}
					>
						<IoIosMenu className='text-2xl' />
					</button>
				</div>
			</nav>
			{isOpen && (
				<div className='fixed top-0 right-0 h-screen w-3/5 md:hidden bg-[#16171d] dark:bg-gray-100 border-t border-gray-800 dark:border-gray-200 p-4 transition-all'>
					<div className='flex justify-end'>
						<button
							onClick={() => setIsOpen(false)}
							className='text-white dark:text-black text-4xl p-1'
						>
							<IoIosClose />
						</button>
					</div>
					<ul className='flex flex-col gap-4 text-white dark:text-black font-bold text-md'>
						{navLinks.map(link => (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={() => setIsOpen(false)}
									className='block py-2 hover:text-cyan-400 dark:hover:text-cyan-600'
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	)
}
