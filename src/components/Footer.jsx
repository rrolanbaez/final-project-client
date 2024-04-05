function Footer() {
    return (
        <div className="footer">
            <p className="footer-text">Copyright &copy; Kivo 2024</p>
            <p className="footer-text-name">Made by Roxangélica Rolán</p>
            <a href="https://github.com/rrolanbaez/final-project-client" target="_blank" className="footer-link" rel="noopener noreferrer" style={{ padding: '0 20px' }}>      
                <img src="src/images/github-mark.svg" className="footer-img" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/roxangelicarolan/" target="_blank" className="footer-link-linkedin" rel="noopener noreferrer">
                <img src="src/images/linkedin-svgrepo-com.svg" className="linkedin-icon" alt="Linkedin" />
            </a>
        </div>
    );
  }
  
export default Footer;
  