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
        nodeId: 1,
        visible: true
      }
    }

// update App state upon onClick event trigger

    let decisionTree = (data) => {
      this.initial = tree.initial;
      this.childNodes = tree.childNodes;

// get array of choices for the root of the tree
      this.getInitial = () => {
        if (!this.initial) {
          throw 'No initial choices specified'
        } else {
          return this.getChildNodes(this.initial)
        }
      }

// get full choice data by specific id
      this.getChildNode = (id) => {
        if (!(id in this.childNodes)) {
          return false
        } else if (!('id' in this.childNodes[id])) {
          this.childNodes[id].id = id
        }
        return this.childNodes[id];
      }

      this.getChildNodes = (idList) => {
        if (!idList) return [];
        let list = [];
        for (let i = 0, ln = idList.length; i < ln; i++) {
          let childChoice = this.getChildNode(idList[i]);
          list.push(childChoice)
        }
        return list;
      }

// get array of choice data for parent id
    this.getChildren = (parentId) => {
      if (!(parentID in this.childNodes)) {
        return false
      } else if (!('children' in this.childNodes[parentId])) {
        return false;
      }
      let childIds = this.childNodes[parentId].children;
      return this.getChildnodes(childIds);
    }

// get array of choice data for parent(s) of id

    this.getParents = (id) => {
      let parents = [];
      let node = this.getChildNode(id);

      while (node.parent) {
        node = this.getChildNode(node.parent);
        parents.unshift(node);
      }
      return parents;
    }

// get array of ids for parents of specific id

    this.getParentIds = (id) => {
      let parents = this.getParents(id);
      let parentIds = [];
      for (let i = 0, ln = parents.length; i < ln; i++) {
        parentIds.push(parents[i].id)
      }
      return parentIds;
    }

// get 'option' props for parent of id

    this.getParentName = (id) => {
      let parent = this.getParents(id).pop();
      if (!parent) {
        return false;
      } else {
        return parent.name;
      }
    }

// init to insert ids into childNodes objects

    this.init = () => {
      let idList = [];

      for (let k in this.childNodes) {
        if (idList.indexOf(k) !== -1) {
          throw `DecisionTree: duplicate ID ${k} in options`;
        }
      }
    }


  }

    bleble = () => {
      console.log("bleble")
    };


    render() {

// if node has child options, render them as clickable buttons
  // go back to Materialui when functionality has been implemented

      let optionButtons;

      // if (this.props.node.childOptions != null) {
      //   optionButtons = this.props.node.childOptions.map(function (node, index) {
      //     return <button><App node={node}/></button>
      //   });
      // }

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
  initial: ["Yes", "No"],
  childNodes: {
    "Yes": {
      question: "Are you speaking to a child ?",
      nodeId: 2,
      childOptions: ["Yes", "No"],
      childNodes: {
        "Yes": {
          question: "Is the child a prince or something ?",
          nodeId: 3,
          childNodes: {
            "No": {
              answer: "Tu"
              },
            "Yes": {
              answer: "Vous"
              }
            }
          },
    "No": {
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
      childNodes: {
        "A friend or lover": {
          answer: "Tu",
          nodeId: 5,
        },
        "Someone you don't formally know": {
          question: "God ?",
          nodeId: 6,
          childOptions: ["Yes", "No"],
            childNodes: {
              "Yes": {
                answer: "Tu (believe it or not)",
                nodeId: 7
              },
              "No": {
                question: "Is this someone considerably older (say, a half generation or more) than you ?",
                nodeId: 8,
                childOptions: ["Yes", "No"],
                childNodes: {
                  "Yes": {
                    answer: "Vous",
                    nodeId: 25
                  },
                  "No": {
                    question: "Did you participate in the French 'Mai 68' riots demanding government reform and free love ?",
                    nodeId: 26,
                    childOptions: ["Yes", "No"],
                    childNodes: {
                      "Yes": {
                        question: "Come on, really ?",
                        nodeId: 27,
                        childOptions: ["Swear to god"],
                        childNodes: {
                          "Swear to God": {
                            answer: "Tu",
                            nodeId: 28,
                          }
                        }
                      },
                      "No": {
                        question: "Do you consider this person a peer, that is, a fellow student, the coworker in the next cubicle, an Internet chat room acquaintance or someone you met in a bar last night and just woke up next to ?",
                        nodeId: 29,
                        childOptions: ["Yes", "No", "Not sure"],
                        childNodes: {
                          "Yes": {
                            answer: "Tu",
                            nodeId: 30
                          },
                          "No": {
                            answer: "Vous",
                            nodeId: 31
                          },
                          "Not sure": {
                            question: "Do you feel lucky ?",
                            nodeId: 32,
                            childOptions: ["Yes", "No"],
                            childNodes: {
                              "Yes": {
                                answer: "Tu",
                                nodeId: 33
                              },
                              "No": {
                                answer: "Vous",
                                nodeId: 34
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "Your spouse": {
          question: "Are you and your spouse aristocrats ?",
          nodeId: 9,
          childOptions: ["Yes", "No"],
          childNodes: {
            "No": {
              answer: "Tu",
              nodeId: 10
            },
            "Yes": {
              answer: "Vous",
              nodeId: 11
            }
          }
        },
        "Your father-in-law": {
          answer: "Best to ask",
          nodeId: 16
        },
        "Your boss": {
          question: "Is your company laid back ?",
          childOptions : ["Yes", "No"],
          nodeId: 17,
          childNodes: {
            "Yes": {
              answer: "Tu",
              nodeId: 18
            },
            "No": {
              question: "Usually a 'vous' situation ... Unless this is a showdown",
              nodeId: 19,
              childOptions: ["Yes", "No"],
              childNodes: {
                "Yes": {
                  answer: "Tu",
                  nodeId: 20
                },
                "No": {
                  answer: "Vous",
                  nodeId: 21
                }
              }
            }
          }
        },
        "Your teacher": {
          question: "Is your teacher young enough to be your daughter or son ?",
          childOptions: ["Yes", "No"],
          nodeId: 22,
          childNodes: {
            "Yes": {
              answer: "Tu",
              nodeId: 23
            },
            "No": {
              answer: "Vous",
              nodeId: 24
            }
          }
        }
      }
    }
  }
  },
  "No": {
    question: "Are you speaking to an adult ?",
    nodeId: 12,
    childOptions: ["Yes", "No"],
    childNodes: {
      "Yes": {
        question: "Is the adult a family member ?",
        nodeId: 13,
        childOptions: ["Yes", "No"],
        childNodes: {
          "Yes": {
            answer: "Tu",
            nodeId: 14
          },
          "No": {
            answer: "Vous",
            nodeId: 15
          }
        }
      },
      "No": {
        answer: "Tu"
      }
    }
  }
}


export default App;
