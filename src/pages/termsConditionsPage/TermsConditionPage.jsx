import React from 'react';
import Gap from '../../components/gap/Gap';
import { Typography } from 'antd';
import './termsConditionPage.css';

const TermsConditionPage = () => {
  const { Text } = Typography;

  return (
    <>
      <div className="Terms-conditions">
        <h1>Terms & Conditions</h1>
        <Gap height={30} />
        <h4>General Information</h4>
        <Text>
          a. These Terms and Conditions govern the purchase of products from
          LAYR.
        </Text>
        <br />
        <Text>
          b. By placing an order with LAYR, you acknowledge that you have read,
          understood, and agreed to these Terms and Conditions.
        </Text>
        <br />
        <Text>
          c. LAYR reserves the right to amend these Terms and Conditions at any
          time, without prior notice.
        </Text>
        <br />
        <Text>
          d. These Terms and Conditions are governed by the laws of Indonesia.
        </Text>

        <Gap height={10} />
        <h4>Orders</h4>
        <Text>a. All orders are subject to acceptance by LAYR.</Text>
        <br />
        <Text>
          b. Orders may be placed through our website or by visiting one of our
          retail locations.
        </Text>
        <br />
        <Text>
          c. By placing an order, you confirm that all information provided is
          accurate and complete.
        </Text>
        <br />
        <Text>
          d. LAYR reserves the right to cancel or refuse any order at any time,
          without prior notice.
        </Text>

        <Gap height={10} />
        <h4>Prices and payment</h4>
        <Text>
          a. All prices displayed on our website are in Indonesian Rupiah (IDR).
        </Text>
        <br />
        <Text>b. Prices are subject to change without prior notice.</Text>
        <br />
        <Text>
          c. Payment may be made using one of the following methods: credit card,
          debit card, or bank transfer.
        </Text>
        <br />
        <Text>
          d. Payment must be received in full before an order is dispatched.
        </Text>

        <Gap height={10} />
        <h4>Shipping and Delivery</h4>
        <Text>a. Orders are shipped from Jakarta, Indonesia.</Text>
        <br />
        <Text>
          b. Shipping fees are calculated based on the delivery address and the
          weight of the package.
        </Text>
        <br />
        <Text>
          c. Delivery times vary depending on the shipping method selected and the
          delivery address.
        </Text>
        <br />
        <Text>
          d. LAYR is not responsible for any delays or additional costs incurred
          due to customs procedures.
        </Text>

        <Gap height={10} />
        <h4>Return and Refunds</h4>
        <Text>
          a. If you are not satisfied with your purchase, you may return it within
          30 days for a refund.
        </Text>
        <br />
        <Text>
          b. The product must be returned in its original packaging and in its
          original condition.
        </Text>
        <br />
        <Text>c. The customer is responsible for all return shipping fees.</Text>
        <br />
        <Text>d. Refunds will be issued to the original payment method.</Text>

        <Gap height={10} />
        <h4>Intellectual Property</h4>
        <Text>
          a. All intellectual property rights in LAYR's products, website, and
          marketing materials are owned by LAYR.
        </Text>
        <br />
        <Text>
          b. No part of LAYR's products, website, or marketing materials may be
          reproduced or used for commercial purposes without prior written
          consent from LAYR.
        </Text>

        <Gap height={10} />
        <h4>Limitation of Liability</h4>
        <Text>
          a. LAYR shall not be liable for any loss or damage arising from the use
          or inability to use its products or website.
        </Text>
        <br />
        <Text>
          b. LAYR's liability shall be limited to the purchase price of the product
          in question.
        </Text>
        <br />
        <Text>
          c. LAYR shall not be liable for any indirect, incidental, or
          consequential damages arising from the use or inability to use its
          products or website.
        </Text>

        <Gap height={10} />
        <h4>Privacy Policy</h4>
        <Text>
          a.LAYR respects your privacy and is committed to protecting your
          personal information.
        </Text>
        <br />
        <Text>
          b. LAYR collects personal information in order to process and deliver
          your order.
        </Text>
        <br />
        <Text>
          c. LAYR will not sell or disclose your personal information to third
          parties, except as required by law.
        </Text>
        <br />
        <Text>d. For more information, please see LAYR's Privacy Policy.</Text>
        <br />
        <br />
        <Text>
          If you have any questions about these Terms and Conditions, please
          contact us at admin@layrfragrance.com
        </Text>
      </div>
    </>
  );
};

export default TermsConditionPage;
