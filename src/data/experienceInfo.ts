import type { Experience } from '@/types/index.ts'

export const experienceInfo: Experience[] = [
	{
		isCurrentJob: true,
		role: 'Service Desk Engineer',
		company: 'Energy Solution Center.',
		duration: 'March 2025 - Present (1 year 5 months)',
		descr:
			'User support (300+ employees). Configuration of workstations and the network environment. Resolving technical incidents and ensuring system stability. Coordinating with the company`s IT infrastructure',
	},
	{
		isCurrentJob: false,
		role: 'Frontend Developer',
		company: 'Expo Best.',
		duration: 'May 2023 - August 2023 (4 months)',
		descr:
			'Developed a React-based admin panel for managing products, employees, and orders. Implemented search, filtering, and sorting. Integrated REST API using Axios and collaborated with a designer in Figma on UX and responsiveness.',
	},
]
