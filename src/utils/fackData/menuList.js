export const menuList = [
    {
        id: 0,
        name: "dashboards",
        path: "/",
        icon: 'feather-airplay',
        dropdownMenu: [
            {
                id: 1,
                name: "CRM",
                path: "/",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 1,
        name: "volunteers",
        path: "#",
        icon: 'feather-users',
        dropdownMenu: [
            {
                id: 1,
                name: "volunteers",
                path: "/Volunteers/List",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 2,
        name: "help",
        path: "#",
        icon: 'feather-help-circle',
        dropdownMenu: [
            {
                id: 1,
                name: "help",
                path: "/help/list",
                subdropdownMenu: false
            }
        ]
    },
    {
        id: 10,
        name: "authentication",
        path: "#",
        icon: 'feather-power',
        dropdownMenu: [
            {
                id: 1,
                name: "login",
                path: "/authentication/login/minimal",
                subdropdownMenu: false
            },
        ]
    }
]
