export const TEST_COUNT_INC = "TEST_COUNT_INC"

const incrementNow = (data:number) => {
    return {type: TEST_COUNT_INC, data}
}

export const atnIncrementTestCount = (data:number) => {
    return (dispatch:any, getState:any) => {
        dispatch(incrementNow(data))
    }
}
