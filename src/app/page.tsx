"use client";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="title">Pedidos</div>
        <div className="login">Log In</div>
      </div>
      <div className="body">
        <div>Welcome what do you want to order today?</div>
        <div className="shop-creation">
          <div>Want to create your shop?</div>
          <button className="shop-creation__create button button-primary">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
