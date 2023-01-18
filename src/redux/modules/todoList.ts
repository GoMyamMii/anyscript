import { v4 as uuidv4 } from "uuid";

// action value 라는 녀석
// action 의 type 을 정해주는 녀석 (항상 하드코딩 된 상수)

const DELETE_TODO = "DELETE_TODO" as const;
const ADD_TODO = "ADD_TODO" as const;
const TOGGLE_TODO = "TOGGLE_TODO" as const;

// action creator 라는 녀석
// action 객체를 만들어주는 녀석

export const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const addTodo = (
  titleDOM: HTMLInputElement,
  contentDOM: HTMLInputElement
) => {
  return {
    type: ADD_TODO,
    titleDOM,
    contentDOM,
  };
};

export const toggleTodo = (id: string) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof deleteTodo>;

////////////////////////////////////////

// 상태를 위한 타입 선언
export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};
type TodosState = Todo[];

const initialState = [
  {
    title: "제목1",
    content: "내용1",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "아침에 눈뜨기",
    content: "내용2",
    isDone: true,
    id: uuidv4(),
  },
  {
    title: "제목3",
    content: "내용3",
    isDone: false,
    id: uuidv4(),
  },
];

// redux 의 핵심이 되는 reducer 라는 녀석들
// reducer 는 한 파일에 한 녀석만 정의하고, export default 로 보내는게 국룰
// reducer 의 파라미터에는 state 와 action 을 받는다
// state 가 안들어오면 initialState 를 넣는다 라는 뜻. (state=initialState)
const todoList = (
  state: TodosState = initialState,
  action: TodosAction
): TodosState => {
  // 분기 만들어주기
  switch (action.type) {
    case DELETE_TODO:
      const snewTodos = [...state];
      const filteredTodos = snewTodos.filter((state) => state.id !== action.id);
      console.log(filteredTodos);
      return [...filteredTodos];

    //////////////////////////////////////////////////////////////////////////////////////

    case ADD_TODO:
      if (!action.titleDOM.value && !action.contentDOM.value) {
        alert("뭐함 대체?? 미침??");
        action.titleDOM.focus();
        return state;
      }
      if (!action.titleDOM.value) {
        alert("에휴.. 제목도 제대로 못쓰네.. 힘내라");
        action.titleDOM.focus();
        return state;
      }
      if (!action.contentDOM.value) {
        alert("아니 진짜 일부러 그러는거임 ?? 뭐 어디 아픔??");
        action.contentDOM.focus();
        return state;
      }
      const newTodo = {
        title: action.titleDOM.value,
        content: action.contentDOM.value,
        isDone: false,
        id: uuidv4(),
      };
      action.titleDOM.value = "";
      action.contentDOM.value = "";
      return [...state, newTodo];

    //////////////////////////////////////////////////////////////////////////////////////

    case TOGGLE_TODO:
      const newTodos = [...state];
      newTodos.forEach((state) => {
        if (state.id === action.id) {
          state.isDone = !state.isDone;
        }
      });
      return [...newTodos];

    // switch 는 default 값이 필요하고, reducer 안에서는 항상 default 값으로 state 를 반환한다.
    default:
      return state;
  }
};

export default todoList;
