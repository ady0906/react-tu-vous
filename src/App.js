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
        if (idList.indexOf(k) !== -1) throw `DecisionTree: duplicate ID ${k} in options`;

          let choice = this.getChoice(k);
          choice.id = k;

          let children = this.getChildren(k);

          for (let i = 0; i < children.length; i++) {
            let child = children[i];
            if (child.parent) throw `DecisionTree: tried to assign parent ${k} to child ${choice.children[i]} which already has parent ${child.parent}`;
            child.parent = k;
          }
        }
        console.log('init', this.inital, this.childNodes);
      }
      this.init();
    }

    $(() => {
      let tree = new DecisionTree(tree);
      let $list = $('#choices');
      let $title = $('h1');

      let current_id = null;
      let renderList = (items) => {
        let title = tree.getParentName(items[0].id);
        if (title) {
          $title.text(title);
        } else {
          $title.text('Are you an adult ?')
        }
      }
    })

// create buttons based on childNodes
  }


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
  initial: ["adult", "not-adult"],
  choices: {

    // first level

    "adult": {
      name: "I am an adult",
      children: ["adult-speaking-to-child", "adult-speaking-to-adult"],
    },

      "adult-speaking-to-child": {
        name: "speaking to a child",
        children: ["prince", "not-prince"]
      },

        "prince": {
          name: "this kid is royalty",
          answer: "Vous"
        },

        "not-prince": {
          name: "just a regular kid",
          answer: "Tu"
        },

      "adult-speaking-to-adult": {
        name: "speaking to an adult",
        children: ["friend-lover", "dont-formally-know", "spouse", "father-in-law", "boss", "teacher"]
      },

        "friend-lover": {
          name: "a friend or lover",
          answer: "Tu"
        },

        "dont-formally-know": {
          name: "someone you don't formally know",
          children: ["someone-considerably-older", "about-same-age-or-younger"]
        },

          "someone-considerably-older": {
            name: "considerably older than me",
            answer: "Vous"
          },

          "about-same-age-or-younger": {
            name: "about the same age or younger",
            children: []
          }

        "spouse": {
          name: "your spouse",
          children: ["you-are-aristocrats", "just-regular-folks"]
        },

        "father-in-law": {
          name: "your father in law",
          answer: "Best to ask"
        },

        "boss": {
          name: "your boss",
          children: ["laidback-company", "stern-office"]
        },

        "teacher": {
          name: "your teacher",
          children: ["older-teacher", "younger-teacher"]
        }









        "Yes": {
          question: "Is the child a prince or something ?",
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
          answer: "Tu"
        },
        "Someone you don't formally know": {
          question: "God ?",
          childOptions: ["Yes", "No"],
            childNodes: {
              "Yes": {
                answer: "Tu (believe it or not)"
              },
              "No": {
                question: "Is this someone considerably older (say, a half generation or more) than you ?",
                childOptions: ["Yes", "No"],
                childNodes: {
                  "Yes": {
                    answer: "Vous"
                  },
                  "No": {
                    question: "Did you participate in the French 'Mai 68' riots demanding government reform and free love ?",
                    childOptions: ["Yes", "No"],
                    childNodes: {
                      "Yes": {
                        question: "Come on, really ?",
                        childOptions: ["Swear to god"],
                        childNodes: {
                          "Swear to God": {
                            answer: "Tu"
                          }
                        }
                      },
                      "No": {
                        question: "Do you consider this person a peer, that is, a fellow student, the coworker in the next cubicle, an Internet chat room acquaintance or someone you met in a bar last night and just woke up next to ?",
                        childOptions: ["Yes", "No", "Not sure"],
                        childNodes: {
                          "Yes": {
                            answer: "Tu"
                          },
                          "No": {
                            answer: "Vous"
                          },
                          "Not sure": {
                            question: "Do you feel lucky ?",
                            childOptions: ["Yes", "No"],
                            childNodes: {
                              "Yes": {
                                answer: "Tu"
                              },
                              "No": {
                                answer: "Vous"
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
          childOptions: ["Yes", "No"],
          childNodes: {
            "No": {
              answer: "Tu"
            },
            "Yes": {
              answer: "Vous"
            }
          }
        },
        "Your father-in-law": {
          answer: "Best to ask"
        },
        "Your boss": {
          question: "Is your company laid back ?",
          childOptions : ["Yes", "No"],
          childNodes: {
            "Yes": {
              answer: "Tu"
            },
            "No": {
              question: "Usually a 'vous' situation ... Unless this is a showdown",
              childOptions: ["Yes", "No"],
              childNodes: {
                "Yes": {
                  answer: "Tu"
                },
                "No": {
                  answer: "Vous"
                }
              }
            }
          }
        },
        "Your teacher": {
          question: "Is your teacher young enough to be your daughter or son ?",
          childOptions: ["Yes", "No"],
          childNodes: {
            "Yes": {
              answer: "Tu"
            },
            "No": {
              answer: "Vous"
            }
          }
        }
      }
    }
  }
  },
  "No": {
    question: "Are you speaking to an adult ?",
    childOptions: ["Yes", "No"],
    childNodes: {
      "Yes": {
        question: "Is the adult a family member ?",
        childOptions: ["Yes", "No"],
        childNodes: {
          "Yes": {
            answer: "Tu"
          },
          "No": {
            answer: "Vous"
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
