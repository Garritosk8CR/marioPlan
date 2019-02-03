export const createProject = (project) => {
    return (dispatch, getState) => {
        //? ANCHOR make async calls here 
        const action = {
            type: 'ADD_PROJECT',
            project
        }
        dispatch(action)
    }
}