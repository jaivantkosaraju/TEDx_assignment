export default function Footer(){
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} TEDx NITK. All rights reserved.</p>
        <p>Follow us: 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </footer>
    );
  };