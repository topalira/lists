import './Mylist.css';

const products = [
  { title: 'Капуста', isFruit: false, id: 1 },
  { title: 'Чеснок', isFruit: false, id: 2 },
  { title: 'Яблоко', isFruit: true, id: 3 },
  { title: 'Киви', isFruit: true, id: 4 },
  { title: 'Лук', isFruit: false, id: 5 },
  { title: 'Картошка', isFruit: false, id: 6 },
  { title: 'Бананы', isFruit: true, id: 7 },
  { title: 'Ананасы', isFruit: true, id: 8 }
]

function Elem(props) {
  const style = { color: props.item.isFruit ? "magenta" : "green" }
  return <li style={style}>
    {props.item.title} - {props.item.id}
  </li>
}

export function Mylist() {
  return <ul>
    {products.map(elem => <Elem item={elem}></Elem>)}
  </ul>
}

export default Mylist;
