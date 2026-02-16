import './Mylist.css';

const products = [
  { title: 'Капуста', isFruit: false, id: 1, count: "5kg" },
  { title: 'Чеснок', isFruit: false, id: 2, count: "0.5kg" },
  { title: 'Яблоко', isFruit: true, id: 3, count: "5kg" },
  { title: 'Киви', isFruit: true, id: 4, count: "2kg" },
  { title: 'Лук', isFruit: false, id: 5, count: "3kg" },
  { title: 'Картошка', isFruit: false, id: 6, count: "6kg" },
  { title: 'Бананы', isFruit: true, id: 7, count: "1kg" },
  { title: 'Ананасы', isFruit: true, id: 8, count: "2kg" }
]

function Elem(props) {
  const style = { color: props.item.isFruit ? "magenta" : "green" }
  return <li style={style}>
    {props.item.title} - {props.item.count}
  </li>
}

export function Mylist() {
  return <ul>
    {products.map(elem => <Elem item={elem}></Elem>)}
  </ul>
}

export default Mylist;
