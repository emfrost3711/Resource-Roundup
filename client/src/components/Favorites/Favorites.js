import React, {Component} from "react";
import { Card } from 'antd';
import API from "../../utils/API";
import FavoritesCard from "../FavoritesCard";


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
    {this.state.favorites.map((favorite, index) =>
        <FavoritesCard
            favoriteId={favorite._id}
            key={index}
            title={favorite.title}
            link={favorite.link}
            image={favorite.image}
            likes={favorite.likes}
            dislikes={favorite.dislikes}
            fileType={favorite.fileType}
            user={this.props.user}
            />
    )}
  </Card>
            </>
        )
    }
}

export default Favorites;