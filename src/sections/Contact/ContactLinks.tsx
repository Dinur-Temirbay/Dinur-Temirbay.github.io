import { SideSocialsInfo } from '@/data/sideSocialsInfo'
import { socialLinks } from '@data/socialLinks.ts'

export function ContactLinks() {
	return (
		<>
			<div className='mt-5 flex flex-col gap-6'>
				{socialLinks.map(social => {
					const Icon = social.icon
					return (
						<a
							key={social.name}
							href={social.href}
							className='flex gap-4 items-center group'
						>
							<Icon className='w-6 h-6 text-gray-500 dark:text-black group-hover:text-cyan-400 transition-colors' />
							<div>
								<p className='text-gray-500 text-xs dark:text-black'>
									{social.name}
								</p>
								<span className='text-white text-sm font-bold group-hover:text-cyan-400 transition-colors dark:text-black'>
									{social.descr}
								</span>
							</div>
						</a>
					)
				})}
				{SideSocialsInfo.map(social => {
					const Icon = social.icon
					return (
						<a
							key={social.name}
							href={social.href}
							className='md:hidden flex gap-4 items-center group'
						>
							<Icon className='w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors' />
							<div>
								<p className='text-gray-500 text-xs'>{social.name}</p>
								<span className='text-white text-sm font-bold group-hover:text-cyan-400 transition-colors'>
									{social.descr}
								</span>
							</div>
						</a>
					)
				})}
			</div>
		</>
	)
}
