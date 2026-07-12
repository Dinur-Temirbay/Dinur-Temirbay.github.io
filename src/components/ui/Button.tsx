interface Props {
	children: ReactNode
	type?: 'button' | 'submit'
	disabled?: boolean
	className?: string
	onClick?: () => void
}

export function Button({
	children,
	type = 'button',
	disabled,
	className,
	onClick,
}: Props) {
	return (
		<button
			type={type}
			disabled={disabled}
			onClick={onClick}
			className={`bg-cyan-600 transition duration-300 hover:-translate-y-1 text-white font-bold py-2 px-4 rounded-lg disabled:opacity-50 ${className}`}
		>
			{children}
		</button>
	)
}
