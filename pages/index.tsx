import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

const index:NextPage = () => {
    return (
        <TodoList />
    );
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
      async ({ req }) => {
        console.log(store);
        try {
          const { data } = await getTodosAPI();
          console.log(data);
          store.dispatch(todoActions.setTodo(data));
          return { props: { todos: data } };
        } catch (e) {
          console.log(e);
          return { props: { todos: [] } };
        }
      }
  );
export default index;