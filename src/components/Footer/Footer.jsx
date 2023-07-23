export const Footer = () => {
  return (
    <footer className="footer bg-dark p-3  d-flex  ">
      <div className="d-flex justify-content-between container ">
        <div className="created-by">
          <h2 className="text-light">Created by</h2>
          <ul>
            <li className="text-light">
              <p>Bogdan Titsky - Developement</p>
            </li>
            <li className="text-light">
              <p>Christine Yukhymenko - Design</p>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <a
              href="https://t.me/bogdan_tytskiy"
              target="_blank "
              rel="noopener noreferrer"
              className="text-warning d-flex align-items-center justify-content-start me-md-3"
            >
              <i className="bi bi-telegram text-warning fs-2 me-2 "></i>
              @bogdan_tytskiy
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bogdan-titsky/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning d-flex align-items-center justify-content-start me-md-3"
            >
              <i className="bi bi-linkedin text-warning fs-2 me-2"></i>
              linkedin.com/in/bogdan-titsky
            </a>
          </li>
          <li>
            <a
              href="mailto:bogdan.titsky@gmail.com"
              rel="noopener noreferrer"
              className="text-warning d-flex align-items-center justify-content-start"
            >
              <i className="bi bi-envelope-fill text-warning fs-2 me-2"></i>
              bogdan.titsky@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
