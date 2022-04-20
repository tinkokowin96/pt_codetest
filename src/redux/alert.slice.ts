import { createSlice } from '@reduxjs/toolkit'

export type alertType = {
      type: string
      title?: string
      message: string
      timeout?: number
      id?: string
}

export type initialStateType = {
      openForm: boolean
      openPopup: boolean
      popupContent: any
      alertList: alertType[]
      type: string
}

const initialState: initialStateType = {
      openForm: false,
      openPopup: false,
      popupContent: null,
      alertList: [
            {
                  type: 'success',
                  title: 'Sample',
                  message: 'Sample Alert Message',
                  id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
            },
      ],
      type: '',
}

export const alertSlice = createSlice({
      name: 'alert',
      initialState,
      reducers: {
            openAlertForm: (state, action) => {
                  state.openForm = true
                  state.type = action.payload
                  return state
            },
            closeAlertForm: state => {
                  state.openForm = false
                  state.type = ''
                  return state
            },
            openPopup: (state, action) => {
                  state.openPopup = true
                  state.popupContent = action.payload
                  return state
            },
            closePopup: state => {
                  state.openPopup = false
                  state.popupContent = null
                  return state
            },
            addAlert: (state, action) => {
                  state.alertList = [...state.alertList, action.payload]
                  return state
            },
      },
})

export const { openAlertForm, closeAlertForm, addAlert, openPopup, closePopup } =
      alertSlice.actions
export default alertSlice.reducer
