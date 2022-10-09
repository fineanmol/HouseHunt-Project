import React from 'react';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { useHistory, withRouter } from 'react-router-dom';

import { Row } from 'reactstrap';
import { injectIntl } from 'react-intl';
import 'react-tagsinput/react-tagsinput.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'rc-switch/assets/index.css';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';

const ThankYouPage = ({ match }) => {
  const history = useHistory();
  console.log({ history });

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.home" match={match} />
          <Separator className="mb-5" />
        </Colxx>
        <h1>
          Thank you for using the service, You will start receiving the house
          mails
        </h1>
      </Row>
    </>
  );
};

export default withRouter(injectIntl(ThankYouPage));
