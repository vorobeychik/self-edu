function decodeAccessToken(string){
    return string.split('=')[1].split('&')[0];
}


module.exports = { decodeAccessToken }