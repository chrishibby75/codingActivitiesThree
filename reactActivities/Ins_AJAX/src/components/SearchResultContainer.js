import React from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: []
        };
      }

    componentDidMount() {
        this.searchGiphy("puppies");
    }

    searchGiphy = query => {
        API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGiphy(this.state.search);
    };

    render() {
        return(
            <div>
                <SearchForm 
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <ResultList results={this.state.results} />
            </div>
        );
    }
}

export default SearchResultContainer;