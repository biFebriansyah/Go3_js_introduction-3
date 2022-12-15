const user = {
    username: 'ebiebi',
    email: 'ebiebi@email.com',
    password: 'abcd12345'
}

const getUsername = (cbfn) => {
    setTimeout(() => {
        cbfn(user.username)
    }, 2000)
}

const getPassword = (cbfn) => {
    setTimeout(() => {
        cbfn(user.password)
    }, 2000)
}

function userLogin() {
    const username = 'ebiebi'
    const pass = 'abcd12345'

    getUsername((userName) => {
        getPassword((passUser) => {
            if (username != userName) {
                console.log('username benar')
            } else if (pass != passUser) {
                console.log('password salah')
            } else {
                console.log('berhasil login')
            }
        })
    })
}

module.exports = { userLogin }
