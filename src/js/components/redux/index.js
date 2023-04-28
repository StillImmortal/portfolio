import { createStore } from "redux"

const initialState = {
    headerType: "",
    isMenuOpenImage: true
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "UP":
            return {
                ...initialState,
                headerType: ""
            }
        case "DOWN":
            return {
                ...initialState,
                headerType: "hide"
            }
        case "OPEN":
            return {
                ...initialState,
                isMenuOpenImage: false
            }
        case "CLOSE":
            return {
                 ...initialState,
                isMenuOpenImage: true
            }            
        default:
            return initialState
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store