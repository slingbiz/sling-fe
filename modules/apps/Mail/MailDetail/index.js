import React, {createRef, useEffect} from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import {useDispatch, useSelector} from 'react-redux';
import {onGetSelectedMail, onNullifyMail} from '../../../../redux/actions';
import {useRouter} from 'next/router';
import AppsContent from '../../../../@sling/wrappers/AppsContent';
import AppsHeader from '../../../../@sling/wrappers/AppsHeader';
import {Box} from '@material-ui/core';
import AppAnimate from '../../../../@sling/core/AppAnimate';
import {MailDetailSkeleton} from '../../../../@sling/core/Skeleton/MailDetailSkeleton';

const MailDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const contentRef = createRef();

  const id = router.query.all[1];
  const selectedMail = useSelector(({mailApp}) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, id]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box height={1} display='flex' flexDirection='column' ref={contentRef}>
      <AppsHeader>
        <MailDetailHeader history={history} selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody selectedMail={selectedMail} />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
