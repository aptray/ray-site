import React, { Component } from 'react';
import { Spin } from 'amos-framework';
import MonacoEditor, { loadMonaco } from 'amos-code-actuator/lib/monaco';
import RunAF from './RunAF';

class AsyncRunner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };

    this._mounted = true;

    this.load();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  load(){
    loadMonaco({
      monacoPrefix: window.monacoPrefix
    }).then((monaco) => {
      MonacoEditor.setGlobalMonaco(monaco);
      if (this._mounted){
        this.setState({
          ready: true
        });
      }
    });
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

export default AsyncRunner;
