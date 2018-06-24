import React, { Component } from 'react';
import './App.css';
import cats from "./cats.json"
//import "./components/somepage";
//import Home from './components/somepage';
//import Container from "./components/container";

class App extends Component {

    state = {
        cat_arr: cats,
        catclicked: false,
        score: 0,
        index: 0
    }

    componentDidMount() {
        this.drawgrid();
    }

    random_index = () => {
        const qarray = new Array(12);
        let j = 0;
        const min = 0;
        const max = 11;

        while (j < qarray.length) {
            let randnum = Math.floor(Math.random() * (max - min + 1) + min);

            let found = false;

            for (let i = 0; i < qarray.length; i++) {
                if (qarray[i] === randnum) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                qarray[j] = randnum;
                j++;
            }
        }
        console.log(qarray);
        return qarray;
    }

    drawgrid = () => {
        //console.log(this.state.cat_arr);
        //console.log("Drawgrid");
        //<img onClick={this.addscore} className="pic" alt="Cat Pic" src={this.state.cat_arr[this.state.index].image} />

        const new_pos = this.random_index();
        let grid = '<div id="board" className="card-body">';
        for (var i = 0; i < new_pos.length; i++) {
            this.setState({ index: new_pos[i] });
            grid = grid + '<li><img onClick={this.addscore} className="pic" alt="Cat Pic{this.state.cat_arr[this.state.index].id}" src={this.state.cat_arr[this.state.index].image} /></li>'
        }
        grid = grid + '</div>';
        console.log(grid);

        let board = document.getElementById("board");
        board.insertAdjacentHTML("beforeend", grid);
    }

    addscore = () => {
        this.setState({ score: this.state.score + 1 });
        this.setState({ catclicked: true });
    };




    render() {
        return (
            <div>
                <div>
                    <h1>Home Page</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
                        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula
                        in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit.
                        Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
                        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus.
                    </p>
                    <div className="card text-center">

                        <div id="board" className="card-body">



                        </div>

                    </div>
                </div>
                <div className="contstyle">
                    <p>{this.state.score}</p>
                </div>
            </div>
        );
    }
}

export default App;

//<div className="card-header">
//    Featured
//                        </div>
//<h5 className="card-title">Special title treatment</h5>
//    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//<a onClick={this.addscore} href="#" className="btn btn-primary">Go somewhere else</a>
//<div className="card-footer text-muted">
//    2 days ago
//</div>
//<img onClick={this.addscore} className="pic" alt="Cat Pic" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350" />
//<img onClick={this.addscore} className="pic" alt="Cat Pic" src={this.state.cat_arr[this.state.index].image} />