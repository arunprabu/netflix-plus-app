import { useRef, useReducer } from "react";
import { todoReducer } from "../../reducers/todoReducer";

const TodosPage = () => {
  const todoInput = useRef();

  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState);
  console.log(todoDispatch);

  const handleAddTodo = () => {
    // reading the form field data
    console.log(todoInput.current.value);
  }

  return (
    <div>
      <h1>Todos (useRef and useReducer hooks demo)</h1>
      <div style={{ backgroundColor: "#B2EBF2", padding: "20px" }}>
        <h3>Todos App with useReducer and useRef</h3>

        <div className="row">
          <div className="col-md-4">
            {/* Uncontrolled Component = form data is handled by the DOM itself. */}
            <input
              type="text"
              className="form-control"
              placeholder="What do you want to do today?"
              ref={todoInput}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-success" onClick={handleAddTodo}>ADD TODO</button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            {/* TODO: display a msg -- 'No Todos Found. You can add one' if todoState is empty or undefined */}
            <div className="card">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">my todo 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosPage;
