export default function Header({ menus }) {
    return (
        <>
            <header className="header-wrapper header-transparent with-topbar">
                <div className="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-2">
                                <a href="index-2.html" className="logo"></a>
                            </div>
                            <div className="col-sm-12 col-md-10">
                                <nav className="navbar-right">
                                    <ul className="menu">
                                        {[...Object.entries(menus)]
                                            .sort((a, b) => a[1].sort - b[1].sort)
                                            .map((menu) => (
                                                <li key={menu[0]}>
                                                    <a href="#">{menu[1].menu_name}</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog_list_small.html">List Small</a></li>
                                                        <li><a href="blog_list_large.html">List Large</a></li>
                                                        <li><a href="blog_grid.html">Grid</a></li>
                                                        <li><a href="blog_grid_sidebar.html">Grid Sidebar</a></li>
                                                        <li><a href="blog_masonry.html">Masonry</a></li>
                                                        <li><a href="blog_masonry_sidebar.html">Masonry Sidebar</a></li>
                                                        <li><a href="blog_post.html">Post</a></li>
                                                        <li><a href="blog_post_sidebar.html">Post Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}