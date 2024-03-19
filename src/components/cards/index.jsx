import React from 'react'
import "./index.css"

function Cards() {
  return (
    <div className='container cards'>
      <div className="card">
        <div className="img">
          <img src="./2.jpg" alt="" />
        </div>
        <div className="btn_domen">
          <a href="https://clck.ru/39XmTP">
            Актуальный домен
          </a>
        </div>
        <div className="btn_domen tg">
          <a href="https://t.me/+VVv4QtwiphVkYTMy">
            Телеграмм Канал с промокодами
          </a>
        </div>
      </div>

      <div className="card">
        <div className="img">
          <img src="./3.jpg" alt="" />
        </div>
        <div style={{paddingTop: "40px"}} className="btn_domen">
          <a href="https://clck.ru/39C6n9">
            Актуальный домен
          </a>
        </div>
        <div className="btn_domen tg">
          <a href="https://t.me/+VVv4QtwiphVkYTMy">
            Телеграмм Канал с промокодами
          </a>
        </div>
      </div>

      <div className="card">
        <div className="img">
          <img src="./4.jpg" alt="" />
        </div>
        <div className="btn_domen">
          <a href="https://m-x.onl/LlApIWia">
            Актуальный домен
          </a>
        </div>
        <div className="btn_domen tg">
          <a href="https://t.me/+VVv4QtwiphVkYTMy">
            Телеграмм Канал с промокодами
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards
