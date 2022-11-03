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