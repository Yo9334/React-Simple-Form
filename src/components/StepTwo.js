const StepTwo = ({ ObjName, ObjEmail, ObjPassword, eventEdit }) => {
  return (
    <div className="container">
      <div className="Edit">
        <h1>Results</h1>
        <p>
          Name : <span>{ObjName.name}</span>
        </p>
        <p>
          Email : <span>{ObjEmail.email}</span>
        </p>
        <p>
          Password : <span>{ObjPassword.password}</span>
        </p>
      </div>
      <form onSubmit={eventEdit}>
        <input type="submit" value="Edit your information" />
      </form>
    </div>
  );
};

export default StepTwo;
