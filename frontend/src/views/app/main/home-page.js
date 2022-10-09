import React, { useState } from 'react';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { useHistory, withRouter } from 'react-router-dom';

import {
  Row,
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  CustomInput,
  Button,
  FormText,
  Form,
  Alert,
} from 'reactstrap';
import { injectIntl } from 'react-intl';
import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

const HomePage = ({ match, intl, userEmail, setUserEmail }) => {
  const { messages } = intl;
  const history = useHistory();
  console.log({ history });
  const [agreeCheckBox, setAgreeCheckBox] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitButton = () => {
    if (!validateEmail(userEmail)) {
      setShowAlert(!validateEmail(userEmail));
      // return (

      // );
      // alert('Please enter a valid email address');
    }
    if (!agreeCheckBox) {
      alert('Please accept Terms and Conditions');
    }
    if (agreeCheckBox && validateEmail(userEmail)) {
      history.push(`/app/search/`);
    }
    return <></>;
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.home" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="forms.basic" />
              </CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">
                    <IntlMessages id="forms.email" />
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    tabIndex={-1}
                    key="email-id"
                    placeholder={messages['forms.email']}
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                  />

                  <FormText color="muted">
                    <IntlMessages id="forms.email-muted" />
                  </FormText>
                </FormGroup>
                <Alert color="danger" className="rounded" isOpen={showAlert}>
                  <IntlMessages id="alert.danger-emailText" />
                </Alert>
                <FormGroup>
                  <CustomInput
                    type="checkbox"
                    id="exampleCustomCheckbox"
                    label="I agree with Terms & Conditions"
                    onChange={(e) => setAgreeCheckBox(e.target.value)}
                  />
                </FormGroup>
                <Button
                  color="primary"
                  className="mt-4"
                  onClick={() => {
                    handleSubmitButton();
                  }}
                >
                  <IntlMessages id="forms.proceeds" />
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};

export default withRouter(injectIntl(HomePage));
