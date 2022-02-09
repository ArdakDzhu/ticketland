let defaultStore ={
    paginator: 2,
    data:[],
    sortPrice: true,
    maxPrice: 0,
    minPrice: 0,
    totalDuration: false,
}

export const mainReducer = (state = defaultStore, action) => {
    console.log('action', action)
    switch (action.type) {
        case "CHANGE_PAGINATION":
            return {...state, paginator: action.payload}
        case "CHANGE_DATA":
            return {...state, data: action.payload}
        case "PRICE_UP":
            return {...state, sortPrice: true, totalDuration: false}
        case "PRICE_DOWN":
            return {...state, sortPrice: false, totalDuration: false}
        case "SORT_DURATION":
            return {...state, totalDuration: true, sortPrice: true}
        case "MAX_PRICE":
            return {...state, maxPrice: action.payload}
        case "MIN_PRICE":
            return {...state, minPrice: action.payload}
        
        default:
            return {...state}
    }
}