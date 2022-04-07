export default function ProductCard({ data, cart, setCart }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        boxShadow: "0px 0px 1px black",
        margin: "40px",
      }}
    >
      <div>
        <img src={data.image} width="auto" height={200} />
      </div>
      <div>
        <h3>{data.title}</h3>
        <div>{data.price}</div>
        <p>{data.description}</p>
      </div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <button onClick={() => setCart([...cart, { item: data, qty: 1 }])}>
          add
        </button>
      </div>
    </div>
  );
}
