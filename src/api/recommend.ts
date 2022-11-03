import request from "./request";
import { PlayList } from "../model/playlist";

// 推荐歌单
export function useMyPlayList(limit?: number) {
    return request.request<PlayList>({
        url: `/personalized?limit=${limit}`,
        method: 'get',
    })
}
