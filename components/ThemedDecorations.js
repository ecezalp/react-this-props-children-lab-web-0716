import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const newChildren = React.Children.map(this.props.children, child => {
        return React.cloneElement(child, {
          className: this.props.theme
        })
      })

    return (
      <div>
        {newChildren}
      </div>  
    )
  }
}

module.exports = ThemedDecorations
