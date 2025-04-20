import React, { useState } from "react";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";
import CopilotChatPopup from "./CopilotChatPopup";
import { jsPDF } from "jspdf";

const Task = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("history");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // Save todos to local storage whenever they change
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Save history to local storage whenever it changes
  React.useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  // Generate PDF and save to history when the day changes
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const lastSavedDate = localStorage.getItem("lastSavedDate");
      const today = now.toISOString().split("T")[0];

      if (lastSavedDate !== today) {
        if (todos.length > 0) {
          const doc = new jsPDF();
          doc.text("Task History", 10, 10);
          todos.forEach((task, index) => {
            doc.text(`${index + 1}. ${task.todo} - ${task.isCompleted ? "Completed" : "Pending"}`, 10, 20 + index * 10);
          });
          const pdfBlob = doc.output("blob");
          const pdfUrl = URL.createObjectURL(pdfBlob);

          setHistory((prev) => [
            ...prev,
            { date: lastSavedDate || today, url: pdfUrl },
          ]);
        }

        localStorage.setItem("lastSavedDate", today);
        setTodos([]);
      }
    }, 1000 * 60); // Check every minute

    return () => clearInterval(interval);
  }, [todos]);

  // Expose todos to Copilot
  useCopilotReadable({
    description: "The current user's tasks",
    value: todos,
  });

  useCopilotAction({
    name: "Add Task",
    description: "Add a new task to the list",
    parameters: [
      {
        name: "todoText",
        type: "string",
        description: "The text of the todo item to add",
        required: true,
      },
    ],
    handler: async ({ todoText }) => {
      if (!todoText) return "No task provided.";

      setTodos((prev) => [
        ...prev,
        { todo: todoText, isEditing: false, isCompleted: false },
      ]);

      return `Task "${todoText}" added.`;
    },
  });

  const handleAdd = (taskText) => {
    if (taskText.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { todo: taskText, isEditing: false, isCompleted: false },
    ]);
    setValue("");
  };

  return (
    <>
      <div className=" bg-cyan-400 from-gray-900 via-gray-800 to-gray-700 p-5 min-h-[87.7vh] flex flex-col lg:flex-row gap-6 text-white">
        <div className="w-full lg:w-8/4 bg-gray-800 shadow-lg rounded-3xl p-6 border-2 border-cyan-400">
          <h2 className="text-3xl font-extrabold text-cyan-400 mb-6">
            Plan Your Tasks
          </h2>
          <div className="addtodo my-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                <label className="mr-4 font-semibold text-lg text-gray-300">
                  Choose Date:
                </label>
                <input
                  type="date"
                  className="bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-2 text-gray-300"
                  min={new Date().toISOString().split("T")[0]}
                  max={new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split("T")[0]}
                />
              </div>
              <span className="text-gray-300 font-semibold">
                Today: {new Date().toLocaleDateString()}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-300">Add a Todo</h2>
            <div className="flex items-center mt-4">
              <input
                type="text"
                placeholder="Add Your Task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-gray-700 border-2 border-gray-600 rounded-lg w-2/3 px-4 py-2 text-gray-300"
              />
              <button
                onClick={() => handleAdd(value)}
                className="bg-cyan-400 hover:bg-cyan-300 px-5 py-2 font-bold text-gray-900 rounded-lg mx-4"
              >
                Add
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-300 mt-8">
            Your Tasks
          </h2>
          <div className="todos mt-6">
            {todos.length === 0 ? (
              <p className="text-center text-gray-400 italic">No tasks added yet.</p>
            ) : (
              todos.map((task, index) => (
                <div key={index} className="todo flex justify-between items-center bg-gray-700 shadow-md rounded-lg p-4 my-3 border border-gray-600">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.isCompleted}
                      onChange={() => {
                        const updated = [...todos];
                        updated[index].isCompleted = !updated[index].isCompleted;
                        setTodos(updated);
                      }}
                      className="mr-4 w-6 h-6 accent-cyan-400"
                    />
                    {task.isEditing ? (
                      <input
                        type="text"
                        value={task.todo}
                        onChange={(e) => {
                          const updated = [...todos];
                          updated[index].todo = e.target.value;
                          setTodos(updated);
                        }}
                        className="bg-gray-700 border-2 border-gray-600 rounded-lg px-4 py-2 text-gray-300"
                      />
                    ) : (
                      <span className={`text-lg ${task.isCompleted ? "line-through text-gray-500" : "text-gray-300"}`}>
                        {task.todo}
                      </span>
                    )}
                  </div>
                  <div className="buttons flex">
                    <button
                      className="bg-blue-500 hover:bg-blue-400 px-4 py-2 font-bold text-gray-900 rounded-lg mx-1"
                      onClick={() => {
                        const updated = [...todos];
                        if (task.isEditing && task.todo.trim() === "") return;
                        updated[index].isEditing = !updated[index].isEditing;
                        setTodos(updated);
                      }}
                    >
                      {task.isEditing ? "Save" : "Edit"}
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-400 px-4 py-2 font-bold text-gray-900 rounded-lg mx-1"
                      onClick={() => {
                        const updated = todos.filter((_, i) => i !== index);
                        setTodos(updated);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Side - History */}
        <div className="w-full bg-gray-800 shadow-lg rounded-3xl p-6 border-2 border-cyan-400">
          <h2 className="text-2xl font-extrabold text-cyan-400 mb-6">Task History (Last 10 Days)</h2>
          <div>
            {history.length === 0 ? (
              <p className="text-center text-gray-400 italic">No history available.</p>
            ) : (
              history.map((entry, index) => (
                <div key={index} className="history-item flex justify-between items-center bg-gray-700 shadow-md rounded-lg p-4 my-3 border border-gray-600">
                  <span className="text-gray-300">{entry.date}</span>
                  <a
                    href={entry.url}
                    download={`Task_History_${entry.date}.pdf`}
                    className="bg-cyan-400 hover:bg-cyan-300 px-4 py-2 font-bold text-gray-900 rounded-lg"
                  >
                    Download
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <CopilotChatPopup />
    </>
  );
};

export default Task;
