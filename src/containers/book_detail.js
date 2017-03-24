import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render(){
    if (!this.props.book){
        return (
          <div className="details_container">
              <h3>Select a book to get started!</h3>
          </div>);
    }
    return (
      <div className="details_container">
        <h3>Details for:</h3>
        <h4>Title: {this.props.book.title}</h4>
        <h4>Pages: {this.props.book.pages}</h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
