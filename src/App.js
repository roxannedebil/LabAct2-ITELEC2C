import './App.css';
import { merchItems } from './data';

function App() {
  return (
    <div className="App">
      < Header />
      <Merch merchItems={merchItems} />

    </div>
  );
}

export default App;


function Header() {
  return (
    <div>
      <header id="section-header" className="Header Header--center Header--initialized" data-section-id="header" data-section-type="header" data-section-settings={{
        "navigationStyle": "center",
        "hasTransparentHeader": false,
        "isSticky": true
      }} role="banner">
        <div className="Header__Wrapper">
          <div className="Header__FlexItem Header__FlexItem--fill">
            <form action="/" method="get" className="Header__SearchBar" role="search">
              <button type="submit" aria-label="Search">
                <img src="/photos/search-icon.png" alt="Search Icon" width="16px" />
              </button>
              <input type="search" name="q" value="" autoComplete="off" autoCorrect="off" aria-label="Search..." placeholder="Search..." />
              <input type="hidden" name="type" value="product" />
            </form>
            <div className="container"></div>
          </div>
          <div className="Header__FlexItem">
            <a href="/" className="Header__LogoLink">
              <div className="Header__Logo">
                <img className="Header__LogoImage Header__LogoImage--primary" src="//store.taylorswift.com/cdn/shop/files/TS-Eras-Logo_245x.png?v=1704732242" srcSet="//store.taylorswift.com/cdn/shop/files/TS-Eras-Logo_245x.png?v=1704732242 1x, //store.taylorswift.com/cdn/shop/files/TS-Eras-Logo_245x@2x.png?v=1704732242 2x" width="245" alt="Taylor Swift Official Store" />
              </div>
            </a>
          </div>
          <div className="Header__FlexItem Header__FlexItem--fill" >

            <button className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk" aria-expanded="false" data-action="open-drawer" data-drawer-id="sidebar-menu" aria-label="Open navigation" buttonWithMargin>
              {/* user icon */}
              <img src="/photos/user.png" alt="Bag Icon" width="30px" />
            </button>

            <button className="Header__Icon Icon-Wrapper Icon-Wrapper--clickable hidden-desk" aria-expanded="false" data-action="open-drawer" data-drawer-id="sidebar-menu" aria-label="Open navigation" buttonWithMargin>
              {/* bag icon */}
              <img src="/photos/bag.png" alt="Bag Icon" width="30px" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}


function Merch(props) {
  const chunks = Array.from({ length: Math.ceil(props.merchItems.length / 4) }, (_, index) => props.merchItems.slice(index * 4, (index + 1) * 4));

  return (
    <div>

      <div className='MerchHeader'>
        <h1>1989 (Taylor's Version)</h1>
      </div>

      {chunks.map((chunk, index) => (
        <div key={index} className="grid">
          <Products products={chunk} />
        </div>
      ))}

    </div>
  );
}


function Products(props) {
  return (
    <div className="grid-container">
      {props.products.map(product => (
        <div key={product.name} className="grid-item">
          <img src={process.env.PUBLIC_URL + '/photos/' + product.photoName} alt={product.name} />


          <div className="gridnameprice">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
          <div className="small-grid">
            <button className="view-product-button">
              View Product
            </button>
          </div>
          
        </div>
      ))}
      
    </div>
  );
}


