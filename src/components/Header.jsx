function Header(props) {
  let { title } = props;
  return (
    <header>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>{title}</strong>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
