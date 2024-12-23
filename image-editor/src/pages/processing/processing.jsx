import React from 'react'
import styles from './processing.module.scss'

const ProcessingComponent = () => {
  return (
    <section className={styles.image_processing_section}>
  <div className="container">
    <div className={styles.processing_main_ctn}>
      <div className={styles.image_processing}>
        <div><img src="./Image/Processing Animation.gif" alt="Your Image is in Processing..." /></div>
        <h4>Your Image is in Processing...</h4>
        <div className={styles.clear_line}>
          <span></span>        
        </div>
        <div className={styles.process_close_icon} >
          <img src="./Image/process-cross-icon.svg" alt="Process close" />
        </div>
      </div>
        <div className={styles.upload_plus_main}>
          <div className={styles.upload_area}>
            <div>
              <a href="#"><img src="./Image/processing-plus.svg" alt="Plus Icon" /></a>
            </div>
            <img src="./Image/your-img.png" alt="" />
          </div>
        </div>
    </div>
  </div>
</section>
  )
}

export default ProcessingComponent