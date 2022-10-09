/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {
  Row,
  Card,
  CardBody,
  Input,
  CardTitle,
  FormGroup,
  Label,
  Button,
  Form,
} from 'reactstrap';
import { injectIntl } from 'react-intl';

import { RangeTooltip } from 'components/common/SliderTooltips';
import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

const SearchPage = ({ match, intl, userEmail }) => {
  const { messages } = intl;
  return (
    <>
      <>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.form-layouts" match={match} />
            <Separator className="mb-5" />
          </Colxx>
        </Row>
        <Button
          style={{
            position: 'absolute',
            right: '100px',
            zIndex: 1,
            top: '100px',
          }}
        >
          Add new Filter
        </Button>
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
                      placeholder={messages['forms.email']}
                      value={userEmail}
                      disabled
                    />
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </>
      <>
        <Row className="mb-4">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="forms.addFilter" />
                </CardTitle>
                <Colxx xxs="12" sm="6">
                  <label>
                    <IntlMessages id="form.max-range" />
                  </label>
                  <RangeTooltip
                    min={500}
                    max={1500}
                    className="mb-5"
                    defaultValue={[800, 1200]}
                    allowCross={false}
                    pushable={100}
                  />
                </Colxx>
                <FormGroup>
                  <Label for="areaCode">
                    <IntlMessages id="form.area-code" />
                  </Label>
                  <Input
                    type="text"
                    name="Areacode"
                    id="areaCode"
                    tabIndex={-1}
                    placeholder={messages['form.area-code']}
                    onChange={(e) => e.target.value}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="areaCode">
                    <IntlMessages id="form.no-of-bedrooms" />
                  </Label>
                  <Input
                    type="text"
                    name="NoOfBedrooms"
                    id="noOfBedrooms"
                    tabIndex={-1}
                    placeholder={messages['form.no-of-bedrooms']}
                    onChange={(e) => e.target.value}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="propertyType">
                    <IntlMessages id="form.property-type" />
                  </Label>
                  <Input
                    type="text"
                    name="Property Type"
                    id="propertyType"
                    tabIndex={-1}
                    placeholder={messages['form.property-type']}
                    onChange={(e) => e.target.value}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="radius">
                    <IntlMessages id="form.radius" />
                  </Label>
                  <Input
                    type="text"
                    name="radius"
                    id="radius"
                    tabIndex={-1}
                    placeholder={messages['form.radius']}
                    onChange={(e) => e.target.value}
                  />
                </FormGroup>
                <Button color="primary" className="mt-4">
                  <IntlMessages id="forms.proceeds" />
                </Button>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </>
    </>
  );
};

export default injectIntl(SearchPage);
