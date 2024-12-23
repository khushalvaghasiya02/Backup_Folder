import React, { useState } from "react";

const Popup = () => {
  const [selectedField, setSelectedField] = useState("");

  const fields = ["Field 1", "Field 2", "Field 3"];
  const options = {
    "Field 1": ["Option 1.1", "Option 1.2"],
    "Field 2": ["2.1", "2.2" ,"2.3", "2.4","2.1", "2.2" ,"2.3", "2.4" ,'2.5'],
    "Field 3": ["Option 3.1", "Option 3.2" ,"3.2"],
  };

  const handleFieldChange = (field) => {
    setSelectedField(field);
  };

  return (
    <div className="custom-select-popup">
      <div className="popup">
        <div className="popup-row">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="popup-row columns">
          <div className="column first-column">
            <div className="fields-list">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className={`field-item ${selectedField === field ? "selected" : ""}`}
                  onClick={() => handleFieldChange(field)}
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
          <div className="column second-column">
            {selectedField && (
              <ul>
                {options[selectedField].map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
