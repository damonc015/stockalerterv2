import React from "react";
import classes from "./Step.module.css";
import Step from "./Step";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <Step
        title={"Step 1: Search"}
        src={"/images/aboutPage/stepOneSearch.png"}
        desc={"Use the searchbar to find a stock you want to view."}
      />
      <Step
        title={"Step 2: Add Stock"}
        src={"/images/aboutPage/stepTwoAdd.png"}
        desc={"Choose whether or not to add stock to the watchlist."}
      />
      <Step
        title={"Step 3: Enable Alerts"}
        src={"/images/aboutPage/stepThreeEnable.png"}
        desc={"Enable alerts for stocks on your watchlist by clicking the bell icon. Navigate to the home page to see your notifications."}
      />
      <Step
        title={"Step 4: Setup Alert Settings"}
        src={"/images/aboutPage/stepFourSetupAlerts.png"}
        desc={"Set up your alert settings by entering a price to be alerted at and whether or not the stock price should be above or below your entered price for you to be alerted."}
      />
      <Step
        title={"Step 5: Be Alerted!"}
        src={"/images/aboutPage/stepFiveAlerted.png"}
        desc={"Wait to be alerted! In the event, the websocket cannot connect reset an alert to attempt a reconnect."}
      />
    </div>
  );
};

export default About;
