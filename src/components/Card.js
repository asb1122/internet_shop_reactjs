
function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="img/unliked.svg" alt="unliked"/>
            </div>
            <img width="133" height="112" src="/img/sneakers/4.png" alt="1"/>
            <h5>Мужские кроссвки Nike Blazer Mid</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img src="/img/plus.png" alt="Plus" width="11px" height="11px"/>
                </button>
            </div>
        </div>
    );
}

export default Card;