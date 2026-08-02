import type { ComponentType, CSSProperties } from 'react'

export interface Project {
	id: string
	name: string
	tech: string
	shortDescr: string
	desc: string
	images: string[]
	link: string
}

export interface Skill {
	name: string
	icon: ComponentType<{ className?: string; style?: CSSProperties }>
	color: string
}

export interface SkillGroup {
	title: string
	icon: ComponentType<{ className?: string; style?: CSSProperties }>
	skills: Skill[]
}

export interface Experience {
	duration: string
	role: string
	company: string
	descr: string
	isCurrentJob: boolean
}
