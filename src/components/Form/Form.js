import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
} from 'reactstrap';

import './Form.scss';

class InputForm extends React.Component {
  render() {
    return (
      <div id="userInput">
        <Form id="userInput">
          <FormGroup>
            <Input type="name" name="name" id="userName" placeholder="What's In A Name?" />
            <Label for="exampleLink"></Label>
            <Input type="link" name="link" id="itemLink" placeholder="WWW.Drop That Link" />
          </FormGroup>
          <div className="col-3 radio-buttons">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="tutorial" />{' '}
                Tutorial
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="blog" />{' '}
                Blog
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="podcast" />{' '}
                Podcast
            </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="resource" />{' '}
                Resources
            </Label>
            </FormGroup>
          </div>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default InputForm;
