import React from 'react'


export default function Card() {
  return (
    <div>
        <div>
        <div class="card mt-3 mb-3" style={{ width: "18rem", maxWidth: "360px" }}>
           <img class="card-img-top" src="https://i.ytimg.com/vi/rzVGVW3QaXo/maxresdefault.jpg" alt="Card image cap"/> 
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is important text</p>
            <div class="container w-100">
              <select class="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select class="m-2 h-100  bg-success rouded">
                <option value="Half">Half</option>
                <option value="full">Full</option>
              </select>
              <div class="d-inline h-100 fs-5">Total price</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
