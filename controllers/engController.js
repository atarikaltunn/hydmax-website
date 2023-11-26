exports.getMainPage = (req, res) => {
    res.render('home', {
        page_name: 'home'
    });
};
exports.getContactPage = (req, res) => {
    res.render('contact', {
        page_name: 'contact'
    });
};
exports.getLoginPage = (req, res) => {
    // console.log("login")
    res.render('login', {
        page_name: 'login'
    });
};
exports.getSignupPage = (req, res) => {
    // console.log("login")
    res.render('signup', {
        page_name: 'signup'
    });
};