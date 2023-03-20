const TabsDetails = ({ employee }) => {
  return (
    <div className='tabs-details'>
      <p>{employee.personJob}</p>
      <h2>{employee.personName.toUpperCase()}</h2>
      <q>{employee.personTenure}</q>
      <ul className='tabs-details__tabs'>
        {employee.personTabs.map((tab) => {
          return (
            <li className='tabs-details__tab' key={tab.id}>
              <p>{tab.content}</p>
            </li>
          );
        })}
      </ul>
      <button type='button'>MORE INFO</button>
    </div>
  );
};

export default TabsDetails;
