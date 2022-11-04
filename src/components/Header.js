import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div>
        <FontAwesomeIcon icon="rocket" className="logo" />
        <span>React Simple Form</span>
      </div>
    </header>
  );
};

export default Header;
