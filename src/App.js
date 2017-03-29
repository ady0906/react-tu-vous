import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import logo from './logo.svg';
import './App.css';



class App extends Component {

// how to save state to let app know what question one is on

  constructor(props) {
    super(props);
      this.state = {
        nodeId: 1
      }
    }

// update App state upon onClick event trigger

    changeNode = (currNodeId, optionPick) => {

    }

    bleble = () => {
      console.log("bleble")
    };


    render() {

// if node has child options, render them as clickable buttons
  // go back to Materialui when functionality has been implemented

      let optionButtons;

      if (this.props.node.childOptions != null) {
        optionButtons = this.props.node.childOptions.map(function (node, index) {

        })
      }

      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Tu or Vous ?</h2>
          </div>
          <p className="App-intro">
            A simple app to help you figure out which second person French pronoun you should be using
          </p>
          <section>

            <h4>Are you an adult ? </h4>
            <button>Yes</button>
            &nbsp;
            <button>No</button>

        </section>
        </div>
      );
    }
  }

  // decision tree object to go down as questionaire being answered

        let tree = {
          question: "Are you an adult ?",
          nodeId: 1,
          childOptions: [
            "Yes",
            "No"
          ],
          childNodes: [
            {
              question: "Are you speaking to a child ?",
              nodeId: 2,
              parentOption: "Yes",
              childOptions: ["Yes", "No"],
              childNodes: [
                {
                  question: "Is the child a prince or something ?",
                  nodeId: 3,
                  childNodes: [
                    {
                      answer: "Tu"
                    }, {
                      answer: "Vous"
                    }
                  ]
                }, {
                  question: "You are speaking to ...",
                  nodeId: 4,
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
                      nodeId: 5,
                      parentOption: "A friend or lover"
                    }, {
                      question: "God ?",
                      nodeId: 6,
                      parentOption: "Someone you don't formally know",
                      childOptions: [
                        "Yes", "No"
                      ],
                      childNodes: [
                        {
                          answer: "Tu (believe it or not)",
                          nodeId: 7,
                          parentOption: "Yes"
                        },
                        {
                          question: "Is this someone considerably older (say, a half generation or more) than you ?",
                          nodeId: 8,
                          parentOption: "No",
                          childOptions: ["Yes", "No"],
                          childNodes: [
                            {
                              answer: "Vous",
                              parentOption: "Yes",
                              nodeId: 25
                            }, {
                              question: "Did you participate in the French 'Mai 68' riots demanding government reform and free love ?",
                              nodeId: 26,
                              parentOption: "No",
                              childOptions: ["Yes", "No"],
                              childNodes: [
                                {
                                  question: "Come on, really ?",
                                  nodeId: 27,
                                  parentOption: "Yes",
                                  childOptions: ["Swear to god", "Ok, maybe not"],
                                  childNodes: [
                                    {
                                      answer: "Tu",
                                      nodeId: 28,
                                      parentOption: "Swear to god"
                                    },
                                    {
                                      question: "Do you consider this person a peer, that is, a fellow student, the coworker in the next cubicle, an Internet chat room acquaintance or someone you met in a bar last night and just woke up next to ?",
                                      nodeId: 29,
                                      parentOption: "Ok, maybe not",
                                      childOptions: ["Yes", "No", "Not sure"],
                                      childNodes: [
                                        {
                                          answer: "Tu",
                                          nodeId: 30,
                                          parentOption: "Yes"
                                        },
                                        {
                                          answer: "Vous",
                                          nodeId: 31,
                                          parentOption: "No"
                                        },
                                        {
                                          question: "Do you feel lucky ?",
                                          nodeId: 32,
                                          parentOption: "Not sure",
                                          childOptions: ["Yes", "No"],
                                          childNodes: [
                                            {
                                              answer: "Tu",
                                              nodeId: 33,
                                              parentOption: "Yes"
                                            },
                                            {
                                              answer: "Vous",
                                              nodeId: 34,
                                              parentOption: "No"
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
                        }
                      ]
                    }, {
                      question: "Are you and your spouse aristocrats ?",
                      nodeId: 9,
                      parentOption: "Your spouse",
                      childOptions: [
                        "Yes", "No"
                      ],
                      childNodes: [
                        {
                          answer: "Tu",
                          nodeId: 10,
                          parentOption: "No"
                        },
                        {
                          answer: "Vous",
                          nodeId: 11,
                          parentOption: "Yes"
                        }
                      ]
                    },
                    {
                    answer: "Best to ask",
                    parentOption: "Your father-in-law",
                    nodeId: 16
                  }, {
                    question: "Is your company laid back ?",
                    childOptions : ["Yes", "No"],
                    parentOption: "Your boss",
                    nodeId: 17,
                    childNodes: [
                      {
                        answer: "Tu",
                        parentOption: "Yes",
                        nodeId: 18
                      }, {
                        question: "Usually a 'vous' situation ... Unless this is a showdown",
                        parentOption: "No",
                        nodeId: 19,
                        childOptions: ["Yes", "No"],
                        childNodes: [
                          {
                            answer: "Tu",
                            parentOption: "Yes",
                            nodeId: 20
                          }, {
                            answer: "Vous",
                            parentOption: "No",
                            nodeId: 21
                          }
                        ]
                      }
                    ]
                  }, {
                    question: "Is your teacher young enough to be your daughter or son ?",
                    parentOption: "Your teacher",
                    childOptions: ["Yes", "No"],
                    nodeId: 22,
                    childNodes: [
                      {
                        answer: "Tu",
                        parentOption: "Yes",
                        nodeId: 23
                      },
                      {
                        answer: "Vous",
                        parentOption: "No",
                        nodeId: 24
                      }
                    ]
                  }
                  ]
                }
              ]
            }, {
              question: "Are you speaking to an adult ?",
              nodeId: 12,
              childOptions: ["Yes", "No"],
              childNodes: [
                {
                  question: "Is the adult a family member ?",
                  nodeId: 13,
                  parentOption: "Yes",
                  childOptions: ["Yes", "No"],
                  childNodes: [
                    {
                      answer: "Tu",
                      nodeId: 14,
                      parentOption: "Yes"
                    }, {
                      answer: "Vous",
                      nodeId: 15,
                      parentOption: "No"
                    }
                  ]
                }
              ]
            }
          ]
        }

export default App;
