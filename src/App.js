import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
    this.state = {
      title: "Bookmark Lists",
      act: 0,
      index: "",
      datas: [],
    };
  }

  componentDidMount() {
    // this.refs.time.focus();
    this.inputText.current.focus();
    console.log(this.inputText);
  }

  fSubmit = (e) => {
    e.preventDefault();
    let datas = this.state.datas;

    let time = this.inputText.current.time.value;
    let url = this.inputText.current.url.value;
    let desc = this.inputText.current.desc.value;

    if (this.state.act === 0) {
      let data = {
        time,
        url,
        desc,
      };
      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].time = time;
      datas[index].url = url;
      datas[index].desc = desc;
    }

    this.setState({
      datas: datas,
      act: 0,
    });

    this.inputText.current.reset();
    this.inputText.current.time.focus();
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });

    this.inputText.current.reset();
    this.inputText.current.url.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.inputText.current.time.value = data.time;
    this.inputText.current.url.value = data.url;
    this.inputText.current.desc.value = data.desc;
    this.setState({
      act: 1,
      index: i,
    });
    this.inputText.current.url.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <>
        <h1 className="header-name"> {this.state.title}</h1>
        <form ref={this.inputText} className="bookmark-form">
          <label htmlFor="time">Time: </label>
          <input
            id="time"
            type="datetime-local"
            ref={this.inputText}
            className="form-input-time"
          />
          <br />
          <label htmlFor="url">Link Address(url): </label>
          <input
            id="url"
            type="text"
            ref={this.inputText}
            placeholder="https://www.bookmark.com"
            className="form-input-url"
          />
          <br />
          <label htmlFor="desc">Description: </label>
          <input
            id="desc"
            type="text"
            ref={this.inputText}
            placeholder="this is a website"
            className="form-input-desc"
          />
          <br />
          <button onClick={(e) => this.fSubmit(e)}>submit</button>
        </form>
        <div className="items">
          <pre>
            {datas.map((data, i) => (
              <div key={i} className="myList">
                {i + 1}.<br />
                <code>
                  <h5>{data.time}</h5>
                </code>
                <li>
                  <a href={data.url}>{data.url}</a>
                </li>
                <br />
                <div>
                  About: <br />
                  <blockquote className="description">{data.desc}</blockquote>
                </div>
                <button onClick={() => this.fRemove(i)}>Remove</button>
                <button onClick={() => this.fEdit(i)}>edit</button>
              </div>
            ))}
          </pre>
        </div>
      </>
    );
  }
}

export default App;
