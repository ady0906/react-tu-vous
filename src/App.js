import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import logo from './logo.svg';
import './App.css';



class App extends Component {

// how to save state to let app know what question one is on

  constructor(props) {
    super(props);
      this.state = {

      }

  // decision tree object to go down as questionaire being answered

      let tree = {
        question: "Are you an adult ?",
        nodeid: 1,
        childOptions: [
          "Yes",
          "No"
        ],
        childNodes: [
          {
            question: "Are you speaking to a child ?",
            nodeid: 2,
            parentOption: "Yes",
            childOptions: ["Yes", "No"],
            childNodes: [
              {
                question: "Is the child a prince or something ?",
                nodeid: 3,
                childNodes: [
                  {
                    answer: "Tu"
                  }, {
                    answer: "Vous"
                  }
                ]
              }, {
                question: "You are speaking to ...",
                nodeid: 4,
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
                    nodeid: 5,
                    parentOption: "A friend or lover"
                  }, {
                    question: "God ?",
                    nodeid: 6,
                    parentOption: "Someone you don't formally know",
                    childOptions: [
                      "Yes", "No"
                    ],
                    childNodes: [
                      {
                        answer: "Tu (believe it or not)",
                        nodeid: 7,
                        parentOption: "Yes"
                      },
                      {
                        question: "Is this someone considerably older (say, a half generation or more) than you ?",
                        nodeid: 8,
                        parentOption: "No",
                        childOptions: ["Yes", "No"],
                        childNodes: [
                          {
                            answer: "Vous",
                            parentOption: "Yes",
                            nodeid: 25
                          }, {
                            question: "Did you participate in the French 'Mai 68' riots demanding government reform and free love ?",
                            nodeid: 26,
                            parentOption: "No",
                            childOptions: ["Yes", "No"],
                            childNodes: [
                              {
                                question: "Come on, really ?",
                                nodeid: 27,
                                parentOption: "Yes",
                                childOptions: ["Swear to god", "Ok, maybe not"],
                                childNodes: [
                                  {
                                    answer: "Tu",
                                    nodeid: 28,
                                    parentOption: "Swear to god"
                                  },
                                  {
                                    question: "Do you consider this person a peer, that is, a fellow student, the coworker in the next cubicle, an Internet chat room acquaintance or someone you met in a bar last night and just woke up next to ?",
                                    nodeid: 29,
                                    parentOption: "Ok, maybe not",
                                    childOptions: ["Yes", "No", "Not sure"],
                                    childNodes: [
                                      {
                                        
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }, {
                    question: "Are you and your spouse aristocrats ?",
                    nodeid: 9,
                    parentOption: "Your spouse",
                    childOptions: [
                      "Yes", "No"
                    ],
                    childNodes: [
                      {
                        answer: "Tu",
                        nodeid: 10,
                        parentOption: "No"
                      },
                      {
                        answer: "Vous",
                        nodeid: 11,
                        parentOption: "Yes"
                      }
                    ]
                  },
                  {
                  answer: "Best to ask",
                  parentOption: "Your father-in-law",
                  nodeid: 16
                }, {
                  question: "Is your company laid back ?",
                  childOptions : ["Yes", "No"],
                  parentOption: "Your boss",
                  nodeid: 17
                  childNodes: [
                    {
                      answer: "Tu",
                      parentOption: "Yes",
                      nodeid: 18
                    }, {
                      question: "Usually a 'vous' situation ... Unless this is a showdown",
                      parentOption: "No",
                      nodeid: 19,
                      childOptions: ["Yes", "No"],
                      childNodes: [
                        {
                          answer: "Tu",
                          parentOption: "Yes",
                          nodeid: 20
                        }, {
                          answer: "Vous",
                          parentOption: "No",
                          nodeid: 21
                        }
                      ]
                    }
                  ]
                }, {
                  question: "Is your teacher young enough to be your daughter or son ?",
                  parentOption: "Your teacher",
                  childOptions: ["Yes", "No"],
                  nodeid: 22,
                  childNodes: [
                    {
                      answer: "Tu",
                      parentOption: "Yes",
                      nodeid: 23
                    },
                    {
                      answer: "Vous",
                      parentOption: "No",
                      nodeid: 24
                    }
                  ]
                }
                ]
              }
            ]
          }, {
            question: "Are you speaking to an adult ?",
            nodeid: 12,
            childOptions: ["Yes", "No"]
            childNodes: [
              {
                question: "Is the adult a family member ?",
                nodeid: 13,
                parentOption: "Yes",
                childOptions: [
                  "Yes", "No"
                ]
                childNodes: [
                  {
                    answer: "Tu",
                    nodeid: 14,
                    parentOption: "Yes"
                  }, {
                    answer: "Vous",
                    nodeid: 15,
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
