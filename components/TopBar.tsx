export default function TopBar() {
    return (
        <>
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="top-menu">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Terms</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="pull-right hidden-xs">
                                <ul className="social-icon unstyled">
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}