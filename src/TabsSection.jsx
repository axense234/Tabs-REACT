const TabsSection = ({ employees, mode, setID, currentId }) => {
  return (
    <div className={mode ? "tabs-section horizontal" : "tabs-section"}>
      {employees.map((employee) => {
        return (
          <button
            className={
              employee.id !== currentId
                ? "tabs-section__button"
                : "tabs-section__button active"
            }
            onClick={() => setID(employee.id)}
            key={employee.id}
          >
            {employee.personName.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
export default TabsSection;
