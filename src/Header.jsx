export default function Header(){
  return (
    <header className="header">
      <div className="logo">
        <img 
          src="https://www.tedxnitksurathkal.in/assets/img/tedx-white.png" 
          alt="TEDx Logo" 
          className="logo-img" 
        />
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#salon">Salon</a>
        <a href="#theme">Theme</a>
        <a href="#past-editions">Past Editions</a>
        <a href="#talk-archives">Talk Archives</a>
        <a href="#team">Team</a>
        <a href="#partners">Partners</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
  };
