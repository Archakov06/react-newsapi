import React, { Component } from 'react';

export default class Article extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (

      <div className="article">
        <h2 className="article__title"><a target="_blank" href={this.props.url}>{this.props.title}</a></h2>
        <div className="article__image" style={{backgroundImage: `url(${this.props.image})`}}></div>
        <div className="article__text">{this.props.text}</div>
        {this.props.title && <button className="article__more-btn">More</button>}
      </div>

    );
  }

}
