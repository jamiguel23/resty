import React, { useState } from 'react';
import axios from 'axios';
import './app.scss';


// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import { useReducer } from 'react';


const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: [],
}

let [state, dispatch] = useReducer(reducer, initialState)


function reducer(state = initialState, action) {
  console.log('running reducer');
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case "DATA/SETTING_DATA":
      return {
        ...state,
        data: [payload],
      };

  }
}


function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const [loading, setLoading] = useState(false);


  const callApi = async (requestParams) => {
    setRequestParams(requestParams);
    console.log('*', requestParams);
    setLoading(true);


    await setTimeout(() => {
      axios.get(requestParams.url)

        .then((json) => {
          setData(json)

        })
        .catch((e) => {
          console.log('Error', e);
          setData('Invalid URL');
        });
      setLoading(false);
    }, 2000);

  }


  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <div>
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
      </div>
      <Results loading={loading} data={data} />
      <History loading={loading} />
      <Footer />
    </React.Fragment>
  );

}

export default App;
