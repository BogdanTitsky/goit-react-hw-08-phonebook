export const Footer = () => {
  return (
    <footer className="footer bg-dark p-3">
      <a
        href="https://t.me/bogdan_tytskiy"
        target="_blank "
        rel="noopener noreferrer"
      >
        <i className="bi bi-telegram text-light fs-2"></i>
        @bogdan_tytskiy
      </a>
      <a
        href="https://www.linkedin.com/in/bogdan-titsky/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-linkedin text-light fs-2"></i>
        linkedin.com/in/bogdan-titsky
      </a>
      <a href="mailto:bogdan.titsky@gmail.com" rel="noopener noreferrer">
        <i className="bi bi-envelope-fill text-light fs-2"></i>
        bogdan.titsky@gmail.com
      </a>
    </footer>
  );
};
