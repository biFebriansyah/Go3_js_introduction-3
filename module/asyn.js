const user = {
    username: 'ebiebi',
    email: 'ebiebi@email.com',
    password: 'abcd12345'
}

const getUsernamePromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            reject('Error terjadi')
        }

        setTimeout(() => {
            resolve(user.username)
        }, 1000)
    })
}

const getPasswordPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            reject('Error terjadi')
        }

        setTimeout(() => {
            resolve(user.password)
        }, 1000)
    })
}

async function userLogin() {
    try {
        const username = 'ebiebi'
        const pass = 'abcd12345'
        const userName = await getUsernamePromise()
        const passUser = await getPasswordPromise()

        if (username != userName) {
            console.log('username benar')
        } else if (pass != passUser) {
            console.log('password salah')
        } else {
            console.log('berhasil login')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = { userLogin }
