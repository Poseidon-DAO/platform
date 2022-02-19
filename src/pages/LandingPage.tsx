import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";
import LoopGallery from "components/LoopGallery/LoopGallery";
import "assets/demo/demo.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/css/nucleo-icons.css";

const Landing = () => {
  useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Artists & Collectors DAO <br />
                  {/* <span className="text-white">secured</span> */}
                </h1>
                <p className="text-white mb-3">
                  Poseidon is the DAO made up of best artists and collectors
                  collective. Shared governance on a massive treasury, support
                  NFTs mainstream adoption and unlock NFTs' DeFi
                </p>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <SocialIcon
                      className="social-icon"
                      target="_blank"
                      url="https://twitter.com/Poseidon_SF/"
                      bgColor="#4824fa"
                      fgColor="#FFF"
                    />
                    <SocialIcon
                      className="social-icon"
                      target="_blank"
                      url="https://discord.gg/gUsX8MpTqk"
                      bgColor="#4824fa"
                      fgColor="#FFF"
                    />
                    <SocialIcon
                      className="social-icon"
                      target="_blank"
                      url="https://instagram.com/poseidondao"
                      bgColor="#4824fa"
                      fgColor="#FFF"
                    />
                    <SocialIcon
                      className="social-icon"
                      target="_blank"
                      url="https://github.com/Poseidon-DAO"
                      bgColor="#4824fa"
                      fgColor="#FFF"
                    />
                  </div>
                </div>
              </Col>
              {/* <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png").default}
                />
              </Col> */}
            </Row>
          </div>
        </div>
        <Row style={{ marginBottom: "1rem" }}>
          <LoopGallery>
            {[
              "-x-.jpg",
              "afternoon-garage.jpg",
              "ape.png",
              "basktopus.jpg",
              "clone1.png",
              "club50.jpg",
              "contemplation.jpg",
              "core-craving.jpg",
              "queen.png",
              "the-k-pop-is-dead-nft-.jpg",
              "punk.png",
              "what-a-dream-looks-like-.jpg",
            ].map((i: string) => (
              <img
                key={i}
                alt="..."
                className="img-fluid floating img-gallery"
                src={require(`assets/img/collection/${i}`).default}
              />
            ))}
          </LoopGallery>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <LoopGallery rtl={true} autoplaySpeed={700} speed={700}>
            {[
              "clone2.png",
              "eva-0.jpg",
              "feeling-lost-.jpg",
              "future-archaeology.jpg",
              "gigachad.png",
              "grifter.png",
              "hipster-farnese.jpg",
              "res-adversae.jpg",
              "searching-for-god.jpg",
              "the-wall-part2.jpg",
              "waiting.jpg",
              "world-11235.jpg",
            ].map((i: string) => (
              <img
                key={i}
                alt="..."
                className="img-fluid floating img-gallery"
                src={require(`assets/img/collection/${i}`).default}
              />
            ))}
          </LoopGallery>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <LoopGallery>
            {[
              "in-bocca-al-lupo.jpg",
              "kingsqueen.png",
              "limbus.jpg",
              "madonna-of-the-sacred-heart.jpg",
              "metahero.png",
              "mystic-lollipop.jpg",
              "r-e-c-o-v-e-r.png",
              "summermute.jpg",
              "torus.jpg",
              "squiggle.png",
              "wasteland.jpg",
              "ypj-womens-vs-long-beards-nft.jpg",
            ].map((i: string) => (
              <img
                key={i}
                alt="..."
                className="img-fluid floating img-gallery"
                src={require(`assets/img/collection/${i}`).default}
              />
            ))}
          </LoopGallery>
        </Row>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png").default}
            />
            <Container>
              <Row className="row-grid justify-content-between">
                <Col className="mt-lg-5" md="5">
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-trophy text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">3</CardTitle>
                                <p />
                                <p className="card-category">Collections</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-spaceship text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">800+</CardTitle>
                                <p />
                                <p className="card-category">NFTs</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats upper bg-default">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-heart-2 text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">50+</CardTitle>
                                <p />
                                <p className="card-category">Artists</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="6" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-coins text-success" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">$XM+</CardTitle>
                                <p />
                                <p className="card-category">Value</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h1>
                      Large <br />
                      Treasury
                    </h1>
                    <p>
                      The DAO is built on top of a massive treasury made up of
                      historical NFTs, 1-of-1 and collectibles.
                    </p>
                    <br />
                    <p>
                      Poseidon valued art and artists investing in the long term
                      vision of digital art.
                    </p>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="https://opensea.io/PoseidonNftFund"
                      target="_blank"
                      rel="noreferrer"
                    >
                      OpenSea Collection
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="https://superrare.com/poseidonnftfund"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SuperRare Collection
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                    <br />
                    <a
                      className="font-weight-bold text-info mt-5"
                      href="https://foundation.app/@Poseidonnftfund"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Foundation Collection
                      <i className="tim-icons icon-minimal-right text-info" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        {/* <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png").default}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png").default}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Your best benefit</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Low Commission</h4>
                      <hr className="line-primary" />
                      <p>
                        Divide details about your work into parts. Write a few
                        lines about each one. A paragraph describing a feature
                        will.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">High Incomes</h4>
                      <hr className="line-warning" />
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing feature will be a feature.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Verified People</h4>
                      <hr className="line-success" />
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing be enough.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/collection.jpeg").default}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">850+</CardTitle>
                        <p className="card-category text-white">NFTs</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">50+</CardTitle>
                        <p className="card-category text-white">Artists</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Awesome features</h3>
                  <p>
                    The design system comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted components</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Amazing page examples</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Total Investments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </section> */}
        <Footer />
      </div>
    </>
  );
};

export default Landing;
