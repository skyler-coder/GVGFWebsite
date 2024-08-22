import React from 'react'
import { Instagram } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div id='contacts'>

      <section className="pre-footer-corporate bg-overlay-darkest">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-lg-start row-30 row-md-60">
            <div className="col-sm-10 col-md-6 col-lg-10 col-xl-3">
              <p>God's Vineyard Gospel Felloship is a Church based on spreading the Gospel out to every nation.</p>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-3 col-xl-3">
              <h6>Navigation</h6>
              <ul className="list-xxs list-primary">
                <li><Link to={"/aboutus"}>What We Do In God's Vineyard</Link></li>
                <li><Link to={"/aboutus"}>Our Mission</Link></li>
                <li><Link to={"/homepage"}>Who we are</Link></li>
                <li><Link to={`/Gallery`}>Our Posts</Link></li>
              </ul>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-4 col-xl-3">
              <h6>Contacts</h6>
              <ul className="list-xs">
                <li>
                  <dl className="list-terms-minimal">
                    <dt>Address</dt>
                    <br/>
                    <p>No 7b Zaria Road Jos, Plateau State, Nigeria.</p>
                    <br/>
                    <p>No 1 igbasan Street, Opebi, Lagos, Nigeria.</p>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-minimal">
                    <dt>Phones</dt>
                    <dd>
                      <ul className="list-semicolon">
                        <li><a href="tel:#">(+234)&nbsp;8060772971; </a></li>
                        <li><a href="tel:#">(+234)&nbsp;9018181933</a></li>
                      </ul>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl className="list-terms-minimal">
                    <dt>E-mail</dt>
                    <dd><a className="link-primary" href="mailto:#">godsvineyardgospelfellowship@gmail.com</a></dd>
                  </dl>
                </li>
                
              </ul>
            </div>
            <div className="col-sm-10 col-md-6 col-lg-5 col-xl-3">
              <div className="google-map-footer">
                <div className="google-map-container" data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45." data-zoom="5" data-icon="images/gmap_marker.png" data-icon-active="images/gmap_marker_active.png" data-styles="[{&quot;featureType&quot;:&quot;landscape&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:-100},{&quot;lightness&quot;:60}]},{&quot;featureType&quot;:&quot;road.local&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:-100},{&quot;lightness&quot;:40},{&quot;visibility&quot;:&quot;on&quot;}]},{&quot;featureType&quot;:&quot;transit&quot;,&quot;stylers&quot;:[{&quot;saturation&quot;:-100},{&quot;visibility&quot;:&quot;simplified&quot;}]},{&quot;featureType&quot;:&quot;administrative.province&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;water&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;on&quot;},{&quot;lightness&quot;:30}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#ef8c25&quot;},{&quot;lightness&quot;:40}]},{&quot;featureType&quot;:&quot;road.highway&quot;,&quot;elementType&quot;:&quot;geometry.stroke&quot;,&quot;stylers&quot;:[{&quot;visibility&quot;:&quot;off&quot;}]},{&quot;featureType&quot;:&quot;poi.park&quot;,&quot;elementType&quot;:&quot;geometry.fill&quot;,&quot;stylers&quot;:[{&quot;color&quot;:&quot;#b6c54c&quot;},{&quot;lightness&quot;:40},{&quot;saturation&quot;:-40}]},{}]">
                  <div className="google-map"></div>
                  <ul className="google-map-markers">
                    <li data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45." data-description="9870 St Vincent Place, Glasgow"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-corporate bg-gray-darkest">
        <div className="container">
          <div className="footer-corporate__inner">
            <p className="rights"><span>God's Vineyard Gospel Fellowship</span><span>&nbsp;&copy;&nbsp;</span><span id="copyright-year">Ipade Enterprises</span></p>
            <ul className="list-inline-xxs">
              <li><a className="icon icon-xxs icon-gray-darker fa fa-facebook" href="https://www.facebook.com/campuswatch.ng"></a></li>
              <li><a className='icon icon-xxs icon-gray-darker ' href='https://www.instagram.com/godsvineyardgospel/'><Instagram className='w-4 h-4'/></a></li>
              <li><a className="icon icon-xxs icon-gray-darker fa fa-youtube" href="#"></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
