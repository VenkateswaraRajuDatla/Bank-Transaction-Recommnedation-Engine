import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Signup } from '../../actions';


class Footer extends Component {
  renderField(field) {
    const className = `form-control input-login ${field.meta.touched && field.meta.error ? 'border-red' : ''}`;
    return (
      <div className="form-group form-group-custom">
        <input
          className={className}
          type={field.type}
          {...field.input}
          placeholder={field.label}
        />
        <div className="error-message">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.Signup(values, () => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="pinky-template">


        <footer className="Footer">


          <div className="Footer-section Footer-section--bordered">
            <div className="Container">
              <div className="Grid Grid--verticalCenter">
                <div className="Grid-col Grid-col--6 Grid-col--tablet-4">
                  <div className="SiteStat">
                    <div id="footerRegisteredUsersCount" className="SiteStat-value">---</div>
                    <div className="SiteStat-name">
                      <span className="SiteStat-name-text">Registered Users</span>
                    </div>
                  </div>
                </div>
                <div className="Grid-col Grid-col--6 Grid-col--tablet-4">
                  <div className="SiteStat">
                    <div id="footerTotalJobsPostedCount" className="SiteStat-value">---</div>
                    <div className="SiteStat-name">
                      <span className="SiteStat-name-text">Total Jobs Posted</span>
                      <button id="posted-listings" className="SiteStat-name-icon" data-content="Jobs Posted (Filtered) is defined as the sum of Total Posted Projects and Total Posted Contests, filtered for spam, advertising, test projects, unawardable or otherwise projects that are deemed bad and unable to be fulfilled.">
                        <span className="Icon Icon--small">
                                <svg className="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2C6.486 2 2 6.487 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.513-4.486-10-10-10zm0 16.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm1-4.375V15h-2v-3h1c1.104 0 2-.897 2-2 0-1.104-.896-2-2-2s-2 .896-2 2H8c0-2.205 1.795-4 4-4s4 1.795 4 4c0 1.86-1.277 3.43-3 3.875z" />
                          </svg>

                              </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Grid-col Grid-col--tablet-4">
                  <div className="Footer-appStoreIcons">
                    <a href="https://bnc.lt/Ed5l/VcovUszaWr" className="Footer-appStoreIcon" target="_blank" title="Download on the App Store" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToAppleStore">
                      <img className="Footer-appStoreIcon-image" src="https://www.f-cdn.com/assets/img/apple-app-store-transparent-236e0741.svg" alt="Apple App Store Badge" />
                    </a>
                    <a href="https://bnc.lt/Ed5l/VcovUszaWr" className="Footer-appStoreIcon" target="_blank" title="Get it on Google Play" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToPlayStore">
                      <img className="Footer-appStoreIcon-image" src="https://www.f-cdn.com/assets/img/google-play-store-transparent-4a34ba3a.svg" alt="Google Play Store Badge" />
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </div>


          <div className="Footer-section">
            <div className="Container">
              <div className="Grid">
                <div className="Footer-siteLinks Grid-col Grid-col--6 Grid-col--tablet-4 Grid-col--desktopSmall-2">
                  <h3 className="Footer-linksTitle">Network</h3>
                  <ul className="Footer-links">
                    <li>
                      <a className="Footer-link" href="/job/" data-uitest-target="GoToCategories" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToCategories">
                                                Browse Categories
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/jobs/" data-uitest-target="GoToProjects" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToProjects">
                                                Browse Projects
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/contest/" data-uitest-target="GoToContest" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToContest">
                                                Browse Contests
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/freelancers/" data-uitest-target="GoToFreelancers" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToFreelancers">
                                                Browse Freelancers
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/enterprise" data-uitest-target="GoToEnterprise" data-qtsb-section="footer" data-qtsb-subsection="Enterprise" data-qtsb-label="GoToEnterprise">
                                                Enterprise
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/local/" data-uitest-target="GoToFreelancerLocal" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToFreelancerLocal">
                                                Freelancer Local
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/showcase" data-uitest-target="GoToShowcase" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToShowcase">
                                                Showcase
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="https://developers.freelancer.com" data-uitest-target="GoToAPIDevelopers" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToAPIDevelopers">
                                                API for Developers
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="https://www.escrow.com/" data-uitest-target="GoToEscrow" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToEscrow">
                                                Escrow
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="https://www.warriorforum.com/" data-uitest-target="GoToWarriorForum" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToWarriorForum">
                                                Warrior Forum
                          </a>
                    </li>
                  </ul>
                </div>
                <div className="Footer-siteLinks Grid-col Grid-col--6 Grid-col--tablet-4 Grid-col--desktopSmall-2">
                  <h3 className="Footer-linksTitle">About</h3>
                  <ul className="Footer-links">
                    <li>
                      <a className="Footer-link" href="/about" data-uitest-target="GoToAboutUs" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToAboutUs">
                                                About us
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/info/how-it-works" data-uitest-target="GoToHowItWorks" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToHowItWorks">
                                                How it Works
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/about/management" data-uitest-target="GoToTeam" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToTeam">
                                                Team
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/mobile" data-uitest-target="GoToMobileApp" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToMobileApp">
                                                Mobile App
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/desktop-app/" data-uitest-target="GoToDesktopApp" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToDesktopApp">
                                                Desktop App
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/about/security" data-uitest-target="GoToSecurity" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToSecurity">
                                                Security
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/feesandcharges/" data-uitest-target="GoToFeesAndCharges" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToFeesAndCharges">
                                                Fees &amp; Charges
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/investor" data-uitest-target="GoToInvestor" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToInvestor">
                                                Investor
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/sitemap" data-uitest-target="GoToSitemap" data-qtsb-section="footer" data-qtsb-subsection="Network" data-qtsb-label="GoToSitemap">
                                                Sitemap
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/about/quotes" data-uitest-target="GoToQuotes" data-qtsb-section="footer" data-qtsb-subsection="About" data-qtsb-label="GoToQuotes">
                                                Quotes
                          </a>
                    </li>
                  </ul>
                </div>
                <div className="Footer-siteLinks Grid-col Grid-col--6 Grid-col--tablet-4 Grid-col--desktopSmall-2">
                  <h3 className="Footer-linksTitle">Press</h3>
                  <ul className="Footer-links">
                    <li>
                      <a className="Footer-link" href="/about/media" data-uitest-target="GoToInTheNews" data-qtsb-section="footer" data-qtsb-subsection="Press" data-qtsb-label="GoToInTheNews">
                                                In the News
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/about/press" data-uitest-target="GoToPressReleases" data-qtsb-section="footer" data-qtsb-subsection="Press" data-qtsb-label="GoToPressReleases">
                                                Press Releases
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/about/awards" data-uitest-target="GoToAwards" data-qtsb-section="footer" data-qtsb-subsection="Press" data-qtsb-label="GoToAwards">
                                                Awards
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/info/testimonial" data-uitest-target="GoToTestimonials" data-qtsb-section="footer" data-qtsb-subsection="Press" data-qtsb-label="GoToTestimonials">
                                                Testimonials
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/info/timeline" data-uitest-target="GoToTimeline" data-qtsb-section="footer" data-qtsb-subsection="Press" data-qtsb-label="GoToTimeline">
                                                Timeline
                          </a>
                    </li>
                  </ul>
                </div>
                <div className="Footer-siteLinks Grid-col Grid-col--6 Grid-col--tablet-4 Grid-col--desktopSmall-2">
                  <h3 className="Footer-linksTitle">Get in Touch</h3>
                  <ul className="Footer-links">
                    <li>
                      <a className="Footer-link" href="/support/categories" data-uitest-target="GoToSupportHQ" data-qtsb-section="footer" data-qtsb-subsection="GetInTouch" data-qtsb-label="GoToSupportHQ">
                                                Get Support
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/careers" data-uitest-target="GoToCareers" data-qtsb-section="footer" data-qtsb-subsection="GetInTouch" data-qtsb-label="GoToCareers">
                                                Careers
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/community" data-uitest-target="GoToCommunity" data-qtsb-section="footer" data-qtsb-subsection="GetInTouch" data-qtsb-label="GoToCommunity">
                                                Community
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/affiliates/" data-uitest-target="GoToAffiliateProgram" data-qtsb-section="footer" data-qtsb-subsection="GetInTouch" data-qtsb-label="GoToAffiliateProgram">
                                                Affiliate Program
                          </a>
                    </li>
                    <li>
                      <a className="Footer-link" href="/merchandise/" data-uitest-target="GoToMerchandise" data-qtsb-section="footer" data-qtsb-subsection="GetInTouch" data-qtsb-label="GoToMerchandise">
                                                Merchandise
                          </a>
                    </li>

                    <li>
                      <a className="Footer-link" href="/translation/signup/" data-uitest-target="GoToTranslatorSignup" data-qtsb-section="footer" data-qtsb-subsection="GetInTouch" data-qtsb-label="GoToTranslatorSignup" data-qtsb-name="en">
                                                Help Translate
                          </a>
                    </li>

                    <li>
                      <a className="Footer-link" href="/support?show_chat_modal=1" data-uitest-target="GoToContactUs" data-qtsb-section="footer" data-qtsb-subsection="GetInTouch" data-qtsb-label="GoToContactUs">
                                                Contact Us
                          </a>
                    </li>
                  </ul>
                </div>
                <div className="Footer-siteLinks Grid-col Grid-col--tablet-8 Grid-col--desktopSmall-4">
                  <h3 className="Footer-linksTitle">Freelancer</h3>
                  <ul className="Footer-links">
                    <li>
                      <a rel="nofollow" className="Footer-link" href="/about/privacy" data-uitest-target="GoToPrivacyPolicy" data-qtsb-section="footer" data-qtsb-subsection="CorporateLinks" data-qtsb-label="GoToPrivacyPolicy">
                                                Privacy Policy
                          </a>
                    </li>
                    <li>
                      <a rel="nofollow" className="Footer-link" href="/about/terms" data-uitest-target="GoToTermsAndConditions" data-qtsb-section="footer" data-qtsb-subsection="CorporateLinks" data-qtsb-label="GoToTermsAndConditions">
                                                Terms and Conditions
                          </a>
                    </li>
                    <li>
                      <a rel="nofollow" className="Footer-link" href="/dmca/" data-uitest-target="GoToCopyrightInfringementPolicy" data-qtsb-section="footer" data-qtsb-subsection="CorporateLinks" data-qtsb-label="GoToCopyrightInfringementPolicy">
                                                Copyright Infringement Policy
                          </a>
                    </li>
                    <li>
                      <a rel="nofollow" className="Footer-link" href="/info/codeofconduct" data-uitest-target="GoToCodeOfConduct" data-qtsb-section="footer" data-qtsb-subsection="CorporateLinks" data-qtsb-label="GoToCodeOfConduct">
                                                Code of Conduct
                          </a>
                    </li>
                  </ul>
                  <p className="Footer-copyright">Freelancer ® is a registered Trademark of Freelancer Technology Pty Limited (ACN 142 189 759)</p>
                  <p className="Footer-copyright">Copyright © 2018 Freelancer Technology Pty Limited (ACN 142 189 759)</p>
                </div>
              </div>
            </div>

          </div>

          <div className="Footer-section">
            <div className="Container">
              <div className="Grid Grid--verticalCenter">
                <div className="Grid-col Grid-col--tablet-7 Grid-col--desktopSmall-8 Footer-locale">

                  <div className="Footer-localeSelector">
                    <a id="locale-selector" className="Footer-localeSelector-btn btn btn-plain-alt" href="/choose-your-country/" data-robots="LocaleSelector" data-qtsb-section="footer" data-qtsb-subsection="LanguageSelector" data-qtsb-label="GoToLanguageSelector">
                      <span className="Footer-localeSelector-icon Button-icon Icon Icon--light"><svg className="Icon-image" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                      </svg>
                      </span>
                                            US (International) / English
                    </a>


                  </div>
                </div>
                <div className="Grid-col Grid-col--12 Footer-country">
                  <ul className="Footer-links">
                    <li className="Footer-country-link" data-country-locale-selector="US (International)"><a className="Footer-link" href="https://www.freelancer.com/">US (International)</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Australia"><a className="Footer-link" href="https://www.freelancer.com.au/">Australia</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="United Kingdom"><a className="Footer-link" href="https://www.freelancer.co.uk/">United Kingdom</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Spain"><a className="Footer-link" href="https://www.freelancer.es/">Spain</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Japan"><a className="Footer-link" href="https://www.freelancer.jp/">Japan</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="India"><a className="Footer-link" href="https://www.freelancer.in/">India</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Germany"><a className="Footer-link" href="https://www.freelancer.de/">Germany</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Brazil"><a className="Footer-link" href="https://www.br.freelancer.com/">Brazil</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="France"><a className="Footer-link" href="https://www.fr.freelancer.com/">France</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Canada"><a className="Footer-link" href="https://www.freelancer.ca/">Canada</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="P.R. China"><a className="Footer-link" href="https://www.freelancer.cn/">China</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Hong Kong"><a className="Footer-link" href="https://www.freelancer.hk/">Hong Kong</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Indonesia"><a className="Footer-link" href="https://www.freelancer.co.id/">Indonesia</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Philippines"><a className="Footer-link" href="https://www.freelancer.ph/">Philippines</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Pakistan"><a className="Footer-link" href="https://www.freelancer.pk/">Pakistan</a></li>
                    <li className="Footer-country-link" data-country-locale-selector="Mexico"><a className="Footer-link" href="https://www.freelancer.mx/">Mexico</a></li>
                  </ul>


                </div>
                <div className="Grid-col Grid-col--tablet-5 Grid-col--desktopSmall-4 Footer-social">
                  <a className="Footer-socialMediaIcon Icon Icon--light" rel="nofollow" href="https://www.facebook.com/fansoffreelancer" target="_blank" title="Freelancer on Facebook" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToFacebook">
                    <svg className="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M16.41 8.65h-3v-2a.8.8 0 0 1 .84-.91h2.12V2.51h-2.93a3.7 3.7 0 0 0-4 4v2.14H7.59V12h1.87v9.5h3.95V12h2.66l.34-3.35z" />
                    </svg>

                  </a>
                  <a className="Footer-socialMediaIcon Icon Icon--light" rel="nofollow" href="https://www.twitter.com/freelancer" target="_blank" title="Freelancer on Twitter" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToTwitter">
                    <svg className="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.192 21c-2.28 0-4.404-.668-6.192-1.815 2.144.252 4.282-.342 5.98-1.672-1.768-.034-3.26-1.202-3.772-2.806.633.12 1.256.085 1.823-.07-1.942-.39-3.282-2.14-3.24-4.01.545.302 1.17.484 1.83.505C2.822 9.93 2.313 7.555 3.37 5.738c1.992 2.444 4.97 4.053 8.326 4.22C11.106 7.434 13.024 5 15.63 5c1.163 0 2.212.49 2.95 1.276.92-.18 1.785-.517 2.565-.98-.3.944-.942 1.736-1.775 2.235.817-.097 1.596-.314 2.32-.635-.542.807-1.228 1.52-2.016 2.088C19.93 14.665 15.694 21 8.192 21z" /></svg>

                  </a>
                  <a className="Footer-socialMediaIcon Icon Icon--light" rel="nofollow" href="https://plus.google.com/+Freelancer" target="_blank" title="Freelancer on Google Plus" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToGooglePlus">
                    <svg className="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12.5h-3v3h-2v-3h-3v-2h3v-3h2v3h3M7 18.5c-3.87 0-7-3.13-7-7s3.13-7 7-7c1.89 0 3.47.69 4.69 1.83l-1.9 1.83C9.27 7.66 8.36 7.08 7 7.08c-2.39 0-4.34 1.98-4.34 4.42S4.61 15.92 7 15.92c2.77 0 3.81-1.99 3.97-3.02H7v-2.4h6.61c.06.35.11.702.11 1.16 0 4-2.68 6.84-6.72 6.84z" /></svg>

                  </a>
                  <a className="Footer-socialMediaIcon Icon Icon--light" rel="nofollow" href="https://www.youtube.com/freelancerchannel" target="_blank" title="Freelancer on Youtube" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToYoutube">
                    <svg className="Icon-image" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.983 14.66c-.303 0-.562.194-.753.426v-1.988h-.855v6.173h.855v-.348c.236.294.494.407.804.407.564 0 .774-.44.774-1.002v-2.526c0-.618-.205-1.142-.825-1.142zm-.047 3.545c0 .145-.024.25-.073.314-.094.12-.295.115-.434.046l-.2-.16v-2.84l.174-.137c.148-.076.34-.062.442.073.06.08.09.197.09.35v2.352zM11.084 9.25V7.024c0-.263.12-.456.37-.456.274 0 .39.187.39.455V9.25c0 .26-.132.452-.37.452-.248 0-.39-.2-.39-.453zm-1.94 4.745h-.988v5.277h-.954v-5.277h-.987v-.897h2.928v.897zm1.557.722h.848v4.554H10.7v-.5c-.154.183-.317.325-.486.422-.457.26-1.083.256-1.083-.668v-3.807h.847v3.49c0 .185.045.307.226.307.165 0 .395-.212.498-.34v-3.457zM13.507 5.7h.89v3.666c0 .193.045.322.237.322.173 0 .414-.222.523-.358V5.7h.89v4.783h-.89v-.53c-.386.46-.76.598-1.028.598-.477 0-.62-.38-.62-.852V5.7h-.002zm-2.034-.04c.72 0 1.278.537 1.278 1.286V9.29c0 .803-.563 1.28-1.278 1.28-.862 0-1.303-.437-1.303-1.28V6.946c0-.768.518-1.285 1.302-1.285zM7.865 4l.69 2.59L9.198 4h1.018L9.05 7.853v2.63H8.046v-2.63L6.857 4h1.008zm8.918 16.706c-1.822.123-7.746.123-9.566 0C5.245 20.57 5.015 19.376 5 16.25c.015-3.133.247-4.322 2.217-4.458 1.82-.124 7.744-.124 9.566 0 1.972.135 2.202 1.33 2.217 4.457-.015 3.13-.247 4.32-2.217 4.456zm-.05-6.103c-.764 0-1.286.548-1.286 1.338v2.045c0 .82.414 1.41 1.223 1.41.892 0 1.268-.532 1.268-1.41v-.342h-.87v.316c0 .396-.022.636-.38.636-.34 0-.37-.296-.37-.637v-.86h1.62v-1.16c0-.82-.39-1.337-1.204-1.337zm.334 1.792h-.748v-.46c0-.314.064-.534.377-.534.305 0 .37.226.37.534v.46z" fillRule="evenodd" /></svg>

                  </a>
                  <a className="Footer-socialMediaIcon Icon Icon--light" href="/rss.xml" target="_blank" title="Latest Projects" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToRSS">
                    <svg className="Icon-image" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.168 20C4.97 20 4 19.03 4 17.835c0-1.196.97-2.165 2.168-2.165 1.197 0 2.167.97 2.167 2.165 0 1.196-.97 2.165-2.167 2.165zm5.18 0c-.04-4.03-3.314-7.298-7.348-7.34V9.455c5.814.04 10.518 4.74 10.56 10.546h-3.212zm5.44 0C16.77 12.937 11.054 7.24 4 7.208V4c8.83.03 15.98 7.18 16 16h-3.21z" fillRule="evenodd" /></svg>

                  </a>
                  <a className="Footer-socialMediaIcon Icon Icon--light" rel="nofollow" href="https://instagram.com/freelancerofficial" target="_blank" title="Freelancer on Instagram" data-qtsb-section="footer" data-qtsb-subsection="AppsAndSocial" data-qtsb-label="GoToInstagram">
                    <svg className="Icon-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.342-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3zm4.327-3.636c.043.948.052 1.233.052 3.636s-.01 2.688-.053 3.637c-.112 2.42-1.248 3.58-3.69 3.69-.948.042-1.233.052-3.637.052-2.403 0-2.69-.01-3.636-.053-2.446-.11-3.58-1.273-3.69-3.69-.043-.95-.053-1.234-.053-3.637s.01-2.688.054-3.636c.11-2.42 1.248-3.58 3.69-3.69.948-.043 1.233-.052 3.636-.052s2.69.01 3.637.052c2.44.11 3.578 1.27 3.69 3.69zM16.62 12c.002-2.553-2.07-4.622-4.62-4.622-2.553 0-4.622 2.07-4.622 4.622 0 2.553 2.07 4.622 4.622 4.622 2.553 0 4.622-2.07 4.622-4.622zm1.264-4.804c0-.596-.484-1.08-1.08-1.08-.596 0-1.08.484-1.08 1.08 0 .597.483 1.08 1.08 1.08.597 0 1.08-.483 1.08-1.08zM21 12c0-2.444-.01-2.75-.054-3.71-.147-3.265-1.963-5.085-5.235-5.235C14.75 3.01 14.446 3 12 3c-2.445 0-2.75.01-3.71.054-3.27.15-5.085 1.963-5.236 5.235C3.01 9.25 3 9.556 3 12c0 2.445.01 2.75.054 3.71.15 3.27 1.964 5.086 5.236 5.236.96.044 1.265.054 3.71.054 2.445 0 2.75-.01 3.71-.054 3.266-.15 5.09-1.963 5.236-5.236.044-.96.054-1.265.054-3.71z" /></svg>

                  </a>

                </div>
              </div>
            </div>
          </div>
        </footer>


        <div id="toast-notifications-wrapper" />


      </div>);
  }
}


// helper for validation
// values are details that user enter in form
function validate(values) {
  // object that returns errors, if errors is empty the form will be submitted, else it wont be submitted
  // if errors has any properties, redux from assumes that form is invalid
  const errors = {};

  // names are associated to fields in the redux form names
  if (!values.username) {
    errors.username = 'Enter a title!';
  }
  if (!values.password) {
    errors.password = 'Enter some cats';
  }
  return errors;
}

function mapStateToProps(state) {
  return { posts: state.login };
}

export default reduxForm({
  validate,
  form: 'SignUpForm'
})(
  connect(mapStateToProps, { Signup })(Footer)
);
