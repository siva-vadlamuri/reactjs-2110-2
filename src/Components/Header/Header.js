import Navigation from "./Navigation"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
  <div className="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="AIT Logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <Navigation/>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Header
