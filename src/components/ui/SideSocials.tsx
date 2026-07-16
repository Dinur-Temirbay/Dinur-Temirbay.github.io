import { SideSocialsInfo } from '@/data/sideSocialsInfo'

export function SideSocials() {
	return (
		<div className='hidden fixed left-0 top-1/2 -translate-y-1/2 md:flex flex-col gap-1 z-50 -translate-x-28'>
			{SideSocialsInfo.map(social => {
				const Icon = social.icon
				return (
					<a
						key={social.name}
						href={social.href}
						target='_blank'
						className='bg-zinc-800/85 w-40 p-4 rounded-r-lg hover:translate-x-28
						 transition-transform duration-500 flex justify-between items-center group'
					>
						<p className='text-sm text-white font-bold group-hover:text-cyan-400 transition-colors'>
							{social.name}
						</p>
						<Icon className='text-2xl text-white group-hover:text-cyan-400 transition-colors' />
					</a>
				)
			})}
		</div>
	)
}
