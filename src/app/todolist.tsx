"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: Todo) => {
    setTodos([...todos, data]);
  };

  return (
    <div>
      <h1 className="text-center text-8xl text-bold mt-[20px]">To-Do List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-[30px] mt-[30px]">
        <input className=" width-[501290129px] pl-[20px] rounded-xl pr-[20px] text-black outline-none border-blue-600 border-1px" type="text" {...register('task')} />
        <button className="py-3 px-12 bg-white border-[1px] border-solid border-white text-black text-bold rounded-2xl" type="submit">Add Task</button>
        </div>
      </form>
      <ul className="mt-[50px]">
        {todos.map((todo) => (
          <li className="text-2xl text-center" key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            {todo.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;