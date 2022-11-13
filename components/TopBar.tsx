export default function TopBar({ page_links, page_social_medias }) {
    console.log(page_links);
    return (
        <>
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="top-menu">
                                {[...Object.entries(page_links)]
                                    .sort((a, b) => a[1].sort - b[1].sort)
                                    .map((page_link) => (
                                        <li key={page_link[0]}><a href={page_link[1].link_url}>{page_link[1].link_name}</a></li>
                                    ))}
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="pull-right hidden-xs">
                                <ul className="social-icon unstyled">
                                    {[...Object.entries(page_social_medias)]
                                        .sort((a, b) => a[1].sort - b[1].sort)
                                        .map((page_social_media) => (
                                            <li key={page_social_media[0]}><a href={page_social_media[1].link_url}><i className={page_social_media[1].icon_name}></i></a></li>                                            
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