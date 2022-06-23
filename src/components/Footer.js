import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   return (
      <>
         <footer>
            <div className="container-1">
               <div className="local">
                  <div className="address">
                     <span>Address :</span>
                     <p>Sant Tukaram Nagar,
                        Pimpri, Pune -411018</p>
                  </div>
                  <div className="social_media">
                     <span>Social Media</span>
                     <div className="text2">
                        <a href="https://www.linkedin.com/in/harsh-jha-457707203/" rel="noreferrer"
                           target="_blank"> <FontAwesomeIcon icon={faLinkedin} className=' linkedInLogo' style={{ fontSize: '48px', color: 'blue' }} /> {/*<i class='fab fa-linkedin linkedInLogo' style={{fontSize:'48px',color:'blue'}}></i>*/}
                           {/* <img
                        className="linkedInLogo"
                        src="images/iconfinder_Linkedin_social_media_logo_1964405.svg"
                        alt="LinkedInLink" />*/} </a>
                        <a href="https://www.instagram.com/_mr_h_a_r_s_h_j_h_a/" rel="noreferrer"
                           target="_blank"> <FontAwesomeIcon icon={faInstagram} className=' instagramLogo' style={{ fontSize: '48px', color: 'orange' }} />
                           {/*<i class='fab fa-instagram instagramLogo' style={{fontSize:'48px',color:'orange'}}></i>*/}
                           {/* <img
                        className="instagramLogo"
                        src="images/iconfinder_Instagram_social_media_logo_1964411.svg"
                        alt="InstagramLink"/>*/}</a>
                        <a href="https://www.facebook.com/harshkumar.jha.568/" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={faFacebook} className=' facebookLogo' style={{ fontSize: '48px', color: 'blue' }} />
                           {/*<i class='fab fa-facebook-f facebookLogo' style={{fontSize:'48px',color:'blue'}}></i>*/}
                           {/* <img
                        className="facebookLogo"
                        src="images/iconfinder_Facebook_social_media_logo_1964400.svg"
                        alt="FacebookLink" />*/} </a>
                        <a href="https://twitter.com/Harshku79928569" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={faTwitter} className=' twitterLogo' style={{ fontSize: '48px', color: 'rgb(52 208 242)' }} />
                           {/*<i class='fab fa-twitter twitterLogo' style={{fontSize:'48px',color:'rgb(52 208 242)'}}></i>*/}
                           {/* <img
                        className="twitterLogo"
                        src="images/iconfinder_Twitter_social_media_logo_1964397.svg"
                        alt="TwitterLink" />*/}</a>
                        <a href="https://github.com/mr-Harsh-Kumar-Jha" rel="noreferrer"
                           target="_blank"><FontAwesomeIcon icon={faGithub} className=' githubLogo' style={{ fontSize: '48px', color: 'black' }} />
                           {/* <i class='fab fa-github-alt githubLogo' style={{fontSize:'48px',color:'black'}}></i> */}
                           {/* <img
                        className="githubLogo"
                        src="images/iconfinder_Github_social_media_logo_1964417.svg"
                        alt="GithubLink" />*/}</a>
                     </div>
                  </div>
               </div>

               <div className="personal_info">
                  <div className="info">
                     <div className="info-a">
                        <p>This is all about my Life!!</p>
                        <p> Thanks for giving ur
                           precious
                           time, and Hatsoff to ur
                           Patience
                           and Diligence for reading my
                           journey.</p>
                     </div>
                     <span className="btn-sm"><a
                        href="\">Hire
                        Me</a></span>
                     <span className="btn-sm"><a
                        href="\">Contact
                        Me</a></span>
                     <div className="subscribe">
                        <p>You can subscribe to my
                           blogs.
                           So that u would be updated
                           with technologis,
                           that is trending in Market.
                        </p>
                        <span className="btn-sm sub"><a
                           href="\">Subscribe</a></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="card-footer copyright">
               <small className="text-muted" ><span>&copy; 2022 Harsh Jha</span></small>
            </div>
         </footer>
      </>
   )
};
export default Footer;
