import  { useState, useEffect  } from "react";
import React from 'react';
import StackForm from './form.js'
import QuestionList from './questionlist.js'
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import ReactPaginate from 'react-paginate';

function App() {

    let [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [result, setResults] = useState('');
    const [page, setPage] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleAPIError = (message) => {
            setResults(false);
            setLoading(false);
            setError(true);
            setErrorMsg(message);
    }

    const handleStackForm = (paramData) => {
        var qst = '';

        paramData['data-page'] = page;
        paramData['data-limit'] = 10;

        Object.keys(paramData).forEach(e => {
            qst += e + '=' + paramData[e] + '&';
        });

        console.log(qst);

        setLoading(true);

        var API_URL = "http://localhost:8000/api/v1/listquestions/";

        if(qst !== ''){
            API_URL = API_URL + '?' + qst
        }


        setShowResults(true);


        fetch(API_URL)
            .then(res => res.json())
            .then(
                (result) => {

                    console.log(result);

                    if(result.result == "success"){

                        setLoading(false);

                        setPageNum(result.page);

                        setResults(result.message);

                    }else{
                        handleAPIError(result.message);
                    }

                },
                (error) => {
                     handleAPIError("error fetching from stack app");
                }
            );

    };

    const handleNav = (pageNav) => {
        setPage(pageNav.selected);
    };


    useEffect(() => {
//        if (paramData['data-page'] != page){
            //change the data
//        }
    });

    return (
        <div id="container">

            <div className="card-heading">
                <h2>Search StackOverflow Questions</h2>
            </div>

            {!showResults ?
             <StackForm formHandler={handleStackForm} /> :
             <QuestionList data={result}  page={pageNum} changeNav={handleNav}/>
             }


             {
                error ? <div> {errorMsg} </div> : null
             }


            <div className="card-loading">
                <ClipLoader loading={loading} size={150} />
            </div>

        </div>
    );
}

export default App;