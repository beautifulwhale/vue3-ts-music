import { PlayList, PlayListDetail } from "../model/playlist";
import request from "./request";


// 推荐歌单
export function playlist(id: string) {
    return request.request<PlayList<PlayListDetail>>({
        url: `/playlist/detail?id=${id}`,
        method: 'get',
    })
}