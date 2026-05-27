import { useEffect, useState } from 'react'
import { words } from '@data/aboutHeaderInfo.ts'

export function AboutHeader() {
	const [index, setIndex] = useState(0)
	const [fade, setFade] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false)

			setTimeout(() => {
				setIndex(prevIndex => (prevIndex + 1) % words.length)
				setFade(true)
			}, 300)
		}, 1500)

		return () => clearInterval(interval)
	}, [])

	return (
		<h1 className='text-center md:text-left text-4xl md:text-5xl text-white font-bold mt-10 md:mt-0 dark:text-black'>
			I turn ideas into{' '}
			<span
				className={`text-cyan-600 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
			>
				{words[index]}
			</span>
		</h1>
	)
}
