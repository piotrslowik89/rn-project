import createDataContext from './createDataContext';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'delete_taskpost':
      return state.filter(taskPost => taskPost.id !== action.payload);
    case 'add_taskpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const addTaskPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_taskpost', payload: { title, content } });
    callback();
  };
};
const deleteTaskPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_taskpost', payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  taskReducer,
  { addTaskPost, deleteTaskPost },
  []
);