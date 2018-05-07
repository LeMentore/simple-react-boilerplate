export const loginApi = async (history) => {
    return new Promise((resolve, reject) => {
        console.log(history)
        resolve()
    }).then(() => history.push('/home'))
}

export const logoutApi = async () => {
    return new Promise((resolve, reject) => {
        resolve();
    })
}