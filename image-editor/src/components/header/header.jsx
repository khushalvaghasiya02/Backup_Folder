import styles from './header.module.scss';
import {headerlogo,download} from "../../assets/images/index"

const HeaderComponent = () => {
  return (
    <header className='header-section'>
      <div className={styles.headerContainer}>
        <div className={styles.headerMain}>
          <div className='header-logo'>
            <a href='#'>
              <img src={headerlogo} alt='header logo' />
            </a>
          </div>
          <div className={styles.toggleBtnMenu}>
            <div className={styles.navigationMenu}>
              <ul className={`${styles.linkList} ${styles.navigationList}`}>
                <li className={`${styles.link} ${styles.active} ${styles.dropdown}`}>
                  <a href='#'>Tools
                    <img className={styles.tools_icon} src={download} alt='tools icon' />
                  </a>
                  <ul className={styles.dropdownContent}>
                    <li>AI Image Generator</li>
                    <li>Image Vectorizer</li>
                    <li>Background Remover</li>
                    <li>Image Upscaler</li>
                    <li>Blur Remover</li>
                    <li>Image Colorizer</li>
                    <li>Object Remover</li>
                    <li>AI Voice Generator</li>
                  </ul>
                </li>
                <li className={styles.link}>
                  <a href='#'>Pricing</a>
                </li>
              </ul>
            </div>
            <div className={styles.headerBtnInfo}>
              <div className={styles.headerBtnLeft}>
                <a href='#'>Sign in</a>
              </div>
              <div className={styles.headerBtnRight}>
                <a href='#'>Log in</a>
              </div>
            </div>
          </div>
          <div className={styles.mobileMenuIcon}>
            <div className={styles.humburgerIcon}>
              <span className={styles.stick_1}></span>
              <span className={styles.stick_2}></span>
              <span className={styles.stick_3}></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
