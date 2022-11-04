import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = ({
  ObjName,
  ObjEmail,
  ObjPassword,
  ObjConfirmpassword,
  ObjErrorMsg,
  eventSubmit,
}) => {
  const changeAttribut = (element) => {
    const type =
      element.getAttribute("type") === "password" ? "text" : "password";
    element.setAttribute("type", type);
  };

  return (
    <div className="container">
      <form onSubmit={eventSubmit} className="contact-form">
        <h1>Create account</h1>

        <span>Name</span>
        {/* Name */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jean Dupont"
          value={ObjName.name}
          onChange={(event) => {
            ObjName.setName(event.target.value);
          }}
        />
        <span>Email</span>
        {/* Email */}
        <input
          type="email"
          name="email"
          id="email"
          value={ObjEmail.email}
          placeholder="jeandupont@lereacteur.io"
          onChange={(event) => {
            ObjEmail.setEmail(event.target.value);
          }}
        />
        <span>Password</span>

        {/* Password */}
        <div className="pwd-eye">
          <input
            className={ObjErrorMsg.errorMsg && "input-error"}
            type="password"
            name="password"
            id="password"
            value={ObjPassword.password}
            placeholder="password"
            required
            onChange={(event) => {
              ObjPassword.setPassword(event.target.value);
            }}
          />

          <div
            className="icon-eye"
            onClick={() => {
              changeAttribut(document.querySelector("#password"));
            }}
          >
            <FontAwesomeIcon icon="eye" />
          </div>
        </div>
        <span>Confirm your password</span>

        {/* Confirm Password */}
        <div className="pwd-eye">
          <input
            className={ObjErrorMsg.errorMsg && "input-error"}
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            value={ObjConfirmpassword.confirmpassword}
            placeholder="password"
            required
            onChange={(event) => {
              ObjConfirmpassword.setConfirmPassword(event.target.value);
            }}
          />
          <div
            className="icon-eye"
            onClick={() => {
              changeAttribut(document.querySelector("#confirmpassword"));
            }}
          >
            <FontAwesomeIcon icon="eye" />
          </div>
        </div>
        {ObjErrorMsg.errorMsg && (
          <span style={{ color: "red" }}>{ObjErrorMsg.errorMsg}</span>
        )}
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;
