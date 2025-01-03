import { ENVIRONMENT } from "@/constants/environment"

const development = ENVIRONMENT.DEVELOPMENT
const mode = process.env.NEXT_PUBLIC_ENVIRONMENT

let baseUrl = mode === development ? process.env.NEXT_PUBLIC_API_URL : ''

export { baseUrl }
