import { planDetailes } from "../Interfaces/Interfaces"

interface Data {
    plans: planDetailes[],
    addons:{
        id: number,
        title: string,
        price: number,
        dis: string
    }[]
}

export const data:Data = {
    plans: [
        {
            id: 1,
            title: 'Arcade',
            price: 9,
        },
        {
            id: 2,
            title: 'Advanced',
            price: 12,
        },
        {
            id: 3,
            title: 'Pro',
            price: 15,
        },
    ],
    addons:[
        {
            id: 1,
            title: 'Online service',
            price: 1,
            dis:'Access to multiplayer games'
        },
        {
            id: 2,
            title: 'Larger storage',
            price: 2,
            dis:'Extra 1TB of cloud save'
        },
        {
            id: 3,
            title: 'Customizable Profile',
            price: 3,
            dis:'Custom theme on your profile'
        }
    ]
}