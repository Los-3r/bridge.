import { createWindow } from '../create'
import CreateRPComponent from './RP/Main.vue'
import CreateBPComponent from './BP/Main.vue'

export const CreateRP = createWindow(CreateRPComponent, {
	RPName: '',
	RPDescription: '',
})

export const CreateBP = createWindow(CreateBPComponent, {
	targetVersions: [1.16, 1.14, 1.13],
	targetVersion: '',
	projectName: '',
	projectDescription: '',
	registerClientData: false,
})
