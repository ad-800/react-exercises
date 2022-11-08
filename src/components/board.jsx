import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(9).fill(null),
      turn: true
    };
  }

  handleClick(n) {
    const copy = this.state.board.slice();
    if (!copy[n]) {
      copy[n] = this.state.turn ? 'X' : 'O';
      this.setState({board: copy, turn: !this.state.turn});
    }
  }

  renderSquare(n) {
    return <Square value={this.state.board[n]} onClick={() => this.handleClick(n)}/>
  }

  render() {
    return (
      <div>
        <h2>Next Turn: {this.state.turn ? 'X' : 'O'}</h2>
        <div className='flex-board'>
          <div className='row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className='row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className='row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

function winner(board) {
  const winningCombos = [
    [0, 4, 8],
    [0, 1, 2],
    [0, 3, 6],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8]
  ];

  winningCombos.forEach(combo => {
    const [a, b, c] = combo;
    if board[a]
  });
}

export default Board;
