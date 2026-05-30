import { useContactForm } from '@hooks/useContactForm.ts'

export function ContactForm() {
	const { status, handleSubmit } = useContactForm()

	return (
		<form
			onSubmit={handleSubmit}
			className='mt-8 space-y-5 bg-gray-800 p-7 rounded-lg dark:bg-gray-200'
		>
			<div>
				<label
					htmlFor='name'
					className='block text-white text-sm font-medium mb-2 dark:text-black'
				>
					Name
				</label>
				<input
					type='text'
					id='name'
					name='name'
					required
					className='w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600 dark:bg-gray-400'
					placeholder='Your name'
				/>
			</div>
			<div>
				<label
					htmlFor='email'
					className='block text-white text-sm font-medium mb-2 dark:text-black'
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					name='email'
					required
					className='w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600 dark:bg-gray-400'
					placeholder='your@email.com'
				/>
			</div>
			<div>
				<label
					htmlFor='message'
					className='block text-white text-sm font-medium mb-2 dark:text-black'
				>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					required
					rows={5}
					className='w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600 dark:bg-gray-400'
					placeholder='Your message'
				/>
			</div>
			<button
				type='submit'
				disabled={status === 'sending'}
				className='w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors cursor-pointer disabled:opacity-50'
			>
				{status === 'sending' ? 'Sending...' : 'Send'}
			</button>
			{status === 'sent' && <p className='text-green-500'>Message sent!</p>}
			{status === 'error' && (
				<p className='text-red-500'>Something went wrong</p>
			)}
		</form>
	)
}
