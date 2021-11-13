import React from 'react';
import AppCard from '../../../../@sling/core/AppCard';
import {useIntl} from 'react-intl';
import CustomerItem from './CustomerItem';
import AppList from '../../../../@sling/core/AppList';
import Scrollbar from '../../../../@sling/core/Scrollbar';

const NewCustomers = (props) => {
  const {messages} = useIntl();
  return (
    <AppCard
      title={messages['eCommerce.newCustomers']}
      contentStyle={{paddingRight: 0, paddingLeft: 0}}>
      <Scrollbar style={{maxHeight: 280}}>
        <AppList
          data={props.newCustomers}
          renderRow={(item) => (
            <CustomerItem listStyle='paddingX' key={item.id} item={item} />
          )}
        />
      </Scrollbar>
    </AppCard>
  );
};

export default NewCustomers;
