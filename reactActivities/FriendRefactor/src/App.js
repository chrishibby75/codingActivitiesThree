import React from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
     
     friend
     
        };
     
      }

    removeFriend = id => {
        const friends = this.state.friends.filter(friend => friend.id !== id);
        this.setState({ friends });
    };

    render() {
        return(
        <Wrapper>
            <Title>Friends List</Title>
            {this.state.friends.map(friend => (
                <FriendCard
                removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                name={friend.name}
                image={friend.image}
                occupation={friend.occupation}
                location={friend.location}
                />
            ))}
        </Wrapper>
        );
    }
}

export default App;