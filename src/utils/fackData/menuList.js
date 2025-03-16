export const menuList = [
    {
        id: 0,
        name: "dashboards",
        path: "#",
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
        id: 10,
        name: "authentication",
        path: "#",
        icon: 'feather-power',
        dropdownMenu: [
            {
                id: 1,
                name: "login",
                path: "#",
                subdropdownMenu: [
                    {
                        id: 1,
                        name: "Cover",
                        path: "/authentication/login/cover",
                    },
                    {
                        id: 2,
                        name: "Minimal",
                        path: "/authentication/login/minimal",
                    },
                    {
                        id: 3,
                        name: "Creative",
                        path: "/authentication/login/creative",
                    },
                ]
            },
        ]
    }
]
