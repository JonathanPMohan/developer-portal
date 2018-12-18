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
            <Label for="exampleEmail"></Label>
            <Input type="email" name="email" id="userName" placeholder="What's In A Name?" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input type="password" name="password" id="itemLink" placeholder="Drop That Link." />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend></legend>
            <div id="radioButtons">
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
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default InputForm;
