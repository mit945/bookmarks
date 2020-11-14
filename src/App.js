import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Bookmark Lists",
      act: 0,
      index: "",
      datas: [],
    };
  }

  componentDidMount() {
    this.refs.time.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    let datas = this.state.datas;

    let time = this.refs.time.value;
    let url = this.refs.url.value;
    let desc = this.refs.desc.value;

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

    this.refs.myForm.reset();
    this.refs.time.focus();
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });

    this.refs.myForm.reset();
    this.refs.url.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.time.value = data.time;
    this.refs.url.value = data.url;
    this.refs.desc.value = data.desc;
    this.setState({
      act: 1,
      index: i,
    });
    this.refs.url.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <>
        <h1> {this.state.title}</h1>
        <form ref="myForm">
          <label htmlFor="time">Time: </label>
          <input id="time" type="datetime-local" ref="time" />
          <br />
          <label htmlFor="url">Link Address(url): </label>
          <input
            id="url"
            type="text"
            ref="url"
            placeholder="https://www.bookmark.com"
          />
          <br />
          <label htmlFor="desc">Description: </label>
          <input
            id="desc"
            type="text"
            ref="desc"
            placeholder="this is a website"
          />
          <br />
          <button onClick={(e) => this.fSubmit(e)}>submit</button>
        </form>
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
                <blockquote>{data.desc}</blockquote>
              </div>
              <button onClick={() => this.fRemove(i)}>Remove</button>
              <button onClick={() => this.fEdit(i)}>edit</button>
            </div>
          ))}
        </pre>
      </>
    );
  }
}

export default App;
