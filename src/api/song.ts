import request from "./request";
import { SongRes, Lyric,SongUrl } from "../model/song";

// 歌曲详情
export function getSongDetail(ids?: number | string) {
    return request.request<SongRes>({
        url: `/song/detail?ids=${ids}`,
        method: 'get',
    })
}

// 歌曲url
export function songsUrl(id?: number | string) {
    return request.request<SongUrl>({
        url: `/song/url?id=${id}`,
        method: 'get',
    })
}

// 歌曲歌词
export function getLyric(id: number) {
    return request.request<Lyric>({
        url: `/lyric?id=${id}`,
        method: 'get'
    })
}
