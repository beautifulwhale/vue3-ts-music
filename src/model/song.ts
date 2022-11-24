import { Artists } from './artists';
import { Ar } from './playlist';

export interface SongDetail {
    name: string,
    id: number,
    duration: number,
    artists: Artists[]
}

export interface SongRes {
    code: number,
    songs: Song[]
}

export interface Song {
    name: string,
    id: number,
    ar: Ar[],
    al: {
        picUrl: string
    },
    dt: number,
    lyric?: string
}

export interface SongUrl {
    code: number,
    data: Url[]
}

interface Url {
    id: number
    url: string
}
export interface Lyric {
    code: number,
    lrc: {
        version: number,
        lyric: string
    }
}