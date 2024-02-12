import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Step{
    step: number 
}

const initialState:Step = {
    step: 1
}

const stepSlice = createSlice({
    name:"step",
    initialState,
    reducers:{
        nextstep: (state)=> {state.step += 1 } ,
        previousStep: (state) => {state.step -= 1},
        gotostep: (state , action: PayloadAction<number>) => {state.step = action.payload}
    }
})

export default stepSlice.reducer ;
export const {nextstep , previousStep , gotostep } = stepSlice.actions ;