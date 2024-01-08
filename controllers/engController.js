exports.getMainPage = (req, res) => {
    res.render('home', {
        page_name: 'home'
    });
};
exports.getAboutPage = (req, res) => {
    // console.log("login")
    res.render('about', {
        page_name: 'about'
    });
};
exports.getMissionVisionPage = (req, res) => {
    // console.log("login")
    res.render('mission-vision', {
        page_name: 'mission-vision'
    });
};
exports.getQualityPage = (req, res) => {
    // console.log("login")
    res.render('quality', {
        page_name: 'quality'
    });
};
exports.getCertificatesPage = (req, res) => {
    // console.log("login")
    res.render('certificates', {
        page_name: 'certificates'
    });
};
exports.getLdplPage = (req, res) => {
    // console.log("login")
    res.render('ldpl', {
        page_name: 'ldpl'
    });
};
exports.getProductsEnginePage = (req, res) => {  
    // console.log("login")
    res.render('products-engine', {
        page_name: 'products-engine',
    });
};
exports.getProductsPumpPage = (req, res) => {
    // console.log("login")
    res.render('products-pump', {
        page_name: 'products-pump',
        pumps: {
            name: 'test',
            id: 51
        }
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
