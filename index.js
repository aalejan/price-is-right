function getTotal(item){
    item['total'] = Number((item.price * (1 - item.discount ) * item.quantity).toFixed(2))
    return item
}

function calculateTotal(items){
    const total = items.map(getTotal)
    return total
}



module.exports = calculateTotal

const items = [{
    id: 1,
    name: 'iPhone Charger',
    price: 19.95,
    discount: .12,
    quantity: 2,
    total: 0
  }]