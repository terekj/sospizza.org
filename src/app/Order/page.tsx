"use client";
import * as React from "react";
import { motion } from "motion/react";
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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="orderBanner flex justify-center content-center">
            <img
              src="orderbanner.svg"
              width="100%"
              height="100%"
              alt="banner"
              className="w-1/2"
            ></img>
          </div>
        </motion.div>
        <div className="w-full flex justify-center content-center">
          <div className="cardContainer p-8 w-3/4 flex flex-col gap-y-32 flex-reverse">
            <Card
              src="./pepperoni.jpg"
              title="What is Domestic Violence?"
              body={
                <div>
                  Domestic abuse, also called <strong>domestic violence</strong>{" "}
                  or <strong>intimate partner violence</strong> can be defined
                  as a pattern of behavior in any relationship that is used to
                  gain or maintain power and control over an intimate partner.
                  Abuse is{" "}
                  <strong>
                    physical, sexual, emotional, economic or psychological
                  </strong>{" "}
                  actions or threats of actions that influence another person.
                  This includes any behaviors that frighten, intimidate,
                  terrorize, manipulate, hurt, humiliate, blame, injure, or
                  wound someone.
                  <br />
                  <br />{" "}
                  <i>
                    "10 million people per year are physically abused by an
                    intimate partner... and 20 percent of women in the United
                    States have been raped." Source: National Coalition to End
                    Domestic Violence.{" "}
                  </i>
                </div>
              }
            ></Card>
            <Card
              className="flex-row-reverse"
              src="./burratta.jpg"
              title="Sexual Harrassment vs. Sexual Violence?"
              body={
                <div>
                  <span className="text-red font-bold">Sexual harassment</span>{" "}
                  includes <strong>unwelcome</strong> sexual advances, requests
                  for sexual favors, and other verbal or physical{" "}
                  <strong>harassment of a sexual nature.</strong>{" "}
                  <span className="text-red font-bold">Sexual violence</span> is
                  defined as a sexual act that is committed{" "}
                  <strong>or attempted</strong> by another person{" "}
                  <strong>without freely given consent</strong> of the victim or{" "}
                  <strong>
                    against someone who is unable to consent or refuse.
                  </strong>
                  <br />
                  <br />
                  <i>
                    Please note: state laws vary in the definitions used for
                    sexual assault.
                  </i>
                </div>
              }
            ></Card>
            <Card
              src="./hawaiian.jpg"
              title="Recognize the Signs of Domestic Abuse."
              body={
                <div className="overflow-scroll pl-6">
                  <i>Does your partner/family member/friend/caregiver/etc...</i>
                  <br />
                  <br />
                  <ul className="list-disc list-outside pl-6 space-y-2">
                    <li>Use intimidation or threats to gain compliance?</li>
                    <li>
                      Treat you roughly—grab, push, pinch, shove or hit you?
                    </li>
                    <li>
                      Pressure you sexually for things you aren’t ready for?
                    </li>
                    <li>
                      Make you feel like you are unable to make decisions or
                      leave the relationship?
                    </li>
                    <li>
                      Fail to act or carry out an intentional act that causes or
                      creates a risk of harm?
                    </li>
                  </ul>
                </div>
              }
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;
