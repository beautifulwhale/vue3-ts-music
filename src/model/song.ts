import { Artists } from './artists'

export interface SongDetail {
    name: string,
    id: number,
    duration: number,
    artists: Artists[]
}