import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	delay?: number
}

export function AnimateOnView({ children, delay = 0 }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	)
}
