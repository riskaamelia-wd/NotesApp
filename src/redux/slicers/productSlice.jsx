import { createSlice } from "@reduxjs/toolkit"

const notes = [{
    judul:'halo',
    catatan:'tes'
}]

export const notesSlice = createSlice({
    name:'note',
    initialState:{
        notes:notes
    },
    reducers:{
        addNotes:(state, action) => {
            state.notes = [...state.notes, action.payload]
        },
        updateNotes:(state, action) => {
            state.notes = action.payload
        },
        deleteNotes: (state, action)=> {
            state.notes = state.notes.filter((item)=>item.notesId !== action.payload)
        }
    }
})

export const {addNotes, updateNotes, deleteNotes} = notesSlice.actions
export default notesSlice.reducer