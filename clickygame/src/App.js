import React, { Component } from 'react';
import cats from "./cats.json";
import Wrapper from "./components/wrapper";

class App extends Component {

    state = {
        cat_arr: cats,
        catclicked: false,
        score: 0,
        id: 0,
        selected: []
    }

    handleInput = (clicked) => {

        if (this.state.selected.indexOf(clicked) !== -1) {
            this.setState({
                score: 0,
                selected: []
            })
        } else {

            if (this.state.score === 11) {
                this.setState({
                    score: 0,
                    selected: []
                });
            } else {
                this.setState({
                    score: this.state.score + 1,
                    selected: this.state.selected.concat(clicked)
                });
            }

        }




    }


    render() {
        return (
            <Wrapper
                score={this.state.score}
                cats_arr={this.state.cat_arr}
                handleInput={this.handleInput}
                id={cats.id}
            />
        );
    }
}

export default App;