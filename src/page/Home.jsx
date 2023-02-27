import React from "react";


function Home() {
  return (
    <div className="Fragment">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Agency Website - React</title>
    {/* <!-- External CSS Files and other Links  --> */}
    <link rel="stylesheet" href="asset/css/style.css" />
    <link rel="stylesheet" href="asset/css/responsive.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    {/* <!-- External CSS Files and Links --> */}
  </head>
  <body>
    {/* <!-- Navbar section started  --> */}
    <section class="Navbar">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img src="asset/images/MyLogo.png" alt="official logo"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link home active"
                  aria-current="page"
                  href="#"
                  active
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">work</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >service
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >feature
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    {/* <!-- Navbar section end  --> */}

    {/* <!-- banner section started --> */}
    <section class="Banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="BannerContent">
              <div class="BannerContHead">
                <h3>welcome to our marketplace</h3>
              </div>
              <div class="BannerContentText">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla
                  vestibulu lacus ...
                </p>
              </div>
              <div class="BannerButton">
                <div class="BannerBtn">
                  <button><a href="#">View More</a></button>
                </div>
                <div class="BannerBtn">
                  <button><a href="#">video tour</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- banner section end --> */}

    {/* <!-- modest part started  --> */}
    <div class="ModestPart">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="ModestHead">
              <div class="ModestHeadDiv"></div>
              <h2>We are Modest.</h2>
            </div>
            <div class="ModestContent">
              <p class="peraOne">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla
                vestibulu lacus sed molestie gravida. Crferm entum quismagna
                congue, vel sodales arcu vestibulum. Nunc lobortis dui magna,
                quis lacusullamcorper at.
              </p>
              <p class="peraTwo">
                Phasellus sollicitudin ante eros ornare, sit amet luctus lorem
                semper. Suspendisse posuere, quamdictum consectetur, augue metus
                pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum
                ante, ut bibendum odio convallis eget. vel sodales arcu
                vestibulum
              </p>
            </div>
            <div class="socialIcons">
              <a href="#"><i class="fa-brands fa-facebook"></i></a>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
              <a href="#"><i class="fa-solid fa-basketball"></i></a>
              <a href="#"><i class="fa-brands fa-behance"></i></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div id="modestRight">
              <div class="row">
                <div class="col-lg-12">
                  <div class="modestRightContent">
                    <div class="modestContentItem">
                      <div class="modestRight">
                        <div class="modestRiponCon">
                          <p>01</p>
                        </div>
                      </div>
                      <div class="modestText">
                        <h4>Dedication to the customers</h4>
                        <p>
                          Integer vel lacus non dui ullamcorper venenatis.
                          Aliquam vitae tristique nisi, vitae ullamcorper risus.
                          Nam porttitor blandit ultricies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row s2ndrow">
                <div class="col-lg-12">
                  <div class="modestRightContent">
                    <div class="modestContentItem">
                      <div class="modestRight">
                        <div class="modestRiponCon">
                          <p>02</p>
                        </div>
                      </div>
                      <div class="modestText">
                        <h4>working closely with our clients</h4>
                        <p>
                          Sed blandit nisi urna, sed pellentesque enim
                          consectetur vitae. Suspendisse ut vehicula nibh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row s2ndrow">
                <div class="col-lg-12">
                  <div class="modestRightContent">
                    <div class="modestContentItem">
                      <div class="modestRight">
                        <div class="modestRiponCon">
                          <p>03</p>
                        </div>
                      </div>
                      <div class="modestText">
                        <h4>increase happiness</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nulla eleifend laoreet euismod.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- modest part end --> */}

    {/* <!-- team part started  --> */}
    <section class="team">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="ModestHead">
              <div class="ModestHeadDiv"></div>
              <h2>meet the team.</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 teamMain">
            <div class="teamItem">
              <div class="teamMemPhoto">
                <div class="imgoverlay"></div>
                <img src="asset/images/TeamMember1.png" alt="team member photo" />
                <div class="socialHover">
                  <div class="iconsHover">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div class="teamMemberInfo">
                <div class="memName">
                  <h5>Gloria Bromley</h5>
                  <p>CEO and Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 teamMain">
            <div class="teamItem">
              <div class="teamMemPhoto">
                <div class="imgoverlay"></div>
                <img src="asset/images/TeamMember2.png" alt="team member photo" />
                <div class="socialHover">
                  <div class="iconsHover">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div class="teamMemberInfo">
                <div class="memName">
                  <h5>Paul Torres</h5>
                  <p>Head of Development</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 teamMain">
            <div class="teamItem">
              <div class="teamMemPhoto">
                <div class="imgoverlay"></div>
                <img src="asset/images/TeamMember3.png" alt="team member photo" />
                <div class="socialHover">
                  <div class="iconsHover">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div class="teamMemberInfo">
                <div class="memName">
                  <h5>Judith Gillette</h5>
                  <p>Graphic Desinger</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 teamMain">
            <div class="teamItem">
              <div class="teamMemPhoto">
                <div class="imgoverlay"></div>
                <img src="asset/images/TeamMember4.png" alt="team member photo" />
                <div class="socialHover">
                  <div class="iconsHover">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div class="teamMemberInfo">
                <div class="memName">
                  <h5>Delores Reed</h5>
                  <p>Client Service Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- team part end --> */}

    {/* <!-- lovely work part started --> */}
    <section class="workPart">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="workHead">
              <div class="workHs"></div>
              <div class="wHead">
                <h3>lovely work.</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="workItem">
              <div class="workItemImg">
                <img src="asset/images/work1.png" class="w-100" alt="work photo" />
                <div class="ItemImgOverLay">
                  <div class="OverlayIcon">
                    <i class="fa-sharp fa-solid fa-plus"></i>
                  </div>
                  <div class="overlayText">
                    <p>partnership guidlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="workItem">
              <div class="workItemImg">
                <img src="asset/images/work2.png" class="w-100" alt="work photo" />
                <div class="ItemImgOverLay">
                  <div class="OverlayIcon">
                    <i class="fa-sharp fa-solid fa-plus"></i>
                  </div>
                  <div class="overlayText">
                    <p>partnership guidlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="workItem">
              <div class="workItemImg">
                <img src="asset/images/work3.png" class="w-100" alt="work photo" />
                <div class="ItemImgOverLay">
                  <div class="OverlayIcon">
                    <i class="fa-sharp fa-solid fa-plus"></i>
                  </div>
                  <div class="overlayText">
                    <p>partnership guidlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="workItem">
              <div class="workItemImg">
                <img src="asset/images/work4.png" class="w-100" alt="work photo" />
                <div class="ItemImgOverLay">
                  <div class="OverlayIcon">
                    <i class="fa-sharp fa-solid fa-plus"></i>
                  </div>
                  <div class="overlayText">
                    <p>partnership guidlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="workItem">
              <div class="workItemImg">
                <img src="asset/images/work5.png" class="w-100" alt="work photo" />
                <div class="ItemImgOverLay">
                  <div class="OverlayIcon">
                    <i class="fa-sharp fa-solid fa-plus"></i>
                  </div>
                  <div class="overlayText">
                    <p>partnership guidlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="workItem">
              <div class="workItemImg">
                <img src="asset/images/work6.png" class="w-100" alt="work photo" />
                <div class="ItemImgOverLay">
                  <div class="OverlayIcon">
                    <i class="fa-sharp fa-solid fa-plus"></i>
                  </div>
                  <div class="overlayText">
                    <p>partnership guidlines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="showMorebtn">
              <div class="theShowBtn">
                <button><a href="#">SHOW MORE</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- lovely work part end --> */}

    {/* <!-- What we do part started  --> */}
    <section class="wwd">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="FirstLine">
              <div class="thingLeftwwd"></div>
              <div class="whatwedoheadre">
                <h3>What we do</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="wwditem">
              <div class="wwitemimg">
                <img src="asset/images/wwditem1.png" alt="setting" />
              </div>
              <div class="wwitemheader">
                <h5>Easy theme Setup</h5>
              </div>
              <div class="wwitemcontent">
                <p>
                  Nunc mattis lorem in leo lobortis, ut venenatis justo commodo.
                  Maecenas a justo nec velit egestas fermentum.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="wwditem">
              <div class="wwitemimg">
                <img src="asset/images/wwditem2.png" alt="setting" />
              </div>
              <div class="wwitemheader">
                <h5>pixel perfect design</h5>
              </div>
              <div class="wwitemcontent">
                <p>
                  Nunc mattis lorem in leo lobortis, ut venenatis justo commodo.
                  Maecenas a justo nec velit egestas fermentum.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="wwditem">
              <div class="wwitemimg">
                <img src="asset/images/wwditem3.png" alt="setting" />
              </div>
              <div class="wwitemheader">
                <h5>responsive display</h5>
              </div>
              <div class="wwitemcontent">
                <p>
                  Nunc mattis lorem in leo lobortis, ut venenatis justo commodo.
                  Maecenas a justo nec velit egestas fermentum.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="wwditem">
              <div class="wwitemimg">
                <img src="asset/images/wwditem4.png" alt="setting" />
              </div>
              <div class="wwitemheader">
                <h5>24/7 support</h5>
              </div>
              <div class="wwitemcontent">
                <p>
                  Nunc mattis lorem in leo lobortis, ut venenatis justo commodo.
                  Maecenas a justo nec velit egestas fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- What we do part end --> */}
    {/* <!-- features part started  --> */}
    <section class="features">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="feature_headdead">
              <div class="lefthingfe"></div>
              <div class="features_head">
                <h3>FEATURES</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="featuresItem">
              <div class="fItemImage">
                <img src="asset/images/featuresitem.png" alt="feature photo" />
              </div>
              <div class="fItemHead">
                <h6>Product Design: Eames Chairs</h6>
              </div>
              <div class="fItemCont">
                <p>
                  Eames designs are certainly iconic. Everyone of us know at
                  least two or three of their famous chairs. I would even risk
                  saying that most of us dream about having a nice Eames.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="featuresItem">
              <div class="fItemImage">
                <img src="asset/images/featuresitem2.png" alt="feature photo" />
              </div>
              <div class="fItemHead">
                <h6>Elegant and Colorful Logos</h6>
              </div>
              <div class="fItemCont">
                <p>
                  I’ve always found logo design to be one of the most
                  challenging things to get right. There’s so much that a logo
                  can say about a brand without actually saying it.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="featuresItem">
              <div class="fItemImage">
                <img src="asset/images/featuresitem3.png" alt="feature photo" />
              </div>
              <div class="fItemHead">
                <h6>A Showcase of Creative</h6>
              </div>
              <div class="fItemCont">
                <p>
                  It’s always interesting to see another designer’s take on a
                  famous website, app or even physical product. Different
                  designers add their own personality and style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- features part end  --> */}

    {/* <!-- stay in touch section started --> */}
    <section class="stay">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contactInformation">
              <div class="contactHead">
                <h3>contact information</h3>
              </div>
              <p class="contactPera">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                nisi metus, tristique nec dolor non, ornare sagittis dolor.
                Nulla vestibulum lacus sed molestie gravida. Cras fermentum elit
                quis magna congue, vel sodales arcu vestibulum. Nunc lobortis
                dui magna, quis dapibus lacus
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="massageBox">
              <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- stay in touch end --> */}

    {/* <!-- copyright section started  --> */}
    <section class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="rights">
              <p>© Copyright 2014 by PSD Booster. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- copyright section end --> */}

    {/* <!-- External JS files and links  --> */}
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
    {/* <!-- External JS files and links  --> */}
  </body>
    </div>
  );
}

export default Home;
