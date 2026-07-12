import { useEffect, useRef } from 'react'

export function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (!cursorRef.current) return
			cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	return <div ref={cursorRef} className='custom-cursor' />
}
