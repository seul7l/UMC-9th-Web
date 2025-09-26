import { useState } from "react";
import styled from "styled-components";

type Todo = { id: number; text: string };

export default function Todolist() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneTasks, setDoneTasks] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
    setInput("");
  };

  const completeTodo = (todo: Todo) => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
    setDoneTasks((prev) => [...prev, todo]);
  };

  const deleteTodo = (todo: Todo) => {
    setDoneTasks((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <TodolistContainer>
      <h1>TODOLIST</h1>
      <div>
        <Input
          type="text"
          placeholder="할 일 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="plusButton" onClick={addTodo}>
          할 일 추가
        </Button>
      </div>

      <ListContainer>
        <Div>
          <h2>할 일</h2>
          <TodoListBox>
            {todos.map((todo) => (
              <TodoItemRow key={todo.id}>
                <TodoText>{todo.text}</TodoText>
                <ActionButton variant="done" onClick={() => completeTodo(todo)}>
                  완료
                </ActionButton>
              </TodoItemRow>
            ))}
          </TodoListBox>
        </Div>

        <Div>
          <h2>완료</h2>
          <DoneListBox>
            {doneTasks.map((todo) => (
              <TodoItemRow key={todo.id}>
                <TodoText>{todo.text}</TodoText>
                <ActionButton variant="delete" onClick={() => deleteTodo(todo)}>
                  삭제
                </ActionButton>
              </TodoItemRow>
            ))}
          </DoneListBox>
        </Div>
      </ListContainer>
    </TodolistContainer>
  );
}

const Div = styled.div`
  flex: 1;
`;

const TodolistContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const TodoListBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DoneListBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TodoItemRow = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 20px 20px 0px;
  padding: 6px 8px;
`;

const TodoText = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 10px;
`;

const ActionButton = styled.button<{ variant: "done" | "delete" }>`
  background-color: ${({ variant }) =>
    variant === "done" ? "rgb(102, 215, 89)" : "rgb(215, 89, 95)"};
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  color: white;
  border: 0;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
`;

const Input = styled.input`
  height: 35px;
  width: 335px;
  padding: 10px;
  border-color: #e8e8e8;
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(89, 159, 215);
  color: white;
  border: 0px;
  cursor: pointer;
`;
