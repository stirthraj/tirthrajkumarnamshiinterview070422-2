export default function ProductCard({ data, setCart }) {
  let q = data.qty;
  data = data.item;

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
        <img src={data.image} width="auto" alt="" height={200} />
      </div>
      <div>
        <h3>{data.title}</h3>
        <div>{data.price}</div>
        <p>{data.description}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => console.log("reduce")}>-</button>
        <div style={{ padding: "5px" }}>{q}</div>
        <button onClick={() => console.log("increase")}>+</button>
      </div>
    </div>
  );
}
