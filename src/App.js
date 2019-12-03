import React from 'react';
import './App.css';
import Tooltip from "./Tooltip";

class App extends React.Component {

    render() {

        const texts = {
            textOne: 'Это первая подсказка для слова comprehension',
            textTwo: 'А это подсказка для слова multiple-choice',
        };

        return(
            <div className='App'>
                English texts to practice reading and <Tooltip text={texts.textOne}>comprehension</Tooltip> online
                and for free. Practicing your comprehension of written English will both improve your vocabulary and
                understanding of grammar and word order. The texts below are designed to help you develop
                while giving you an instant evaluation of your progress. Prepared by experienced English
                teachers, the texts, articles and conversations are brief and appropriate to your level
                of proficiency. Take the <Tooltip text={texts.textTwo}>multiple-choice</Tooltip> quiz following
                each text, and you'll get the results <Tooltip>immediately</Tooltip>.
            </div>
        )
    }
}

export default App;
