import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component{
    constructor() {
        super()
        this.state = {
            loading: true,
            jokes: [],
            searchfield: ''
        }
    }

    async componentDidMount(){
               const response = await fetch('https://programming-quotes-api.herokuapp.com/Quotes?count=10');
               const data  = await response.json();
                this.setState({ jokes: data, loading: false});  
             }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const { loading, jokes, searchfield } = this.state;
        const filteredQuotes = jokes.filter(joke =>{
            return joke.en.toLowerCase().includes(searchfield.toLowerCase());
        })
            return( 
                    <div>
                    { loading ? 
                        (<h1>Loading</h1>) :
                            (
                                    <div className="tc">
                                        <h1 className="f1">Programming Quotes</h1>
                                        <SearchBox searchChange={this.onSearchChange}/>
                                        <Scroll>
                                            <ErrorBoundry>
                                            <CardList jokes={filteredQuotes}/>
                                            </ErrorBoundry>
                                        </Scroll>
                                    </div>  
                            )
                    };
                    </div>
            );
            
    }
}

export default App;