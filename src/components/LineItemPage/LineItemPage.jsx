


export default function LineItemPage({ lineItem, handleChangeQty }) {

  return (
    <div className="LineItem">
      {/* <h1>Line Item</h1> */}
      <div className="flex-ctr-ctr">{lineItem.item.title}</div>
      <div className="flex-ctr-ctr flex-col">
        {/* <span className="align-ctr">{lineItem.item.stock}</span> */}
        <span>{lineItem.item.price.toFixed(2)}</span>
      </div>
      <div className="qty" >
        {/* {!isPaid && */}
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
        >−</button>
        {/* } */}
        <span>{lineItem.qty}</span>
        {/* {!isPaid && */}
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
        >+</button>
        {/* } */}
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
    </div>
  )
}
