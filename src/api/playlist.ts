import { PlayList, PlayListDetail } from "../model/playlist";
import request from "./request";


// 歌单详情
export function getplaylist(id: string) {
    return request.request<PlayList<PlayListDetail>>({
        url: `/playlist/detail?id=${id}`,
        method: 'get',
    })
}