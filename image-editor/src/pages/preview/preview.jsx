import React from 'react';
import styles from './preview.module.scss';

const PreviewComponent = () => {
  return (
    <>
    {/* Image Processing Section */}
    <section className={styles.recoverSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.recoverMainCtn}>
          <div className={`${styles.recoverCtn} ${styles.recoverSpace}`}>
            <span>For Product Use</span>
            <h3>Remove BG from your Product Images</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className={styles.recoverBtn}>
              <a href="#">Try Now</a>
            </div>
          </div>
          <div className={styles.recoverImg}>
            <img src="https://picsum.photos/575/400" alt="Remove BG from your Product Images" />
          </div>
        </div>

        <div className={styles.recoverMainCtn}>
          <div className={`${styles.recoverImg} ${styles.recoverSpace}`}>
            <img src="https://picsum.photos/575/400" alt="Enhance your professional images and recover lost details." />
          </div>
          <div className={styles.recoverCtn}>
            <span>For Product Use</span>
            <h3>Enhance your professional images and recover lost details.</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className={styles.recoverBtn}>
              <a href="#">Try Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className={styles.previewFaqSection}>
    <div className={`container ${styles.container}`}>
        <div className={styles.previewFaqTitle}>
          <h2 className={styles.mobileNone}>Frequently Asked Questions</h2>
          <h2 className={styles.mobileShow}>FAQs</h2>
        </div>
        <div className={`${styles.previewFaq} ${styles.faqContainer}`}>
            <div className={`${styles.previewFaq} ${styles.faqItem}`}>
              <input type="radio" name="faq" id="faq1" />
              <label htmlFor="faq1" className={`${styles.previewFaq} ${styles.faqQuestion}`}>
                What is Remove Background?
                <img className={styles.plusCheck} src="./Image/faq-plus-sign.svg" alt="Plus sign" />
                <img className={styles.minusCheck} src="./Image/faq-hyphen-sign.svg" alt="Minus sign" />
              </label>
              <div className={`${styles.previewFaq} ${styles.faqAnswer}`}>
                It is a web tool to remove backgrounds from any image automatically and in seconds. Remove Background uses artificial intelligence technology to offer more professional results.
              </div>
            </div>
            <div className={`${styles.previewFaq} ${styles.faqItem}`}>
              <input type="radio" name="faq" id="faq2" />
              <label htmlFor="faq2" className={`${styles.previewFaq} ${styles.faqQuestion}`}>
                What image format does Remove Background accept?
                <img className={styles.plusCheck} src="./Image/faq-plus-sign.svg" alt="Plus sign" />
                <img className={styles.minusCheck} src="./Image/faq-hyphen-sign.svg" alt="Minus sign" />
              </label>
              <div className={`${styles.previewFaq} ${styles.faqAnswer}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className={`${styles.previewFaq} ${styles.faqItem}`}>
              <input type="radio" name="faq" id="faq3" />
              <label htmlFor="faq3" className={`${styles.previewFaq} ${styles.faqQuestion}`}>
                What maximum file resolution does Remove Background accept?
                <img className={styles.plusCheck} src="./Image/faq-plus-sign.svg" alt="Plus sign" />
                <img className={styles.minusCheck} src="./Image/faq-hyphen-sign.svg" alt="Minus sign" />
              </label>
              <div className={`${styles.previewFaq} ${styles.faqAnswer}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className={`${styles.previewFaq} ${styles.faqItem}`}>
              <input type="radio" name="faq" id="faq4" />
              <label htmlFor="faq4" className={`${styles.previewFaq} ${styles.faqQuestion}`}>
                What maximum file size does Remove Background accept?
                <img className={styles.plusCheck} src="./Image/faq-plus-sign.svg" alt="Plus sign" />
                <img className={styles.minusCheck} src="./Image/faq-hyphen-sign.svg" alt="Minus sign" />
              </label>
              <div className={`${styles.previewFaq} ${styles.faqAnswer}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className={`${styles.previewFaq} ${styles.faqItem}`}>
              <input type="radio" name="faq" id="faq5" />
              <label htmlFor="faq5" className={`${styles.previewFaq} ${styles.faqQuestion}`}>
                Can I use images retouched with Remove <br /> Background for commercial purposes?
                <img className={styles.plusCheck} src="./Image/faq-plus-sign.svg" alt="Plus sign" />
                <img className={styles.minusCheck} src="./Image/faq-hyphen-sign.svg" alt="Minus sign" />
              </label>
              <div className={`${styles.previewFaq} ${styles.faqAnswer}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className={`${styles.previewFaq} ${styles.faqItem}`}>
              <input type="radio" name="faq" id="faq6" />
              <label htmlFor="faq6" className={`${styles.previewFaq} ${styles.faqQuestion}`}>
                Is Remove Background safe?
                <img className={styles.plusCheck} src="./Image/faq-plus-sign.svg" alt="Plus sign" />
                <img className={styles.minusCheck} src="./Image/faq-hyphen-sign.svg" alt="Minus sign" />
              </label>
              <div className={`${styles.previewFaq} ${styles.faqAnswer}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default PreviewComponent;
