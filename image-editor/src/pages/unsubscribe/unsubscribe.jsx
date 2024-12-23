import React from 'react';
import styles from './unsubscribe.module.scss';

const UnsubscribeComponent = () => {
    return (
        <section className={styles.sec__unsubscribe_wrapper}>
            <div className={styles.web__unsub_wrap}>
                <div className='container'>
                    <div className={styles.unsubscribe_field_wrap}>
                        <div className={styles.unsubscribe__title}>
                            <h2>Unsubscribe</h2>
                            <p>Confirm your email address to unsubscribe</p>
                        </div>
                        <div className={styles.unsubscribe__input_wrap}>
                            <div className={styles.wpb_input__wrapper}>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="hello@gmail.com"
                                    id="email"
                                    aria-required="true"
                                    className={styles.input__wrap}
                                />
                                <div className={styles.vc_custom__btn}>
                                    <button className={styles.vc_btn2_linewrap} type="submit">
                                        Unsubscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UnsubscribeComponent;
