const CompanyInfo = (props) => {
  return (
    <div>
      <h2>Testing JSX, Props, States, Events, Styles and Snapshot Demo!</h2>
      <h4>Company Info</h4>
      <p data-testid="companyName">Company Name: Cognizant</p>
      <p data-testid="foundedYear">The Company Founded in: {props.foundedYear}</p>
    </div>
  );
}

export default CompanyInfo;