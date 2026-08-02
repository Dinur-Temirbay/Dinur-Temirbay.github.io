import { useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

interface Props {
	images: string[]
	alt: string
}

export function ImageCarousel({ images, alt }: Props) {
	const [index, setIndex] = useState(0)

	const prev = () => setIndex(i => (i === 0 ? images.length - 1 : i - 1))
	const next = () => setIndex(i => (i === images.length - 1 ? 0 : i + 1))

	return (
		<div className='relative'>
			<img
				src={images[index]}
				alt={alt}
				className='w-full rounded-xl h-56 object-cover'
			/>
			{images.length > 1 && (
				<>
					<button
						onClick={prev}
						className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80 transition-colors'
					>
						<IoChevronBack className='text-xl' />
					</button>
					<button
						onClick={next}
						className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80 transition-colors'
					>
						<IoChevronForward className='text-xl' />
					</button>
					<div className='flex justify-center gap-1 mt-2'>
						{images.map((_, i) => (
							<button
								key={i}
								onClick={() => setIndex(i)}
								className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-cyan-400' : 'bg-gray-600'}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	)
}
