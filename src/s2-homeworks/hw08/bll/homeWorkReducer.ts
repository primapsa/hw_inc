import {UserType} from '../HW8'
import user from "../User";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const compare = (a: UserType, b: UserType): number => {
                switch (action.payload) {
                    case 'up':
                        if (a.name === b.name) return 0;
                        return a.name > b.name ? 1 : -1

                    case 'down':
                        if (a.name === b.name) return 0;
                        return a.name > b.name ? -1 : 1
                    default:
                        if (a.name === b.name) return 0;
                        return a.name > b.name ? 1 : -1
                }
            }
            return [...state.sort(compare)]

        }
        case 'check': {

            return state.filter(e => e.age > action.payload)
        }
        default:
            return state
    }
}
