import styles from './dashboard.module.scss';

const DashboardPage = () => {
  return (
    <div>
      {/* <!------------------ File list Section Start -----------> */}
      <section className={styles.fileListSection}>
        <div className='container'>
          <div className={styles.fileSearchMain}>
            <div className={styles.fileDownload}>
              <h3>My Image</h3>
              <div className={styles.newImageUpload}>
                <div className={styles.searchField}>
                  <img src="./image/search-icon.svg" alt="Search Icon" />
                  <input type="search" placeholder="Search" />
                </div>
                <div className={styles.uploadBtn}>
                  <a href="javascript:void(0)">
                    <img className={styles.imagePlus} src="./image/image-plus.svg" alt="Plus sign" />
                    <img src="./image/upload-icon.svg" alt="Upload Icon" /> New Image
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.buyCreditsMain}>
              <div className={styles.buyNum}>
                <h3>20</h3>
                <p>Available credit</p>
                <div className={styles.buyBtn}>
                  <a href="javascript:void(0)">Buy credits</a>
                </div>
              </div>
            </div>
            <div className={styles.mobilePaginationMain}>
              <div className={styles.paginationList}>
                <select id="pagination-options" name="options">
                  <option value="option1">Option 10</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className={styles.paginationBtn}>
                <p><span>01</span> of 10</p>
                <ul>
                  <li><a href="#"><img src="./image/Left Arrow.svg" alt="Left arrows" /></a></li>
                  <li><a href="#"><img src="./image/Left Arrow.svg" alt="Left arrows" /></a></li>
                </ul>
              </div>
            </div>
            <div className={styles.pictureConvert}>
              <div className={styles.convertName}>
                <a href="javascript:void(0)">Name <img src="./image/convert-down.svg" alt="Down arrows" /></a>
                <div className={styles.convertBtn}>
                  <a href="javascript:void(0)"><img src="./image/convert-download-icon.svg" alt="Download arrows" /> Convert</a>
                </div>
              </div>
            </div>
            <div className={styles.fileMainList}>
              {/* Repeated file-main items */}
              {[...Array(6)].map((_, index) => (
                <div className={styles.fileMain} key={index}>
                  <div className={styles.fileImg}>
                    <img src="./image/list-img.png" alt="" />
                    <div className={styles.imgInfo}>
                      <h4>Printer.png</h4>
                      <p>Created at June 21,2024 <br />Time remaining: 20:09</p>
                      <a href="javascript:void(0)">High quality</a>
                    </div>
                  </div>
                  <div className={styles.editBtnEtc}>
                    <a href="javascript:void(0)"><img src="./image/delete-icon.svg" alt="Delete Icon" /></a>
                    <a href="javascript:void(0)"><img src="./image/edit-icon.svg" alt="Edit Icon" /></a>
                    <a href="javascript:void(0)">Download <img src="./image/unsubscribe-download-icon.svg" alt="Download Icon" /></a>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.filePagination}>
              <ul>
                <li><a href="javascript:void(0)"><img src="./image/Left Arrow.svg" alt="Left arrows" /></a></li>
                <li className={styles.activePage}><a href="javascript:void(0)">01</a></li>
                <li><a href="javascript:void(0)">02</a></li>
                <li><a href="javascript:void(0)">03</a></li>
                <li><a href="javascript:void(0)">04</a></li>
                <li><a href="javascript:void(0)">....</a></li>
                <li><a href="javascript:void(0)">10</a></li>
                <li><a href="javascript:void(0)"><img src="./image/Left Arrow.svg" alt="Left arrows" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!------------------ File list Section End -----------> */}
      <section className={styles.convertSection}>
        <div className='container'>
          <div className={styles.removeBgDepart}>
            <div className={styles.imagesBlur}>
              <div className={styles.roundedBg}><img src="./image/dashboard-user-icon.svg" alt="Remove Background" /></div>
              <h4>Remove Background</h4>
              <div className={styles.userClick}>
                <a href="javascript:void(0)"><img src="./image/dashboard-right-arrows-icon.svg" alt="Right arrows" /></a>
              </div>
            </div>
            <div className={styles.imagesBlur}>
              <div className={styles.roundedBg}><img src="./image/beauty-img.svg" alt="Unblur Images" /></div>
              <h4>Remove Background</h4>
              <div className={styles.userClick}>
                <a href="javascript:void(0)"><img src="./image/dashboard-right-arrows-icon.svg" alt="Right arrows" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
