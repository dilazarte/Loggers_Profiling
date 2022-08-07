const {loggerError} = require('../utils/loggers')
const { fork } = require('child_process');

function getInicio(req, res){
        if(req.isAuthenticated()){
            res.redirect('admin')
        }else{
            res.render('main')
        }
}

function getAdmin(req, res){
    if (req.isAuthenticated()) {
        let user = req.user;
        res.render('admin', {name: user.firstName, lastName: user.lastName})
    } else {
        res.redirect('login')
    }
}

function getLogin(req, res){
    if(req.isAuthenticated()){
        res.redirect('admin')
    }else{
        res.render('login')
    }
}

function postLogin(req, res){
    if (req.isAuthenticated()) {
        res.redirect('/admin')
    } else {
        res.redirect('/login')
    }
}

function getLoginError(req, res){
    res.render('loginError')
}

function getLogout(req, res){
    if (req.isAuthenticated()) {
        let name = req.user;
        req.logout(err =>{
            if(err){ loggerError.error(`Error al cerrar sesion: ${err}`) }
        })
        res.render('logout', {name: name.firstName, lastName: name.lastName, session: true})
    } else {
        res.render('logout', {session: false})
    }
}

function getRegister(req, res){
    res.render('register')
}

function postRegister(req, res){
    if (req.isAuthenticated()) {
        res.redirect('/admin')
    } else {
        res.redirect('/login')
    }
}

function signupError(req, res){
    res.render('signupError')
}

function getRandomsNums(req, res){
    let num = parseInt(req.query.cant) || 100000000;
    const forked = fork('src/utils/randomsNum.js');

    forked.send(num);
    forked.on('message', data => {
        res.json(data)
        forked.send('exit')
    })

}

module.exports = {getInicio, getAdmin, getLogin, postLogin, getLoginError, getLogout, getRegister, postRegister, signupError, getRandomsNums}