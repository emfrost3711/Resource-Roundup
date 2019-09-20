import React, {Component} from "react";
import { Card } from 'antd';
import { userInfo } from "os";

class Favorites extends Component {

    state = {
        favorites: []
    }

    componentDidMount() {
        // API function to get users favorites
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
    <p>
      Group title
    </p>
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
            </>
        )
    }
}

export default Favorites;