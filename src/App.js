// React
import { useEffect, useState } from "react";
// Data
import { people } from "./data";
// Components
import TabsDetails from "./TabsDetails";
import TabsSection from "./TabsSection";

const App = () => {
  const [tabDetailsID, setTabDetailsID] = useState(people[0].id);
  const [mode, setMode] = useState(true);

  const initialWindowWidth = window.innerWidth <= 1024;

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 1024) {
        setMode(true);
      } else {
        setMode(false);
      }
    });

    return () => {
      window.removeEventListener("resize", console.log("removed"));
    };
  });

  const foundEmployee = people.find((person) => person.id === tabDetailsID);

  return (
    <main className='main-container'>
      <header className='main-container__title'>
        <h1>Experience</h1>
        <hr />
      </header>
      <section
        className={
          mode && initialWindowWidth
            ? "main-container__content vertical"
            : "main-container__content"
        }
      >
        <TabsSection
          employees={people}
          setID={setTabDetailsID}
          mode={mode && initialWindowWidth}
          currentId={tabDetailsID}
        />
        <TabsDetails employee={foundEmployee} />
      </section>
    </main>
  );
};

export default App;
