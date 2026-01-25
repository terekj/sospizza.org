
import * as React from "react";
import Card from "../../components/Order/Card";

function Page() {
  return (
    <div className="bg-white min-h-screen">
      <div className="subheader -mt-[15%]">
        <div className="checkerboard">
          <img
            src="Checkerboard.svg"
            width="100%"
            height="100%"
            alt="checkerboard"
          ></img>
        </div>
        <div className="mt-0">
          <hr className="h-[10px] border-0 bg-red mb-2"></hr>
          <hr className="h-[5px] border-0 bg-red"></hr>
        </div>
      </div>
      <div className="OrderPage">
        <div className="orderBanner flex justify-center content-center">
          <img
            src="orderbanner.svg"
            width="100%"
            height="100%"
            alt="banner"
            className="w-1/2"
          ></img>
        </div>
        <div className="w-full flex justify-center content-center">
          <div className="cardContainer p-8 w-3/4 flex flex-col gap-y-32 flex-reverse">
            <Card
              src="./pepperoni.jpg"
              title="Title here."
              body="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
            ></Card>
            <Card
              className="flex-row-reverse"
              src="./burratta.jpg"
              title="Title here."
              body="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
            ></Card>
            <Card
              src="./hawaiian.jpg"
              title="Title here."
              body="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
