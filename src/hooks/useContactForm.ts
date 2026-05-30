import { useState } from 'react'

export function useContactForm() {
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
		'idle',
	)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setStatus('sending')
		const form = e.currentTarget

		try {
			const res = await fetch('https://formspree.io/f/mqejokob', {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' },
			})
			if (res.ok) {
				setStatus('sent')
				form.reset()
			} else setStatus('error')
		} catch {
			setStatus('error')
		}
	}

	return { status, handleSubmit }
}
