import styles from "./ToDoList.module.css"

interface Item {
    content: string
    done?: Date
}

const defaultItems: Item[] = [
    {
        content: "Main page",
    },
    {
        content: "Add some content",
    },
    {
        content: "Favicon",
    },
];

const TodoList = () => {
    return (<>
        <h2 className="font-bold text-purple-600">To-Do 👌</h2>
        <ul role="list" className={styles.toDoList}>
            {
                defaultItems.map(item => <li data-icon="❑" key={item.content}>{item.content}</li>)
            }
        </ul>
    </>)
}

export default TodoList;