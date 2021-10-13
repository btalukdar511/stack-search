import React, { useState } from 'react';

export default function QuestionCard(props) {

    const [expand, setExpand] = useState(false);

    const questionData = props.question;

    const card = <div className="question-card">
                    <a href={questionData.link} target='_blank'>
                        {questionData.title}
                    </a>


                 </div>;

    return card;

}