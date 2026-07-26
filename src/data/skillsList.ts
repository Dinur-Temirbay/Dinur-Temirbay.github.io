import {
	SiHtml5,
	SiJavascript,
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiSass,
	SiBootstrap,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPostgresql,
	SiGit,
	SiFigma,
	SiPostman,
	SiReacthookform,
	SiInsomnia,
	SiDocker,
	SiExpo,
	SiVite,
	SiFirebase,
	SiReactrouter,
	SiVercel,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { LuMonitor, LuServer, LuWrench } from 'react-icons/lu'
import type { SkillGroup } from '@/types/index.ts'

export const skillsList: SkillGroup[] = [
	{
		title: 'Frontend',
		icon: LuMonitor,
		skills: [
			{ name: 'Html', icon: SiHtml5, color: '#E34F26' },
			{ name: 'Css', icon: FaCss3Alt, color: '#1572B6' },
			{ name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
			{ name: 'React', icon: SiReact, color: '#61DAFB' },
			{ name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
			{ name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
			{ name: 'Sass', icon: SiSass, color: '#CC6699' },
			{ name: 'ReactHookForm', icon: SiReacthookform, color: '#EC5990' },
			{ name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
			{ name: 'React Native', icon: SiReact, color: '#61DAFB' },
			{ name: 'Expo', icon: SiExpo, color: '#FFFFFF' },
			{ name: 'React Router', icon: SiReactrouter, color: '#F44250' },
		],
	},
	{
		title: 'Backend & infra',
		icon: LuServer,
		skills: [
			{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
			{ name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
			{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
			{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
			{ name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
			{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
			{ name: 'Vercel', icon: SiVercel, color: '#000000' },
			{ name: 'REST APIs', icon: FaGear, color: '#22D3EE' },
		],
	},
	{
		title: 'Tools',
		icon: LuWrench,
		skills: [
			{ name: 'Git', icon: SiGit, color: '#F05032' },
			{ name: 'Figma', icon: SiFigma, color: '#F24E1E' },
			{ name: 'Postman', icon: SiPostman, color: '#FF6C37' },
			{ name: 'Insomnia', icon: SiInsomnia, color: '#4000BF' },
			{ name: 'Vite', icon: SiVite, color: '#646CFF' },
		],
	},
]
