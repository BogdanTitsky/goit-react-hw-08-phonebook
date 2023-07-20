export const Footer = () => {
  return (
    <footer className="footer bg-dark p-3  d-flex  justify-content-end">
      <div className="d-flex flex-column flex-md-row justify-content-end  container ">
        <a
          href="https://t.me/bogdan_tytskiy"
          target="_blank "
          rel="noopener noreferrer"
          className="text-warning d-flex align-items-center  me-md-3"
        >
          <i className="bi bi-telegram text-warning fs-2 me-2 "></i>
          @bogdan_tytskiy
        </a>
        <a
          href="https://www.linkedin.com/in/bogdan-titsky/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warning d-flex align-items-center me-md-3"
        >
          <i className="bi bi-linkedin text-warning fs-2 me-2"></i>
          linkedin.com/in/bogdan-titsky
        </a>
        <a
          href="mailto:bogdan.titsky@gmail.com"
          rel="noopener noreferrer"
          className="text-warning d-flex align-items-center"
        >
          <i className="bi bi-envelope-fill text-warning fs-2 me-2"></i>
          bogdan.titsky@gmail.com
        </a>
      </div>
    </footer>
  );
};
