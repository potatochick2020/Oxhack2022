import React, { useState } from 'react'
import './styles.css'

export default function AddressForm(){

    const [addressesValues, setaddressesValues] = useState([{ Address: ""}])
    const [keywordsValues, setkeywordsValues] = useState([{ Keyword: ""}])

    let handleChangeAddresses = (i, e) => {
        let newaddressesValues = [...addressesValues];
        newaddressesValues[i][e.target.name] = e.target.value;
        setaddressesValues(newaddressesValues);
      }
    
    let addFormFields = () => {
        setaddressesValues([...addressesValues, { Address: "" }])
      }
    
    let removeFormFields = (i) => {
        let newaddressesValues = [...addressesValues];
        newaddressesValues.splice(i, 1);
        setaddressesValues(newaddressesValues)
    }
    
    let handleChangeKeywords = (i, e) => {
      let newkeywordsValues = [...keywordsValues];
      newkeywordsValues[i][e.target.name] = e.target.value;
      setkeywordsValues(newkeywordsValues);
    }
  
  let addKeywordsFields = () => {
      setkeywordsValues([...keywordsValues, { Keyword: "" }])
    }
  
  let removeKeywordsFields = (i) => {
      let newkeywordsValues = [...keywordsValues];
      newkeywordsValues.splice(i, 1);
      setkeywordsValues(newkeywordsValues)
  }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(addressesValues)+JSON.stringify(keywordsValues));
    }

    return (
        <form  onSubmit={handleSubmit}>
          {addressesValues.map((element, index) => (
            <div className="form-inline" key={index}> 
              <label>Address</label>
              <input type="text" name="Address" value={element.Address || ""} onChange={e => handleChangeAddresses(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          {keywordsValues.map((element, index) => (
            <div className="form-inline" key={index}> 
              <label>Keywords</label>
              <input type="text" name="Keyword" value={element.Keyword || ""} onChange={e => handleChangeKeywords(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeKeywordsFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add address</button>
              <button className="button add" type="button" onClick={() => addKeywordsFields()}>Add keyword</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    )
}

 