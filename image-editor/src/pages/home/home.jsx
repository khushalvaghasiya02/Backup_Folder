// import './home.css';
import {
  AiIMG,
  amazonlogo,
  bannerarrowBGImg,
  BGimageNewtool,
  BGremoverMainIMG,
  bgStarImg,
  cocacola,
  homeBannerBG,
  homebannerimg,
  HomePageSliderimgfirst,
  homeRightArrows,
  homeSlideFifth,
  homeSlideFourth,
  homeSlideSec,
  homeSlideThird,
  metalogo,
  netflixlogo,
  objectremoverIMG,
  plusSign,
  pricingStar,
  reviewimg,
  testimonialsimage,
  testimonialsleft,
  testimonialsright,
  testinonialsimg,
  TextSpeechIMG,
  FAQrightArrows
} from '../../assets/images/index';
import styles from './home.module.scss';

const HomeComponent = () => {
  return (
    <div>
      <section className={styles.banner_section}>
        <div className={styles.banner_radius}>
          <div className={styles.banner_main_bg} style={{ backgroundImage: `url(${homeBannerBG})` }}>
            <div className='container'>
              <div className={styles.banner_content}>
                <div className={styles.banner_text}>
                  <h1>
                    Empower Your Creativity and <span>Productivity with AI</span>
                  </h1>
                  <div className={styles.testimonial_banner_slider_box}>
                    <div className={styles.testimonial_slider_image}>
                      <img src={testinonialsimg} alt='testimonial image' />
                      <div className={styles.testimonials_content}>
                        <h3>Jessica Martinez</h3>
                        <img src={reviewimg} alt='review image' />
                      </div>
                    </div>
                    <p>
                      My vectorized files were unbelievably crisp and scalable to any size without losing a single
                      detail. Whether I needed the vector for a small icon or a massive banner, the results were
                      consistently outstanding.
                    </p>
                    <div className={styles.testimonial_btn}>
                      <img src={testimonialsleft} alt='testimonial left' />
                      <img src={testimonialsright} alt='testimonial right' />
                    </div>
                    <div className={styles.position_bg_star}>
                      <img src={bgStarImg} alt='bg star image' />
                    </div>
                  </div>
                </div>
                <div className={styles.banner_image}>
                  <img src={homebannerimg} alt='banner image' />
                  <p>
                    These headings are designed to be engaging and highlight the These headings are designed to be
                    engaging and highlight the benefits of using AI tools for creativity and productivity.benefits of
                    using AI tools for creativity and productivity.
                  </p>
                  <div className={styles.header_btn_info}>
                    <div className={styles.header_btn_right}>
                      <a href='#'>
                        Let’s Get Start <img src={homeRightArrows} alt='' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.main_position_bg_arrow}>
              <img src={bannerarrowBGImg} alt='arrow bg' />
            </div>
          </div>
          <div className={styles.banner_main_slider}>
            <div className='container'>
              <div className={styles.slider_main_content}>
                <div className={styles.work_marquee_label}>
                  <img src={testimonialsimage} alt='customshopify.ai logo' />
                  We are Trusted by
                </div>
                <div className={styles.card}>
                  <div className={styles.logos_slider}>
                    <div className={styles.logos_slider_container}>
                      <img src={netflixlogo} alt='amazon logo' />
                      <img src={amazonlogo} alt='coca cola logo' />
                      <img src={cocacola} alt='amazon logo' />
                      <img src={metalogo} />
                      <img src={netflixlogo} alt='coca cola logo' />
                      <img src={amazonlogo} alt='amazon logo' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!------------------ Banner Section End --------------->
    <!------------------ Counter Section start ------------> */}
      <section className={styles.counter_section}>
        <div className='container'>
          <div className={styles.counter_main_content}>
            <div className={styles.left_section}>
              <h2>
                Unveil New <span className={styles.highlight}>Creative</span> Horizons
              </h2>
              <p>Edit your images with a comprehensive set of tools and AI-powered features.</p>
              <div className={styles.header_btn_info}>
                <div className={styles.header_btn_right}>
                  <a href='#'>Explore More</a>
                </div>
              </div>
            </div>
            <div className={styles.right_section}>
              <div className={styles.star_box_two}>
                <div className={styles.stat_box}>
                  <h2>Creative Edits Made Every Month</h2>
                  <h3>1B+</h3>
                </div>
                <div className={styles.stat_box}>
                  <h2>Image Processed</h2>
                  <h3>15M+</h3>
                </div>
              </div>
              <div className={styles.star_box_two}>
                <div className={styles.stat_box}>
                  <h2>Faster Editing on Platform</h2>
                  <h3>10x</h3>
                </div>
                <div className={styles.stat_box}>
                  <h2>Happy Users</h2>
                  <h3>40K+</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!------------------ Counter Section End ------------>
     <!------------------ bg remover Section End ------------> */}
      <div className={styles.editing_remover_main_section}>
        <div className={styles.banner_radius}>
          <div className='container'>
            <div className={styles.editing_section}>
              <h2>
                Editing Tools Are <br /> Designed For <span className={styles.highlight}>Every Purpose.</span>
              </h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className={styles.feature_section}>
              <div className={styles.text_block}>
                <div className={styles.image_background_remover}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='48' height='243' viewBox='0 0 48 243' fill='none'>
                    <rect x='21' width='6' height='243' rx='3' fill='url(#paint0_linear_3004_127)' />
                    <circle cx='24' cy='121' r='21.5' fill='#B66DD9' stroke='#FFB49C' strokeWidth='5' />
                    <defs>
                      <linearGradient
                        id='paint0_linear_3004_127'
                        x1='24'
                        y1='0'
                        x2='24'
                        y2='243'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#76ACFF' stopOpacity='0.2' />
                        <stop offset='0.46' stopColor='#76ACFF' />
                        <stop offset='1' stopColor='#76ACFF' stopOpacity='0.2' />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className={styles.background_remover_text}>
                  <h3>Background Remover</h3>
                  <p>Edit your images with a comprehensive set of tools and AI-powered features.</p>
                  <div className={styles.header_btn_info}>
                    <div className={styles.header_btn_right}>
                      <a href='#'>Try Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.image_block}>
                <img src={BGremoverMainIMG} alt='Background Remover Image' className={styles.main_image} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Imagination Secion */}
      <section className={styles.imagination_section}>
        <div className={styles.banner_radius}>
          <div className='container'>
            <div className={styles.generative_section}>
              <div className={styles.background_text}>
                <img src={BGimageNewtool} alt='new tool' />
              </div>
              <h2>
                Spark Your Imagination With <br />
                <span className={styles.highlight}>Generative AI</span>
              </h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className={styles.ai_image_generator}>
              <div className={styles.background_remover_text}>
                <div className={styles.new_badge}>NEW</div>
                <h3>AI Image Generator</h3>
                <p>Easily create beautiful photos in seconds with this AI image generator.</p>
                <div className={styles.header_btn_info}>
                  <div className={styles.header_btn_right}>
                    <a href='#'>Try Now</a>
                  </div>
                </div>
              </div>
              <div className={styles.ai_image_generator_images}>
                <img src={AiIMG} alt='AI Image 1' />
              </div>
            </div>
            <div className={styles.object_remover}>
              <div className={styles.ai_image_generator_images}>
                <img src={objectremoverIMG} alt='object Image ' />
              </div>
              <div className={styles.background_remover_text}>
                <div className={styles.new_badge}>NEW</div>
                <h3>Object Remover</h3>
                <p>Easily remove unwanted objects or people from your photos with our tool.</p>
                <div className={styles.header_btn_info}>
                  <div className={styles.header_btn_right}>
                    <a href='#'>Try Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text_speech}>
              <div className={styles.background_remover_text}>
                <div className={styles.new_badge}>NEW</div>
                <h3>Text to Speech</h3>
                <p>Easily convert text to speech with our tool.</p>
                <div className={styles.header_btn_info}>
                  <div className={styles.header_btn_right}>
                    <a href='#'>Try Now</a>
                  </div>
                </div>
              </div>
              <div className={styles.ai_image_generator_images}>
                <img src={TextSpeechIMG} alt='text speech' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!------------------ bg remover Section End ------------>
     <!------------------ accordian Section start ------------> */}
      <section className={styles.accordion_section}>
        <div className='container'>
          <div className={styles.main_accordion_content}>
            <div className={styles.accordion_text}>
              {/* <img src='./image/faq-image.svg' alt='faq image' /> */}
              <h2>
                Let's have
                <span className={styles.highlight}>quick FAQ</span>
              </h2>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className={styles.accordian_position_img}>
                <img src={FAQrightArrows} alt='faq arrow' />
              </div>
            </div>
            <div className={styles.accordion}>
              <div className={styles.accordion_item}>
                <div className={styles.accordion_item_header}>
                  <h3>How do I reset my password?</h3>
                  <img src={plusSign} alt='plus' />
                </div>
                <div className={styles.accordion_item_body}>
                  <div className={styles.accordion_item_body_content}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                </div>
              </div>
              <div className={styles.accordion_item}>
                <div className={styles.accordion_item_header}>
                  <h3>How do I Edit Your Image?</h3>
                  <img src={plusSign} alt='plus' />
                </div>
                <div className={styles.accordion_item_body}>
                  <div className={styles.accordion_item_body_content}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                </div>
              </div>
              <div className={styles.accordion_item}>
                <div className={styles.accordion_item_header}>
                  <h3>In which formats can I download my background-removed image?</h3>
                  <img src={plusSign} alt='plus' />
                </div>
                <div className={styles.accordion_item_body}>
                  <div className={styles.accordion_item_body_content}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                </div>
              </div>
              <div className={styles.accordion_item}>
                <div className={styles.accordion_item_header}>
                  <h3>Can I customize the background for my images?</h3>
                  <img src={plusSign} alt='plus' />
                </div>
                <div className={styles.accordion_item_body}>
                  <div className={styles.accordion_item_body_content}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!------------------ accordian Section end ------------>
    <!------------------ Pricing Section Start ------------> */}
      <section className={styles.pricing}>
        <div className={styles.banner_radius}>
          <div className='container'>
            <div className={styles.plan_details}>
              <div className={styles.pricing_content}>
                <h3>- Buy Plan</h3>
                <h2>
                  We’ve Got A Plan That’s
                  <span className={styles.highlight}>Perfect For You</span>
                </h2>
                <div className={styles.pricing_plan_list}>
                  <ul>
                    <li>
                      <div className={styles.pricing_plan_list_img}>
                        <img src={pricingStar} alt='star pricing' />
                      </div>
                      <div className={styles.pricing_plan_list_fix_content}>
                        <p>There are no limitations on the number of files you want to convert.</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.pricing_plan_list_img}>
                        <img src={pricingStar} alt='star pricing' />
                      </div>
                      <div className={styles.pricing_plan_list_fix_content}>
                        <p>Store files worry-free. Files are fully encrypted and only you have access.</p>
                        <div className={styles.pricing_plan_list_logo}>
                          {/*                           <img src={ff} alt='pricing logo' />
                          <img src={pricingLogo} alt='pricing logo second' />
                          <img src={pricingLOGOsecond} alt='pricing logo third' />
                          <img src={} alt='pricing logo fourth' /> */}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.pricing_plan_list_img}>
                        <img src={pricingStar} alt='star pricing' />
                      </div>
                      <div className={styles.pricing_plan_list_fix_content}>
                        <p>Easy access to all your files from any device anywhere in the world.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.plan_options}>
                <div className={styles.trial_main_plan}>
                  <div className={styles.trial_plan}>
                    <div className={styles.best_value}>
                      <h6>Best value - 33% OFF</h6>
                    </div>
                    <h4>07 Days Trial</h4>
                    <div className={styles.credits}>10 credits</div>
                    <h3>$01.00</h3>
                    <p>
                      Try all the features. If you do not cancel after that period, you will automatically renew to the
                      200 credits plan for ₹800.00/month
                    </p>
                    <button>Sign In</button>
                  </div>
                </div>
                <div className={styles.trial_main_plan}>
                  <div className={styles.subscription_plan}>
                    <h4>Subscription Plan</h4>
                    <div className={styles.credits}>200 Credits</div>
                    <h3>
                      $10.00<span>/ month</span>
                    </h3>
                    <ul>
                      <li>
                        <div className={styles.subscription_plan_radio_list}>
                          <div className={styles.subscription_plan_radio_content}>
                            <input type='radio' id='credits' name='drone' value='huey' defaultChecked={false} />
                            <label htmlFor='huey'>200 Credits</label>
                          </div>
                          <span></span>
                          <div className={styles.subscription_plan_radio_price}>$10.00</div>
                        </div>
                      </li>
                      <li>
                        <div className={styles.subscription_plan_radio_list}>
                          <div className={styles.subscription_plan_radio_content}>
                            <input type='radio' id='credits1' name='drone' value='huey' defaultChecked={false} />
                            <label htmlFor='huey'>500 Credits</label>
                          </div>
                          <span></span>
                          <div className={styles.subscription_plan_radio_price}>$15.00</div>
                        </div>
                      </li>
                      <li>
                        <div className={styles.subscription_plan_radio_list}>
                          <div className={styles.subscription_plan_radio_content}>
                            <input type='radio' id='credits2' name='drone' value='huey' defaultChecked={false} />
                            <label htmlFor='huey'>1000 Credits</label>
                          </div>
                          <span></span>
                          <div className={styles.subscription_plan_radio_price}>$40.00</div>
                        </div>
                      </li>
                      <li>
                        <div className={styles.subscription_plan_radio_list}>
                          <div className={styles.subscription_plan_radio_content}>
                            <input type='radio' id='credits3' name='drone' value='huey' defaultChecked={false} />
                            <label htmlFor='huey'>2000 Credits</label>
                          </div>
                          <span></span>
                          <div className={styles.subscription_plan_radio_price}>$80.00</div>
                        </div>
                      </li>
                      <li>
                        <div className={styles.subscription_plan_radio_list}>
                          <div className={styles.subscription_plan_radio_content}>
                            <input type='radio' id='credits4' name='drone' value='huey' defaultChecked={false} />
                            <label htmlFor='huey'>5000 Credits</label>
                          </div>
                          <span></span>
                          <div className={styles.subscription_plan_radio_price}>$105.00</div>
                        </div>
                      </li>
                    </ul>
                    <h5>See more</h5>
                    <button>Buy Plan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!------------------ Pricing Section End ------------>
     <!------------------ Home page Section Start ------------> */}
      <div className={styles.home_page_main_slider}>
        <div className={styles.home_page_main_img}>
          <img src={HomePageSliderimgfirst} alt='home page slider first' />
        </div>
        <div className={styles.home_page_main_img}>
          <img src={homeSlideSec} alt='home page slider second' />
        </div>
        <div className={styles.home_page_main_img}>
          <img src={homeSlideThird} alt='home page slider third' />
        </div>
        <div className={styles.home_page_main_img}>
          <img src={homeSlideFourth} alt='home page slider fourth' />
        </div>
        <div className={styles.home_page_main_img}>
          <img src={homeSlideFifth} alt='home page slider fifth' />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
