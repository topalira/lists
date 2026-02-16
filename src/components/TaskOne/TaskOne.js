import './TaskOne.css';

const navigation = [
  { id: 1, label: "Главная"},
  { id: 2, label: "Каталог"},
  { id: 3, label: "Контакты"}
]

function Elem(props) {
  const style = { color: props.item.id === props.activeId ? "green" : "red" }
  return <li style={style}>
    {props.item.label} - {props.item.id === props.activeId ? "(активно)": "(не активно)"}
  </li>
}

export function TaskOne() {
  return <ul>
    {navigation.map(elem => <Elem item={elem} activeId = {1}></Elem>)}
  </ul>
}

export default TaskOne;
