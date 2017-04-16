import React, { Component } from 'react';
import Article from '../components/Article';
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    text: 'Reuters',
    value: 'reuters',
    image: { avatar: true, src: 'http://s3.reutersmedia.net/resources_v2/images/favicon/favicon-96x96.png' },
  },
  {
    text: 'Daily Mail',
    value: 'daily-mail',
    image: { avatar: true, src: 'http://www.dailymail.co.uk/apple-touch-icon.png' },
  },
  {
    text: 'Hacker News',
    value: 'hacker-news',
    image: { avatar: true, src: 'https://news.ycombinator.com/favicon.ico' },
  },
  {
    text: 'The Verge',
    value: 'the-verge',
    image: { avatar: true, src: 'http://cdn2.vox-cdn.com/uploads/chorus_asset/file/7395359/ios-icon.0.png' },
  },
  {
    text: 'The Next Web',
    value: 'the-next-web',
    image: { avatar: true, src: 'https://cdn2.tnwcdn.com/wp-content/themes/cyberdelia/assets/icons/apple-touch-icon-120x120.png?v=1492167659' },
  },
  {
    text: 'The Telegraph',
    value: 'the-telegraph',
    image: { avatar: true, src: 'https://icons.better-idea.org/lettericons/T-120-1a151b.png' },
  },
  {
    text: 'TechCrunch',
    value: 'techcrunch',
    image: { avatar: true, src: 'https://s0.wp.com/wp-content/themes/vip/techcrunch-2013/assets/images/homescreen_TCIcon_ipad_2x.png' },
  },
  {
    text: 'Reddit /r/all',
    value: 'reddit-r-all',
    image: { avatar: true, src: 'https://www.reddit.com/apple-touch-icon-precomposed.png' },
  },
  {
    text: 'Buzzfeed',
    value: 'buzzfeed',
    image: { avatar: true, src: 'https://www.buzzfeed.com/static-assets/img/touch-icon-ios_120.208a0e329cd6e8d831b21ae17fb6aabb.png' },
  },
];

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      token: '4a0c884044a74b0b93e82a3ba2c903dd',
      sortBy: 'latest',
      source: 'buzzfeed',
      articles: [],
    }

    this.getArticles = this.getArticles.bind(this);
  }

  handleChange = (e, { value }) => {
    this.setState({ source: value }, this.getArticles);
  };

  componentDidMount() {
    this.getArticles()
  }

  getArticles(){
    fetch(`https://newsapi.org/v1/articles?source=${this.state.source}&sortBy=${this.state.sortBy}&apiKey=${this.state.token}`)
    .then( (response) => response.json())
    .then( (json) => this.setState({articles: json.articles}));
  }

  render() {
    return (

      <div className="container">
        <div className="top">
          Show me posts by
          {' '}
          <Dropdown
            inline
            defaultValue={this.state.source}
            onChange={this.handleChange}
            options={friendOptions}
            defaultValue={friendOptions[0].value}
          />
        </div>
        {
          this.state.articles.length ? this.state.articles.map((item, index)=>{
            return <Article
              key={index}
              title={item.title}
              text={item.description}
              image={item.urlToImage}
            />
          }) : <Article />
        }
      </div>

    );
  }

}
