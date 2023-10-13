import { useRef, useReducer, useEffect } from "react";
import { todoReducer } from "../../reducers/todoReducer";

const TodosPage = () => {
  const todoInput = useRef();

  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState);
  console.log(todoDispatch);

  useEffect(() => {
    // disptacher fn should be called with action obj
    // action obj must have type property and an optional payload
    todoDispatch({
      type: "LIST_TODOS",
      payload: []  // successful response
    });
  }, []);

  const handleAddTodo = () => {
    // reading the form field data
    console.log(todoInput.current.value);

    // dispatching with action type: ADD_TODO  and payload being entered todo
    todoDispatch({
      type: "ADD_TODO",
      payload: {
        id: new Date().getTime(), // creating an id
        title: todoInput.current.value, // enetered todo
        isCompleted: false, // todo's status
      }
    });
  };

  return (
    <div>
      <h1>Todos (useRef and useReducer hooks demo)</h1>
      <div style={{ backgroundColor: "#B2EBF2", padding: "20px" }}>
        <h3>Todos App with useReducer and useRef</h3>

        {todoState?.length === 0 && (
          <div className="alert alert-danger">
            No Todos Found. You can add one
          </div>
        )}

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
            <button className="btn btn-success" onClick={handleAddTodo}>
              ADD TODO
            </button>
          </div>
        </div>

        {todoState?.length > 0 && (
          <div className="row mt-3">
            <div className="col-md-6">
              <div className="card">
                <ul className="list-group list-group-flush">
                  {todoState.map((todo) => {
                    return (
                      <li className="list-group-item" key={todo.id}>
                        {todo.title} | status:{" "}
                        {todo.isCompleted ? "Completed" : "Not Completed"}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodosPage;
