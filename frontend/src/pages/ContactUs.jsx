import React from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  return (
    <div className="px-5 sm:px-[5vw] lg:px-[9vw] py-10">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h2 className="text-3xl font-bold">যোগাযোগ</h2>
      <br />
      <p>
        প্রিয় পাঠক, আপনার যেকোনো প্রশ্ন, মতামত বা পরামর্শের জন্য আমাদের সাথে
        যোগাযোগ করুন। আমরা আপনার বার্তার জন্য অপেক্ষায় আছি।
      </p>
      <br />
      <p>
        <span className="font-bold">Email : </span>contactshikhonbd@gmail.com
      </p>
    </div>
  );
};

export default ContactUs;