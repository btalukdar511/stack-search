import React from 'react';
import QuestionCard from './question';
import ReactPaginate from 'react-paginate';


export default function QuestionList(props) {

    const questionArr = props.data;
    const pageNum = props.page;
    const handleNav = props.changeNav;

    const cardList =
       <div>
       <>
           {Object.keys(questionArr).map(question => <QuestionCard key={question} question={questionArr[question]}/>)}


             <ReactPaginate
                     pageCount={pageNum}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={handleNav}
                     breakClassName={'page-item'}
                     breakLinkClassName={'page-link'}
                     containerClassName={'pagination'}
                     pageClassName={'page-item'}
                     pageLinkClassName={'page-link'}
                     previousClassName={'page-item'}
                     previousLinkClassName={'page-link'}
                     nextClassName={'page-item'}
                     nextLinkClassName={'page-link'}
                     activeClassName={'active'}
              />
       </>
       </div>

    return cardList;

}