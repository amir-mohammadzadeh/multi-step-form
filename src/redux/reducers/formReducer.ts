import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddOns, FormData, UserInfo, planDetailes } from "../../Interfaces/Interfaces";

const initialState: FormData = {
    userInfo: {
        name: '',
        email: '',
        phoneNumber: null,
    },
    planDetailes: {
        id: 0,
        title: '',
        price: 0,
    },
    yearlyDuration: false,
    add_ons: [],
    payment: 0
}

const formSlice = createSlice({
    name: "Form",
    initialState,
    reducers: {
        set_userInfo: (state, action: PayloadAction<UserInfo>) => {
            return {
                ...state,
                userInfo: { ...action.payload }
            }
        },
        setUserPlan: (state, action: PayloadAction<planDetailes>) => {
            return {
                ...state,
                planDetailes: action.payload
            }
        },
        setYearlyPeriod: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                yearlyDuration: action.payload
            }
        },
        setAddOns: (state, action: PayloadAction<AddOns[]>) => {
            return {
                ...state,
                add_ons: [...action.payload]
            }
        },
        setPayment: (state) => { // Calculate payment  |   Payment calculation
            let sum = state.yearlyDuration ? state.planDetailes.price * 10 : state.planDetailes.price;
            sum += calculate_addons(state.add_ons, state.yearlyDuration);
            return {
                ...state,
                payment: sum
            }

        }
    }
})

function calculate_addons(list: AddOns[], yr: boolean) {
    let sum: number = 0
    list.map(a => {
        yr ? sum += (a.price * 10) : sum += a.price
    })
    return sum;
}

export default formSlice.reducer;
export const { set_userInfo, setUserPlan, setYearlyPeriod, setAddOns, setPayment } = formSlice.actions