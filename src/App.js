import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
      this.state = {

      }

      let tree = {
        question: "Are you an adult ?",
        questionid: 1,
        childOptions: [
          "Yes",
          "No"
        ],
        childNodes: [
          {
            question: "Are you speaking to a child ?",
            parentOption: "Yes",
            childOptions: [
              "Yes",
              "No"
            ],
            childNodes: [
              {
                question: "Is the child a prince or something ?",
                childNodes: [
                  {
                    answer: "Tu"
                  }, {
                    answer: "Vous"
                  }
                ]
              }, {
                question: "You are speaking to ...",
                childOptions: [
                  "A friend or lover",
                  "Someone you don't formally know",
                  "Your spouse",
                  "Your father-in-law",
                  "Your boss",
                  "Your teacher"
                ],
                childNodes: [
                  {
                    answer: "Tu",
                    parentOption: "A friend or lover"
                  }, {
                    question: "God ?",
                    parentOption: "Someone you don't formally know",
                    childOptions: [
                      "Yes", "No"
                    ],
                    childNodes: [
                      {
                        answer: "Tu (believe it or not)",
                        parentOption: "Yes"
                      },
                      {
                        question: "Is this someone considerably older (say, a half generation or more) than you ?"
                        childOptions: [
                          "Yes", "No"
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }, {
            question: "Are you speaking to an adult ?",
            childOptions: [
              "Yes", "No"
            ]
            childNodes: [
              {
                question: "Is the adult a family member ?",
                parentOption: "Yes",
                childOptions: [
                  "Yes", "No"
                ]
                childNodes: [
                  {
                    answer: "Tu",
                    parentOption: "Yes"
                  }, {
                    answer: "Vous",
                    parentOption: "No"
                  }
                ]
              }
            ]
          }
        ]
      }

    }

    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Tu or Vous ?</h2>
          </div>
          <p className="App-intro">
            A simple app to help you figure out which second person French pronoun you should be using
          </p>
            <MuiThemeProvider>
              <MyAwesomeReactComponent />
            </MuiThemeProvider>
        </div>
      );
    }
  }

export default App;
