import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const completeTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  const addTask = (task) => {
    if (task.title != '' || task.description != '') {
      setTasks([...tasks, task]);
    }
    console.log(tasks);
  };

  const handleAddTasks = (e) => {
    e.preventDefault();

    const task = {
      title: e.target.title.value,
      description: e.target.description.value,
      completed:false,
    };

    console.log(task);

    addTask(task);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <>
      <h1>Crear una tarea:</h1>
      <form onSubmit={handleAddTasks}>
        <p>Titulo:</p>
        <input type="text" name="title" />
        <p>Descripcion:</p>
        <input type="text" name="description" />
        <input type="submit"></input>
      </form>
      <hr />
      <h2>Lista de tareas:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.title} - {task.description} - {task.completed ? "Completada" : "Pendiente"  } {task.completed ? console.log('Completada') : <button onClick={()=>completeTask(index)}>Completar</button> } 
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
