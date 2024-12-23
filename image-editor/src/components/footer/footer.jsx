// import './footer.css';
import styles from './footer.module.scss';
import {FooterLogo} from '../../assets/images/index';
const FooterComponent = () => {
  return (
    <footer className={styles.site_footer__wrapper}>
      <div className={styles.footer__container}>
        {/* <div className={styles.footer_top__wrapper}>
          <div className={styles.footer_logo__wrapper}>
            <a href='#' onClick={(e) => e.preventDefault()}>
              <img className={styles.footer__logo} src='./image/footer_logo.svg' alt='Footer Logo' />
            </a>
          </div>
          <div className={styles.footer_social__wrapper}>
            <div className={styles.social__icons_wrapper}>
              <ul>
                <li>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                    <img src='./image/facebook_icon.svg' alt='Facebook' />
                  </a>
                </li>
                <li>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                    <img src='./image/twitter_icon.svg' alt='Twitter' />
                  </a>
                </li>
                <li>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                    <img src='./image/instagram_icon.svg' alt='Instagram' />
                  </a>
                </li>
                <li>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                    <img src='./image/linkedin_icon.svg' alt='LinkedIn' />
                  </a>
                </li>
                <li>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                    <img src='./image/pintrest_icon.svg' alt='Pinterest' />
                  </a>
                </li>
                <li>
                  <a href='#' onClick={(e) => e.preventDefault()}>
                    <img src='./image/threads_icon.svg' alt='Threads' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className={styles.footer_bottom__wrapper}>
          <div className={styles.footer_description_content}>
            <div className={styles.description_border_wrap}>
              <img src={FooterLogo} alt="" />
            </div>
          </div>
          <div className={styles.footer_menu_wrapper1}>
            <div className={styles.footer_border__margin}>
              <h3 className={styles.footer_title}>Support</h3>
              <div className={styles.site_footer_menu}>
                <ul>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Sign up</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Log in</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>FAQs</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Pricing</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>APIs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer_menu_wrapper1}>
            <div className={styles.footer_border__margin}>
              <h3 className={styles.footer_title}>Legal</h3>
              <div className={styles.site_footer_menu}>
                <ul>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Cancel Subscription</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Cookie Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footer_menu_wrapper1}>
            <div className={styles.footer_border__margin}>
              <h3 className={styles.footer_title}>Tools</h3>
              <div className={styles.site_footer_menu}>
                <ul>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Background Remover</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Image Vectorizer</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Image Enhancer</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Blur Remover</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Image Upscaler</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Image Colorizer</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Object Remover</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>AI Image Generator</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Text to Speech</a>
                  </li>
                  <li>
                    <a href='#' onClick={(e) => e.preventDefault()}>Text Remover</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_copyright__wrapper}>
          <p>
            All Rights Reserved{' '}
            <a href='#' onClick={(e) => e.preventDefault()}>@Imageeditor</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
