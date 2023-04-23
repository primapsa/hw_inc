import {AppStoreType} from "./store";
export type LoadingStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false,
}

export const loadingReducer = (state: LoadingStateType = initState, action: LoadingActionType): LoadingStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
