import { MdOutlineEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function ContactLinks() {
	return (
		<>
			<div className='mt-5 flex flex-col gap-6'>
				<a
					href='mailto:dinurtemirbay@gmail.com'
					className='flex gap-4 items-center group'
				>
					<MdOutlineEmail className='w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors' />
					<div>
						<p className='text-gray-500 text-xs'>Email</p>
						<span className='text-white text-sm font-bold group-hover:text-cyan-400 transition-colors'>
							dinurtemirbay@gmail.com
						</span>
					</div>
				</a>
				<a
					href='https://www.linkedin.com/in/dinur-temirbay-295662274/'
					target='_blank'
					className='flex gap-4 items-center group'
				>
					<FaLinkedin className='w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors' />
					<div>
						<p className='text-gray-500 text-xs'>LinkedIn</p>
						<span className='text-white text-sm font-bold  group-hover:text-cyan-400 transition-colors'>
							Connect with me
						</span>
					</div>
				</a>
				<a
					href='https://github.com/Dinur-Temirbay'
					target='_blank'
					className='flex gap-4 items-center group'
				>
					<FaGithub className='w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors' />
					<div>
						<p className='text-gray-500 text-xs'>GirHub</p>
						<span className='text-white text-sm font-bold  group-hover:text-cyan-400 transition-colors'>
							Check out my code
						</span>
					</div>
				</a>
			</div>
		</>
	)
}

/* <a
					href='https://t.me/dinternity'
					target='_blank'
					className='flex gap-4 items-center'
				>
					<FaTelegramPlane className='w-6 h-6 text-gray-500' />
					<div>
						<p className='text-gray-500 text-xs'>Telegram</p>
						<span className='text-white'>@dinternity</span>
					</div>
				</a> */
/* <a
					href='https://wa.me/7478265696'
					target='_blank'
					className='flex gap-4 items-center'
				>
					<FaWhatsapp className='w-6 h-6 text-gray-500' />
					<div>
						<p className='text-gray-500 text-xs'>WhatsApp</p>
						<span className='text-white'>dinur</span>
					</div>
				</a> */
