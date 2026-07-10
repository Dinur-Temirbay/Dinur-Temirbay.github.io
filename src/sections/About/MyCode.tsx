export function MyCode() {
	return (
		<>
			<div className='bg-slate-800/50 p-3 border-b border-cyan/10'>
				<p className='text-white font-light'>dinur.js</p>
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
