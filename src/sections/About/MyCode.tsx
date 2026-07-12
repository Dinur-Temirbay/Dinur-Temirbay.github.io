export function MyCode() {
	return (
		<>
			<div className='bg-slate-800/50 p-3 border-b border-cyan/10 flex gap-4 items-center'>
				<div className='flex gap-1'>
					<div className='w-4 h-4 bg-red-400 rounded-full'></div>
					<div className='w-4 h-4 bg-yellow-400 rounded-full'></div>
					<div className='w-4 h-4 bg-green-400 rounded-full'></div>
				</div>
				<p className='text-gray-300 text-sm font-light'>dinur.js</p>
			</div>
			<div className='p-7 overflow-x-auto'>
				<pre className='whitespace-pre text-lg font-mono leading-6 text-white'>
					<code>
						<span className='text-cyan-300'>const</span> developer = {'{'}
						<br />
						&nbsp;&nbsp;<span className='text-emerald-300'>name</span>:{' '}
						<span className='text-orange-300'>&quot;Dinur&quot;</span>
						,
						<br />
						&nbsp;&nbsp;<span className='text-emerald-300'>role</span>:{' '}
						<span className='text-orange-300'>
							&quot;Front-End Developer&quot;
						</span>
						,
						<br />
						&nbsp;&nbsp;<span className='text-emerald-300'>age</span>:{' '}
						<span className='text-violet-300'>24</span>,
						<br />
						&nbsp;&nbsp;<span className='text-emerald-300'>location</span>:{' '}
						<span className='text-yellow-3000'>&quot;Almaty&quot;</span>,
						<br />
						&nbsp;&nbsp;<span className='text-emerald-300'>
							hardWorker
						</span>: <span className='text-yellow-300'>true</span>,
						<br />
						&nbsp;&nbsp;<span className='text-emerald-300'>hireable</span>:{' '}
						<span className='text-yellow-300'>true</span>
						<br />
						{'}'};
						<br />
						<br />
						<span className='text-slate-500'>// Let&apos;s work together!</span>
					</code>
				</pre>
			</div>
		</>
	)
}
