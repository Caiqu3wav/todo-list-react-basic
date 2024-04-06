import React, { useState } from "react"

interface AddTodoFormProps {
    onSubmit : (title: string) => void;
 }

export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput(""); 
    }

  return (
    <div>
      <form action="" className="flex" onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Add a new to-do"
        className="rounded-s-md grow border border-gray-400 p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
         />
      <button type="submit" className="w-16
       rounded-e-lg bg-slate-900 text-yellow-200 hover:bg-slate-500 transition-all duration-500
        ">Add</button>
      </form>
    </div>
  )
}
