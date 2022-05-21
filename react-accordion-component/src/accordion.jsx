import React from 'react';

const topics = [
  {
    id: '1',
    name: 'HTML',
    details: 'Hypertext Markup Language is the standard markuplanguage for creating web pages and web applications.'
  },
  {
    id: '2',
    name: 'CSS',
    details: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document.'
  },
  {
    id: '3',
    name: 'JavaScript',
    details: 'JavaScript is a high-level interpreted programming language that conforms to the ECMAScript Specification.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // when user clicks a topic, update the state to the specific topic index
  handleClick(event) {
    if (this.state.openTopic === null) {
      this.setState({ openTopic: event.target.id });
    } else if (this.state.openTopic === event.target.id) {
      this.setState({ openTopic: null });
    }
  }

  render(event) {
    return (
      <div className='container'>
        <ul>
          {
            topics.map((topic, index) => {
              return (
                <li key={topic.id}>
                  <h2 id={index} onClick={this.handleClick} className='topic'>{topic.name}</h2>
                  <p className={index.toString() === this.state.openTopic
                    ? 'details'
                    : 'details hidden'
                    }> {topic.details}</p>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Accordion;
