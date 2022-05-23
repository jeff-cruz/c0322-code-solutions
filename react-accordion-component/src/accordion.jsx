import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTopic: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const topicID = event.target.id;
    if (this.state.openTopic === topicID) {
      this.setState({ openTopic: null });
    } else {
      this.setState({ openTopic: topicID });
    }
  }

  render(event) {
    const topics = this.props.topics;
    const data = topics.map(topic =>
        <li key={topic.id}>
          <h2 id={topic.id} onClick={this.handleClick} className='topic'>
            {topic.name}
          </h2>
          <p className={this.state.openTopic === topic.id ? 'details' : 'details hidden'}>
            {topic.details}
          </p>
        </li>
    );

    return (
      <div className='container'>
        <ul>
          {data}
        </ul>
      </div>
    );
  }
}

export default Accordion;
