export interface UserInfo {
    name: string,
    email: string,
    phoneNumber: Number | null,
}
export interface planDetailes {
    id: number,
    title: string,
    price: number
}

export interface AddOns {
    id: number,
    title: string,
    price: number
}

export type FormData = {
    userInfo: UserInfo,
    planDetailes: planDetailes,
    yearlyDuration: boolean,
    add_ons: AddOns[] ,
    payment:number
}