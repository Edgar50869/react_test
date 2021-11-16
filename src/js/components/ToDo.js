import "./ToDo.css"
const ToDo = (props) => {
    return (
        <div>
            <li className={props.complited ? 'complited':props.type}>
                <h3>{props.complited && 'complited :'}  {props.label}</h3>
                <h6>{props.description}</h6>
            </li>
        </div>
    )
}

export default ToDo;