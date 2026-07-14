// Импортируем нужные SVG-иконки из пакета Simple Icons
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
	SiMysql,
	SiGit,
	SiFigma,
	SiPostman,
	SiReacthookform,
	SiInsomnia,
	SiDocker,
	SiExpo,
	SiVite,
	SiFirebase,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'

export const skillsList = [
	{
		title: 'Frontend',
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
		],
	},
	{
		title: 'Backend',
		skills: [
			{ name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
			{ name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
			{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
			{ name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
			{ name: 'MySQL', icon: SiMysql, color: '#4479A1' },
			{ name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
			{ name: 'Docker', icon: SiDocker, color: '#2496ED' },
		],
	},
	{
		title: 'Tools',
		skills: [
			{ name: 'Git', icon: SiGit, color: '#F05032' },
			{ name: 'Figma', icon: SiFigma, color: '#F24E1E' },
			{ name: 'Postman', icon: SiPostman, color: '#FF6C37' },
			{ name: 'Insomnia', icon: SiInsomnia, color: '#4000BF' },
			{ name: 'Vite', icon: SiVite, color: '#646CFF' },
		],
	},
]
