
function Header() {
    return (
        <header className="d-flex justify-between align-center p-20 m-20">
            <div className="d-flex align-center">
                <img src='/img/logo.png' width="60" height="60" alt="Logo"/>
                <div>
                    <h3 className="mb-0 text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин  лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="d-flex align-center mr-30">
                    <img src='/img/cart.svg' width="18" height="18" alt="Cart"/>
                    <span>1278 руб.</span>
                </li>
                <li>
                    <img src='/img/user.svg' width="18" height="18" alt="User"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;
