export default function Partners(){
    const partners = [
      { name: "Dominos", logo: "https://images.seeklogo.com/logo-png/25/1/dominos-pizza-logo-png_seeklogo-255785.png?v=638701158960000000", website: "https://pizzaonline.dominos.co.in/postorder-ui/login" },
      { name: "McDonald's", logo: "https://e7.pngegg.com/pngimages/106/482/png-clipart-mcdonald-s-golden-arches-logo-mcdonalds-thumbnail.png", website: "https://corporate.mcdonalds.com/corpmcd/home.html" },
      { name: "KFC", logo: "https://e7.pngegg.com/pngimages/651/153/png-clipart-kfc-logo-kfc-logo-icons-logos-emojis-iconic-brands-thumbnail.png", website: "https://online.kfc.co.in/" },
    ];
  
    return (
      <main className="partners">
        <h1>CURRENT SPONSORS</h1>
        <div className="partners-list">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
              <h3>{partner.name}</h3>
              <a href={partner.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          ))}
        </div>
      </main>
    );
  };