import React from 'react';
import PropTypes from 'prop-types';
import StatGraphs from './StatGraphs';
import AppCard from '../../../../@sling/core/AppCard';
import AppSelect from '../../../../@sling/core/AppSelect';
import {useIntl} from 'react-intl';

const VisitorPageView = ({data}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const {messages} = useIntl();
  return (
    <AppCard
      height={1}
      title={messages['dashboard.analytics.visitorsPageViews']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }>
      <StatGraphs data={data} />
    </AppCard>
  );
};
export default VisitorPageView;

VisitorPageView.defaultProps = {
  data: [],
};

VisitorPageView.propTypes = {
  data: PropTypes.array,
};
