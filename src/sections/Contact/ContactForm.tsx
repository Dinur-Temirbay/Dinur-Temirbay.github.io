import { Button } from '@/components/ui/Button'
import { useContactForm } from '@hooks/useContactForm.ts'

export function ContactForm() {
	const { status, handleSubmit } = useContactForm()

	return (
		<form onSubmit={handleSubmit} className='mt-10 space-y-3 rounded-lg'>
			<div className='flex flex-col md:flex-row gap-3 mb-2'>
				<div>
					<label
						htmlFor='name'
						className='block text-gray-400 text-sm font-medium dark:text-black'
					>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						className='w-full px-4 py-2 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600 dark:text-black'
						placeholder='Your name'
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block text-gray-400 text-sm font-medium dark:text-black'
					>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						className='w-full px-4 py-2  text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600 dark:text-black'
						placeholder='your@email.com'
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor='message'
					className='block text-gray-400 text-sm font-medium mb-2 dark:text-black'
				>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					required
					rows={3}
					className='w-full px-4 py-2 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-600 dark:text-black'
					placeholder='Your message'
				/>
			</div>
			<Button type='submit' disabled={status === 'sending'} className='w-full'>
				{status === 'sending' ? 'Sending...' : 'Send message'}
			</Button>
			{status === 'sent' && <p className='text-green-500'>Message sent!</p>}
			{status === 'error' && (
				<p className='text-red-500'>Something went wrong</p>
			)}
		</form>
	)
}
