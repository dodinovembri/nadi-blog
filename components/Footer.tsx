export default function Footer() {
    return (
        <>
            <footer className="footer-wrapper footer-bg">
                <div className="container">
                    <div className="row col-p30">
                        <div className="col-sm-12 col-md-4">
                            <div className="footer-widget">
                                <h3 className="footer-title">Palas</h3>
                                <ul className="footer-links clearfix">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Security</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Features</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="footer-widget">
                                <h3 className="footer-title">Get social</h3>
                                <ul className="footer-social clearfix">
                                    <li><a href="#" data-toggle="tooltip" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" title="Pinterest"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" title="Dribbble"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="footer-widget">
                                <h3 className="footer-title">Tweets</h3>
                                <div className="sidebar-tweet clearfix">
                                    <i className="fa fa-twitter"></i>
                                    <p className="tweet-content">
                                        <a href="#" className="tweet-user">@shiftThemes</a>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                        <small>22 hours ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-sm-push-6 col-md-push-4 xs-box">


                            <div id="mc_embed_signup">
                                <form action="#" method="post"
                                    id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" className="footer-subscribe">
                                    <div id="mc_embed_signup_scroll">
                                        <input type="email" name="EMAIL" id="mce-EMAIL" required placeholder=" Type email and hit enter" />
                                        <div>
                                            <input type="text" name="b_111fbc1ae1a748cfb4ef9ac27_ac969aca2f" />
                                        </div>
                                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="hidden"></button>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="col-sm-6 col-md-4 col-sm-pull-6 col-md-pull-4">
                            <p className="copyright">&copy; Copyright 2015 - 2022 shiftThemes</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}