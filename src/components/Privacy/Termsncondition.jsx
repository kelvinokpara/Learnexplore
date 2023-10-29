import React from 'react';
import {Link} from "react-router-dom";

const Termsncondition = () => {
  return (
    <div className="bg-gray-100">
      <Link to="/">
        <p className="flex justify-content-center ml-24">Back</p>
      </Link>
      <section className="border-solid border-2 w-9/12 mx-auto my-10 border-white-200 bg-white ">
        <div className="ml-6">
          <b className="font-weight-700 text-4xl line-height-[2.5rem]">
            Terms & Conditions
          </b>
          <h2 className="mt-2 font-weight-400 text-xs">
            Review all condition then accept.{" "}
          </h2>
        </div>
        <div className="border-solid border w-11/12 mx-6 my-10 bg-gray-100 border-white-200">
          <div className="my-3 ml-3">
            <b>1. General</b>
            <p className="mt-8 text-lg font-weight-700 ">
              We offer a service (“the Service”) which allows you and
              individuals authorised by you to participate in an interactive
              meeting or event (“Session”) created by you using our apps and
              software. We offer a range of different subscription accounts for
              delivery of the Service, with different pricing arrangements and
              benefits, all of which, including the current price lists, are set
              out at our website at https://www.vevox.com (the “Site”).
            </p>
            <p className="mt-8">
              “We” “us” or “our” when used in these terms refers to AUGA
              TECHNOLOGIES LIMITED (company number 05885409) whose registered
              office is at Ashcombe Court, Woolsack Way, Godalming, England, GU7
              1LQ and “you” or “your” refers to anyone who enters into a
              subscription for the Service whether by placing an order via the
              Site or agreeing in writing with us to acquire the Service. All
              orders for the Service whether placed through the Site or agreed
              in writing with us will incorporate these terms.
            </p>
            <p className="mt-8">
              The terms on which you can subscribe to the Service are set out
              below. Please note that these terms apply only to businesses. If
              you are not representing a business, you are not entitled to
              subscribe for the Service. Anyone who does agree to these terms  
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Termsncondition
