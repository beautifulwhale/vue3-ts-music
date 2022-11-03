export interface PlayList {
    result: RecommendPlayList[],
    code: number
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