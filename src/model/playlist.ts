export interface PlayList<T = any> {
    result?: RecommendPlayList[],
    code: number,
    playlist?: T
}
export interface RecommendPlayList {
    id: string,
    name: string
    playCount: number,
    picUrl: string,
}
export interface NewSongs {
    code: number,
    result: Song[]
}
export interface Song<T = any> {
    id: number,
    name: string,
    picUrl: string,
    song: T
}

export interface PlayListDetail {
    id: number | null,
    name: string,
    coverImgUrl: string,
    createTime: number | null,
    description: string,
    tags: string[],
    tracks: Track[],
    trackIds: TrackIds[],
    creator: {
        nickname: string,
        avatarUrl: string
    }
}

export interface TrackIds {
    id: number
}
export interface Track {
    name: string,
    id: number,
    ar: Ar[],
    al: {
        id: number,
        name: string,
        picUrl: string
    },
    dt: string
}

export interface Ar {
    id: number,
    name: string
}