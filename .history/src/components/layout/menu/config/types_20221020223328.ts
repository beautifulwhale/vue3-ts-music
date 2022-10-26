export interface IMenuList {
    name: string,
    menus: Menu[]
}
type Menu = {
    icon: any,
    name: string,
    key: string
}