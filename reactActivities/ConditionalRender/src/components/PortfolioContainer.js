import React from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

class PortfolioContainer extends React.Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Home />
        }
        else if (this.state.currentPage === "About") {
            return <About />
        }
        else if (this.state.currentPage === "Blog") {
            return <Blog />
        }
        else {
            return <Contact />
        }
    };

    render() {
        return(
            <div>
                <NavTabs
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default PortfolioContainer;