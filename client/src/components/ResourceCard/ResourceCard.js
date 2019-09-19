import React, {Component} from "react";
import API from "../../utils/API";
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

class ResourceCard extends Component {

    state = {
        loading: true,
      };
    
    componentDidMount() {
        this.loading()
    }
    
    loading() {
        setTimeout(()=> {
            this.setState({
                loading: false
            })
        }, 1000)  
    }

      render() {
        const { loading } = this.state;
    
        return (
          <div>

    
<Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <Icon type="setting" key="setting" />,
      <Icon type="edit" key="edit" />,
      <Icon type="ellipsis" key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
    
            <Card
              style={{ width: 300, marginTop: 16 }}
              actions={[
                <Icon type="setting" key="setting" />,
                <Icon type="edit" key="edit" />,
                <Icon type="ellipsis" key="ellipsis" />,
              ]}
            >
              <Skeleton loading={loading} avatar active>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                  
                />
              </Skeleton>
            </Card>
          </div>
        );
      }
    }



export default ResourceCard;