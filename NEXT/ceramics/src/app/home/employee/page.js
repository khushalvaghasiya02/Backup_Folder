import React from 'react'
import './employee.css'
const Employee = () => {
  return (
    <div className='employee'>
      <div className='container'>
        <div className='employee-content'>
        <h2 className="title">Our employees</h2>
        <div className="employee-list">
          <div className="employee-item">
            <div className="employee-image">
              <img src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/.CURRENT_LIB/1200_tz47gb_img_e131fecb10f9f6d1e7e3ce43856c8565.webp" alt="image"/>
            </div>
            <h3 className="employee-name">Mary Smith</h3>
            <div className="employee-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.</div>
          </div>
          <div className="employee-item">
            <div className="employee-image">
              <img src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/.CURRENT_LIB/1200_tz47gb_img_f63cf7d764e0bf29c6a19c446c64814c.webp" alt="image"/>
            </div>
            <h3 className="employee-name">James Jones</h3>
            <div className="employee-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.</div>
          </div>
          <div className="employee-item">
            <div className="employee-image">
              <img src="https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/.CURRENT_LIB/1200_tz47gb_img_64600f27d0ef9d7cb2d1ac2b61ab48d1.webp" alt="image"/>
            </div>
            <h3 className="employee-name">Emily Murphy</h3>
            <div className="employee-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum sapien ac sapien vestibulum posuere. Praesent congue dui nec lectus tincidunt elementum.</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Employee