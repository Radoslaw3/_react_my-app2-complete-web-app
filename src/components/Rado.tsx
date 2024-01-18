import React from 'react';

interface RadoProps {
  text: string;
}

interface RadoState {
  color: string;
}

class RadoComponent extends React.Component<RadoProps, RadoState> {
  constructor(props: RadoProps) {
    super(props);
    this.state = { color: 'red' };
  }

  componentDidMount() {
    setInterval(() => {
      const colors = ['red', 'green', 'blue'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      this.setState({ color: colors[randomIndex] });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.props.text} World</h1>
      </div>
    );
  }
}

export default RadoComponent;
