import { Component } from 'solid-js';
import BaseDemoView from './shared/Demo.view';

const DemoView: Component = () => {
  return (
    <BaseDemoView
      initialVisibleActions="all"
    />
  );
}

export default DemoView;