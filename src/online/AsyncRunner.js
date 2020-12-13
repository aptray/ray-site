import React, { Component } from 'react';
import { Spin } from 'amos-framework';
import RunAF from './RunAF';

const delay = 1000;

class AsyncRunner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }


  componentDidMount() {
    this.timeId = setInterval(() => {
      if (window.monaco && Object.keys(window.monaco).length > 0){
        clearInterval(this.timeId);
        this.setState({
          ready: true
        });
      }
    }, delay);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    if (this.state.ready){
      return <RunAF />;
    }
    return (
      <div className="loading-wrapper">
        <Spin type="scale" />
        正在加载编辑器...
      </div>
    );
  }
}

AsyncRunner.propTypes = {

};

export default AsyncRunner;
