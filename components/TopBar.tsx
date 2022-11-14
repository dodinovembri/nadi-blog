export default function TopBar({ links, social_medias }) {
    return (
        <>
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="top-menu">
                                {[...Object.entries(links)]
                                    .sort((a, b) => a[1].sort - b[1].sort)
                                    .map((link) => (
                                        <li key={link[0]}><a href={link[1].link_url}>{link[1].link_name}</a></li>
                                    ))}
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="pull-right hidden-xs">
                                <ul className="social-icon unstyled">
                                    {[...Object.entries(social_medias)]
                                        .sort((a, b) => a[1].sort - b[1].sort)
                                        .map((social_media) => (
                                            <li key={social_media[0]}><a href={social_media[1].link_url}><i className={social_media[1].icon_name}></i></a></li>                                            
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}