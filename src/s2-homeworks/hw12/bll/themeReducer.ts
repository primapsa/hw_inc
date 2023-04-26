const initState = {
    themeId: 1,
}

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any

    switch (action.type) {
        case "SET_THEME_ID":
            return {themeId: action.id}
        default:
            return state
    }
}
export type StateType = {
    themeId: number
}
export type ActionType = changeThemeIdType
export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any
export type changeThemeIdType = ReturnType<typeof changeThemeId>