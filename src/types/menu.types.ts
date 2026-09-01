export interface MenuItem {
    name: string
    href: string
    description?: string
    new_tab?: boolean
    disabled?: boolean
    sub_menu?: MenuItem[]
    mega?: boolean
    columns?: MenuColumn[]
}

export interface MenuColumn {
    title: string
    items: MenuItem[]
}
