import React from 'react';
import styles from './contact.module.scss';
import { UserContactImage } from '../../assets/images';

const ContactComponent = () => {
    return (
        // <!------------------ Banner Section Start ------------>
        <section className={`${styles.vc_usercmt_wrapper} ${styles.vc_contact_wrapper}`}>
            <div className='container'>
                <div className={styles.vc_row_inner}>
                    <div className={`${styles.vc_column} ${styles.vc_column4_container}`}>
                        <div className={styles.contact_area_wrap}>
                            <h2>Contact Us</h2>
                            <span>Email us at <a href="mailto:support@imageeditor.com">support@imageeditor.com</a></span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>
                    </div>
                    <div className={`${styles.vc_column} ${styles.vc_column5_container}`}>
                        <div className={styles.vc_image_wrapper}>
                            <img src={UserContactImage} alt="contact us image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!------------------ Banner Section End -------------->
    );
};

export default ContactComponent;
