import request from "./request";
import { PlayList, NewSongs } from "../model/playlist";

// 推荐歌单
export function useMyPlayList(limit?: number) {
    return request.request<PlayList>({
        url: `/personalized?limit=${limit}`,
        method: 'get',
    })
}

// 推荐新音乐
export function useNewSongs(limit?: number) {
    return request.request<NewSongs>({
        url: `/personalized/newsong?limit=${limit}`,
        method: 'get'
    })
}