export const createAction = (type, payload) => {
    console.log('CREATE ACTION', type, payload)
    return ({ type, payload });
}