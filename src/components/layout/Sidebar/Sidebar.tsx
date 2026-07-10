import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export function Sidebar() {
	return (
		<section>
			<div className='bg-gray-800 rounded-lg p-8 text-center dark:bg-gray-200'>
				<img
					src='me.jpg'
					alt='Profile Picture'
					className='w-40 md:w-60 rounded-md mx-auto'
				/>
				<h1 className='mt-5 text-xl md:text-4xl font-bold text-white dark:text-black'>
					Dinur Temirbay
				</h1>
				<p className='text-white text-sm md:text-base mt-2 dark:text-black'>
					Frontend Developer | Qazaqstan, Almaty
				</p>
				<div className='mt-5 flex justify-center gap-5'>
					<a href='https://github.com/Dinur-Temirbay'>
						<FaGithub className='text-2xl text-white cursor-pointer transition duration-300 hover:scale-110 dark:text-black' />
					</a>
					<a href='https://www.linkedin.com/in/dinur-temirbay-295662274/'>
						<FaLinkedin className='text-2xl text-white cursor-pointer transition duration-300 hover:scale-110 dark:text-black' />
					</a>
					<a href='https://wa.me/7478265696'>
						<FaWhatsapp className='text-2xl text-white cursor-pointer transition duration-300 hover:scale-110 dark:text-black' />
					</a>
				</div>
			</div>
		</section>
	)
}
