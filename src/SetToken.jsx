function setToken(userToken) {

    sessionStorage.setItem('token', JSON.stringify(userToken))

}

export default setToken;