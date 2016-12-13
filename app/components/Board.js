import React from 'react';
import Field from './Field';

class Board extends React.Component {
  componentWillMount() {
    this.setState({
      stones: [
        [],
        [],
        [],
        [],
        [],
        []
      ]
    });
  }

  handleClick = (col) => {
    const stones = this.state.stones;
    var newStones = stones.slice(0)
    var row = this.nextEmptyRow(col);

    if (row < 6){
      newStones[row][col] = [1]
      this.setState({
        stones: newStones
      });
    }
  }

  nextEmptyRow = (col) => {
    const stones = this.state.stones;
    for (var row = 0; row < 6; row++) {
      if (typeof this.state.stones[row][col] == 'undefined') {
        return row;
      }
    }
  }

  fieldsForRow = function(row) {
    const stones = this.state.stones;
    var fields = [];
    for (var col = 0; col < 7; col++) {
      fields.push(
          <td onClick={this.handleClick.bind(null, col)}>
            <Field stone={stones[5 - row][col]} />
          </td>
      )
    }

    return fields;
  }

  render() {
    var rows = [];
    for (var i = 0; i < 6; i++) {
      rows.push(
        <tr>
          {this.fieldsForRow(i)}
        </tr>);
    }

    return(
      <div id='board'>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  };
}

export default Board;
