import mock from '../../MockConfig';
import ecommerceData from '../../db/extraPages/ecommerce/ecommerceData';

mock.onGet('/api/product/list').reply(200, ecommerceData);
