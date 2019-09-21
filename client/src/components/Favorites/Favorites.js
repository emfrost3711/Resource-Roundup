import React, {Component} from "react";
import { Card } from 'antd';


class Favorites extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
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
    
  </Card>
            </>
        )
    }
}

export default Favorites;