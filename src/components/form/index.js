import React, { useState } from "react";
import './form.scss';

const Form = (props) => {

  const[url, setURL] = useState('');
  const[method, setMethod] = useState('GET');

  let handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData);
  }

  const handleURL = (e) => {
    setURL(e.target.value)
  }

  const handleGet = (e) => {
    setMethod(e.target.value)
    console.log('get hit!')
  }

  const handlePost = (e) => {
    setMethod(e.target.value)
    console.log('post hit!')
  }

  const handlePut = (e) => {
    setMethod(e.target.value)
    console.log('put hit!')
  }
  
  const handleDelete = (e) => {
    setMethod(e.target.value)
    console.log('delete hit!')
  }


  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={handleURL} />
            {/* <button type="submit">GO!</button> */}
          </label>
          <label className="methods">
            <button id="get" value='GET' type="submit" onClick={handleGet}>GET</button>
            <button id="post" value='POST' type="submit" onClick={handlePost}>POST</button>
            <button id="put" value='PUT' type="submit" onClick={handlePut}>PUT</button>
            <button id="delete" value='DELETE' type="submit" onClick={handleDelete}>DELETE</button>
            
          </label>
        </form>
      </>
    );
  
}

export default Form;
