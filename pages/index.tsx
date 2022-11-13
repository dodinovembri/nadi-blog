import Head from 'next/head'
import Script from 'next/script'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Search from '../components/Search'
import Footer from '../components/Footer'

export default function Home({ data_page_information, data_page_container }) {
  return (
    <>
      <Head>
        <title>{data_page_information.nadi_get_blog_page_information.html_title}</title>
        <meta name="author" content="dodinovembri" />
        <meta name="description" content="Blog." />

        {/* css files */}
        <style>
          @import url({`https://fonts.googleapis.com/css?family=Source+Sans+Pro:100,300,400,600,700,900,400italic|Montserrat:400,700`});
          @import url({`assets/css/bootstrap.min.css`});
          @import url({`assets/css/font-awesome.min.css`});
          {/* @import url({`assets/css/void.css`}); */}
          @import url({`assets/css/style.css`});
        </style>
      </Head>
      <div id="wrapper">
        <div className="h-wrapper">
          <TopBar page_links={data_page_container.nadi_get_blog_page_container.page_links} page_social_medias={data_page_container.nadi_get_blog_page_container.page_social_medias}/>
          <Header />
        </div>
        <div className="push-top"></div>
        <Banner />
        <Search />
        {/* Start blog content */}
        <section className="section-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-9 col-md-push-3 col-sm-push-4 space-left push-off">
                <div className="row blog-list">
                  <div className="col-sm-12">
                    <div className="row blog-item">
                      <div className="col-sm-12 col-md-5 blog-image col-p0">
                        <img src="assets/images/demo/p12.jpg" alt="blog post" />
                      </div>
                      <div className="col-sm-12 col-md-7 blog-caption">
                        <h3 className="post-title">Above and beyond</h3>
                        <div className="sub-post-title">
                          <span>by <a href="#">John Doe</a></span> <span className="separator"> / </span> <span>15 March, 2015</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ipsum, optio, impedit, adipisci quis sare recusandae nostrum laboriosam mollitia dolorem ah corporis dolore!</p>
                        <div className="clearfix">
                          <div className="pull-left"><a href="blog_post_sidebar.html" className="read-more">read more</a></div>
                          <div className="pull-right"><i className="fa fa-camera post-format"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row blog-item">
                      <div className="col-sm-12 col-md-5 blog-image col-p0">
                        <iframe className="rs-video video-4by3" src="https://www.youtube.com/embed/YE7VzlLtp-4"></iframe>
                      </div>
                      <div className="col-sm-12 col-md-7 blog-caption">
                        <h3 className="post-title">Imagine Dragons</h3>
                        <div className="sub-post-title">
                          <span>by <a href="#">John Doe</a></span> <span className="separator"> / </span> <span>15 March, 2015</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ipsum, optio, impedit, adipisci quis sare recusandae nostrum laboriosam mollitia dolorem ah corporis dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos suscipit autem.</p>
                        <div className="clearfix">
                          <div className="pull-left"><a href="blog_post_sidebar.html" className="read-more">read more</a></div>
                          <div className="pull-right"><i className="fa fa-vimeo-square post-format"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row blog-item">
                      <div className="col-sm-12 col-md-5 blog-image col-p0">
                        <img src="assets/images/demo/p11.jpg" alt="blog post" />
                      </div>
                      <div className="col-sm-12 col-md-7 blog-caption">
                        <h3 className="post-title">Upside down</h3>
                        <div className="sub-post-title">
                          <span>by <a href="#">John Doe</a></span> <span className="separator"> / </span> <span>15 March, 2015</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ipsum, optio, impedit, adipisci quis sare recusandae nostrum laboriosam mollitia dolorem ah corporis dolore!</p>
                        <div className="clearfix">
                          <div className="pull-left"><a href="blog_post_sidebar.html" className="read-more">read more</a></div>
                          <div className="pull-right"><i className="fa fa-camera post-format"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row blog-item">
                      <div className="col-sm-12 col-md-5 blog-image col-p0">
                        <div className="owl-carousel owl-portfolio">
                          <div className="owl-el"><img src="assets/images/demo/p01.jpg" alt="blog image" /></div>
                          <div className="owl-el"><img src="assets/images/demo/p02.jpg" alt="blog image" /></div>
                          <div className="owl-el"><img src="assets/images/demo/p03.jpg" alt="blog image" /></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7 blog-caption">
                        <h3 className="post-title">Up in the air</h3>
                        <div className="sub-post-title">
                          <span>by <a href="#">John Doe</a></span> <span className="separator"> / </span> <span>15 March, 2015</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ipsum, optio, impedit, adipisci quis sare recusandae nostrum laboriosam mollitia dolorem ah corporis dolore!</p>
                        <div className="clearfix">
                          <div className="pull-left"><a href="blog_post_sidebar.html" className="read-more">read more</a></div>
                          <div className="pull-right"><i className="fa fa-sliders post-format"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row blog-item">
                      <div className="col-sm-12 col-md-5 blog-image col-p0">
                        <iframe height="200" src="#"></iframe>
                      </div>
                      <div className="col-sm-12 col-md-7 blog-caption">
                        <h3 className="post-title">Nearby star</h3>
                        <div className="sub-post-title">
                          <span>by <a href="#">John Doe</a></span> <span className="separator"> / </span> <span>15 March, 2015</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ipsum, optio, impedit, adipisci quis sare recusandae nostrum laboriosam!</p>
                        <div className="clearfix">
                          <div className="pull-left"><a href="blog_post_sidebar.html" className="read-more">read more</a></div>
                          <div className="pull-right"><i className="fa fa-soundcloud post-format"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row blog-item">
                      <div className="col-sm-12 col-md-12 blog-caption">
                        <h3 className="post-title">As above so below</h3>
                        <div className="sub-post-title">
                          <span>by <a href="#">John Doe</a></span> <span className="separator"> / </span> <span>15 March, 2015</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ipsum, optio, impedit, adipisci quis sare recusandae nostrum laboriosam mollitia dolorem ah corporis dolore! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quaerat voluptates, libero placeat blanditiis ut eius praesentium cum deserunt autem!</p>
                        <div className="clearfix">
                          <div className="pull-left"><a href="blog_post_sidebar.html" className="read-more">read more</a></div>
                          <div className="pull-right"><i className="fa fa-copy post-format"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row blog-item">
                      <div className="col-sm-12 col-md-5 blog-image col-p0">
                        <img src="assets/images/demo/p05.jpg" alt="blog post" />
                      </div>
                      <div className="col-sm-12 col-md-7 blog-caption">
                        <h3 className="post-title">If you say so</h3>
                        <div className="sub-post-title">
                          <span>by <a href="#">John Doe</a></span> <span className="separator"> / </span> <span>15 March, 2015</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, ipsum, optio, impedit, adipisci quis sare recusandae nostrum laboriosam mollitia dolorem ah corporis dolore!</p>
                        <div className="clearfix">
                          <div className="pull-left"><a href="blog_post_sidebar.html" className="read-more">read more</a></div>
                          <div className="pull-right"><i className="fa fa-camera post-format"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="mb20"></div>
                    <ul className="pagination pagination-2 dark">
                      <li className="disabled"><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3 col-md-pull-9 col-sm-pull-8 pull-off">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title br-bottom">Above and beyond</h3>
                    <p>Lorem ipsum dolor sit amet, consect adipisicing elit. Impedit, recusandae corrupti voluptas atque voluptatibust!</p>
                  </div>
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title br-bottom">Get social</h3>
                    <ul className="sidebar-socials">
                      <li><a href="#"><i className="fa fa-twitter"></i> Follow us</a> <span>455 followers</span></li>
                      <li><a href="#"><i className="fa fa-facebook"></i> Like us</a> <span>505 likes</span></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i> Circle us</a> <span>355 friends</span></li>
                      <li><a href="#"><i className="fa fa-envelope"></i> Subscribe</a> <span>250 subscribers</span></li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title br-bottom">Latest Tweets</h3>
                    <div className="sidebar-tweet clearfix mb0">
                      <i className="fa fa-twitter"></i>
                      <p className="tweet-content"><a href="#" className="tweet-user">@shiftThemes</a> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> <small>22 hours ago</small></p>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <ul className="nav nav-tabs">
                      <li className="active"><a href="#tab1" data-toggle="tab">Popular Posts</a></li>
                      <li><a href="#tab2" data-toggle="tab">Latest Posts</a></li>
                    </ul>
                    <div className="tab-content clearfix">
                      <div className="tab-pane fade in active" id="tab1">
                        <ul className="sidebar-posts">
                          <li className="sidebar-post">
                            <div className="image-post">
                              <img src="assets/images/demo/p03.jpg" alt="blog post" />
                              <div className="image-post-date">25 <br /> jan</div>
                            </div>
                            <div className="info-post">
                              <h5><a href="blog_single_left.html">As above so below</a></h5>
                              <span>by John Doe</span>
                            </div>
                          </li>
                          <li className="sidebar-post">
                            <div className="image-post">
                              <img src="assets/images/demo/p04.jpg" alt="blog post" />
                              <div className="image-post-date">20 <br /> feb</div>
                            </div>
                            <div className="info-post">
                              <h5><a href="blog_single_left.html">Above and beyond</a></h5>
                              <span>by Mark Doe</span>
                            </div>
                          </li>
                          <li className="sidebar-post">
                            <div className="image-post">
                              <img src="assets/images/demo/p05.jpg" alt="blog post" />
                              <div className="image-post-date">27 <br /> feb</div>
                            </div>
                            <div className="info-post">
                              <h5><a href="blog_single_left.html">Imagine Dragons</a></h5>
                              <span>by justin Doe</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="tab2">
                        <ul className="sidebar-posts">
                          <li className="sidebar-post">
                            <div className="image-post">
                              <img src="assets/images/demo/p01.jpg" alt="blog post" />
                              <div className="image-post-date">25 <br /> jan</div>
                            </div>
                            <div className="info-post">
                              <h5><a href="blog_single_left.html">So what</a></h5>
                              <span>by John Doe</span>
                            </div>
                          </li>
                          <li className="sidebar-post">
                            <div className="image-post">
                              <img src="assets/images/demo/p02.jpg" alt="blog post" />
                              <div className="image-post-date">20 <br /> feb</div>
                            </div>
                            <div className="info-post">
                              <h5><a href="blog_single_left.html">Up in the air</a></h5>
                              <span>by Mark Doe</span>
                            </div>
                          </li>
                          <li className="sidebar-post">
                            <div className="image-post">
                              <img src="assets/images/demo/p06.jpg" alt="blog post" />
                              <div className="image-post-date">27 <br /> feb</div>
                            </div>
                            <div className="info-post">
                              <h5><a href="blog_single_left.html">Up and Down</a></h5>
                              <span>by justin Doe</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title br-bottom">Categories</h3>
                    <ul className="sidebar-categories">
                      <li><a href="#"><i className="fa fa-chevron-right"></i> Web Design</a></li>
                      <li><a href="#"><i className="fa fa-chevron-right"></i> Software Engineering</a></li>
                      <li><a href="#"><i className="fa fa-chevron-right"></i> Web Graphic</a></li>
                      <li><a href="#"><i className="fa fa-chevron-right"></i> Web Programming</a></li>
                      <li><a href="#"><i className="fa fa-chevron-right"></i> Software Design</a></li>
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title br-bottom">Tags</h3>
                    <div className="tags">
                      <a href="#" title="10 Topics" className="big">Wordpress</a>
                      <a href="#" title="10 Topics">Concrete5</a>
                      <a href="#" title="10 Topics" className="big">Drupal</a>
                      <a href="#" title="10 Topics">Joomla</a>
                      <a href="#" title="10 Topics" className="big">PHP</a>
                      <a href="#" title="10 Topics">HTML5</a>
                      <a href="#" title="10 Topics">CSS3</a>
                      <a href="#" title="10 Topics" className="big">jQuery</a>
                      <a href="#" title="10 Topics">Java</a>
                      <a href="#" title="10 Topics">Ruby</a>
                      <a href="#" title="10 Topics" className="big">Javascript</a>
                    </div>
                  </div>
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title br-bottom">Flickr Photos</h3>
                    <ul id="flickr-sidebar" className="flickr-feed sidebar-flickr">
                    </ul>
                  </div>
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title br-bottom">Ads</h3>
                    <div className="row mb10">
                      <div className="col-xs-12">
                        <a href="#"><img src="https://via.placeholder.com/750x400" alt="" /></a>
                      </div>
                    </div>
                    <div className="row col-p5">
                      <div className="col-xs-6">
                        <a href="#"><img src="https://via.placeholder.com/300" alt="" /></a>
                      </div>
                      <div className="col-xs-6">
                        <a href="#"><img src="https://via.placeholder.com/300" alt="" /></a>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
        {/* End blog content */}
        <Footer />
      </div>

      {/* import script */}
      <Script src='assets/js/jquery.min.js' />
      <Script src='assets/js/bootstrap.min.js' />
      <Script src='assets/js/jflickrfeed.min.js' />
      <Script src='assets/js/script.js' />
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res_page_information = await fetch(`http://localhost:3000/page_information/63dc9c27-d0a2-4f1e-9049-a6f55e7a0882`)
  const data_page_information = await res_page_information.json()

  const res_page_container = await fetch(`http://localhost:3000/page_container/63dc9c27-d0a2-4f1e-9049-a6f55e7a0882`)
  const data_page_container = await res_page_container.json()

  // Pass data to the page via props
  return { props: { 
    data_page_information,
    data_page_container
  } }
}
