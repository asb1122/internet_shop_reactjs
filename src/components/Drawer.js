function Drawer() {
    return(
        <div style={{display:'none'}} className="overlay">
        <div className="drawer d-flex">
          <h2 className=" d-flex justify-between mb-20">Корзина
            <img className="removeBtn cu-p" src='/img/btn-remove.svg' width="18" height="18" alt="Remove"/>
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p>Мужские кроссвки Nike Blazer Mid</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src='/img/btn-remove.svg' width="18" height="18" alt="Remove"/>
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p>Мужские кроссвки Nike Blazer Mid</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src='/img/btn-remove.svg' width="18" height="18" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p>Мужские кроссвки Nike Blazer Mid</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src='/img/btn-remove.svg' width="18" height="18" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p>Мужские кроссвки Nike Blazer Mid</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src='/img/btn-remove.svg' width="18" height="18" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p>Мужские кроссвки Nike Blazer Mid</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src='/img/btn-remove.svg' width="18" height="18" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
              <div className="mr-20">
                <p>Мужские кроссвки Nike Blazer Mid</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src='/img/btn-remove.svg' width="18" height="18" alt="Remove"/>
            </div>
          </div>
          <div  className="cartTotalBlock">
            <ul>
              <li className="d-flex">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="d-flex">
                <span>Налог: 5%</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greeButton">Оформить заказ
              <img src="/img/arrow.svg" alt="arrow"/>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Drawer;