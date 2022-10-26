export interface IMenuList {
    name: string,
    menus: Menu[]
}
interface Menu {
    icon: any,
    name: string,
    key: string
}