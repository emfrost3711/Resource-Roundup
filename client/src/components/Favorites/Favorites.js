import React, {Component} from "react";
import { Card } from 'antd';
import API from "../../utils/API";
import ResourceCard from "../ResourceCard/ResourceCard";


class Favorites extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        API.showFavorites(this.props.userId)
        .then(favorites => {
            this.setState ({favorites: favorites.data.favorites})
            console.log(this.state);
        });
        // API function to get users favorites
        // API.getFavorites
    }

    render () {
        return (
            <>
            <Card 
            title="Favorite Resources"
            style={{
        width: '50%', height: "auto",
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
      }}
    >
    {this.state.favorites.forEach(favorite => {
        return <ResourceCard title= {favorite.title}/>

    }
        )}
  </Card>
            </>
        )
    }
}

export default Favorites;