import React, { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
// Employees
import { people } from "./people";
// CSS
import "./styles.css";

const MainApp = () => {
  const [tabDetailsID, setTabDetailsID] = useState(1);
  const [changeMode, setChangeMode] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 800) {
        setChangeMode(true);
      } else {
        setChangeMode(false);
      }
    });

    return () => {
      window.removeEventListener("resize", console.log("removed"));
    };
  });

  return (
    <>
      <div className='title-container'>
        <h1>Experience</h1>
        <hr />
      </div>
      {changeMode ? (
        <section className='main-content active'>
          <TabsSection
            employees={people}
            setID={setTabDetailsID}
            mode={changeMode}
            currentID={tabDetailsID}
          ></TabsSection>
          <TabsDetails
            employee={people[tabDetailsID - 1]}
            tabs={people[tabDetailsID - 1].personTabs}
          ></TabsDetails>
        </section>
      ) : (
        <section className='main-content'>
          <TabsSection employees={people} setID={setTabDetailsID}></TabsSection>
          <TabsDetails
            employee={people[tabDetailsID - 1]}
            tabs={people[tabDetailsID - 1].personTabs}
          ></TabsDetails>
        </section>
      )}
    </>
  );
};

const TabsSection = ({ employees, setID, mode, currentID }) => {
  const [active, setActive] = useState(false);
  const manageClick = (id) => {
    console.log(currentID);
    if (id === currentID) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <>
      <div className={mode ? "tabs-names oblical" : "tabs-names"}>
        {employees.map((employee) => {
          return (
            <button
              className='tab-name'
              onClick={() => manageClick(employee.id)}
              key={employee.id}
            >
              {employee.personName.toUpperCase()}
            </button>
          );
        })}
      </div>
    </>
  );
};

const TabsDetails = ({ tabs, employee }) => {
  return (
    <>
      <div className='tabs-details'>
        <p id='tabs-job'>{employee.personJob}</p>
        <p id='tabs-name'>{employee.personName.toUpperCase()}</p>
        <p id='tabs-tenure'>{employee.personTenure}</p>
        {tabs.map((tab) => {
          return (
            <div className='personTab' key={tab.id}>
              <p>{tab.content}</p>
            </div>
          );
        })}
        <button id='more-info'>MORE INFO</button>
      </div>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MainApp></MainApp>
  </StrictMode>
);
