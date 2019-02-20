export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //? ANCHOR make async calls here
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'emilio',
            authorLastName: 'Garro Rangel',
            authorId: 12345,
            createdAt: new Date()
        })
        .then( response => {
            const action = {
                type: 'ADD_PROJECT',
                project
            }
            dispatch(action)
        })
        .catch(error => {
            const errorAction = {
                type: 'CREATE_PROJECT_ERROR',
                error
            }
            dispatch(errorAction)
        })
    }
}
