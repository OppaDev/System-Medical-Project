import React from "react";
import DownLeftSide from "../components/contact/DownLeftSide";
import DownRightSide from "../components/contact/DownRightSide";
import UpSide from "../components/contact/UpSide";

const Contact = () => {
  return (
    <>
      <section>
        <UpSide />
        <div className="flex flex-wrap py-6 md:pt-20 md:pb-10">
          <DownLeftSide />
          <DownRightSide />
        </div>
      </section>
    </>
  );
};

export default Contact;
