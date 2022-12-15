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

function userLogin() {
    const pass = 'abcd12345'

    getPasswordPromise()
        .then((password) => {
            if (pass == password) {
                console.log('anda login')
            } else {
                console.log('password salah')
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = { userLogin }
