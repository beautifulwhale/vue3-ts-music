import { Artists } from './artists';
import { Ar } from './playlist';

export interface SongDetail {
    name: string,
    id: number,
    duration: number,
    artists: Artists[]
}

export interface Song {
    name: string,
    id: number,
    ar: Ar[],
    al: {
        picUrl: string
    },
    dt: number
}

export interface Lyric {
    lrc: {
        version: number,
        lyric: string
    }
}