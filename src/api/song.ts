import request from "./request";
import { Song, Lyric } from "../model/song";

// 歌曲详情
export function getSongDetail(ids?: number | string) {
    console.log('request ids', ids);
    
    return request.request<Song>({
        url: `/song/detail?ids=${ids}`,
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