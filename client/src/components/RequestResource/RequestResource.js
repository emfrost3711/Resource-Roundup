import React, {Component} from "react";
import { userInfo } from "os";
import { Form, Input, Button, Radio,Card } from 'antd';



class Request extends Component {
    constructor() {
        super();
        this.state = {
          formLayout: 'horizontal',
        };
      }
    
      handleFormLayoutChange = e => {
        this.setState({ formLayout: e.target.value });
      };

    componentDidMount() {
        // API function to get users favorites
    }
    

    render () {
        const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
        return (
            <>
            <Card 
            title="Request a Resource"
            style={{
        width: '50%', height: "auto",
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.85)',
        marginBottom: 16,
        fontWeight: 500,
      }}
    >
       <div>
        <Form layout={formLayout}>
          
          <Form.Item label="Name" {...formItemLayout}>
            <Input placeholder="..." />
          </Form.Item>
          <Form.Item label="Message" {...formItemLayout}>
            <Input placeholder="..." />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>

   
  </Card>
            </>
        )
    }
}

export default Request;