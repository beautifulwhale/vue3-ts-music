import request from "./request";

interface Banner {
    imageUrl: string
}

// banner
export default function getBannerLists(type?: number): Promise<Result<any, Banner[]>> {
    return request.get('/banner');
}
