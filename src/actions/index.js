import ttdb from '../apis/ttdb';

export const fetchPosts = () => {
  return async function (dispatch, getState) {
    const response = await ttdb.get();

    dispatch({ type: 'FETCH_POSTS', payload: response.data.results });
  };
};

export const selectedAnswer = (question, answer, correctC, incorrectC) => {
  if (question === answer)
    return {
      type: 'SELECTED_ANSWER',
      payload: { cC: correctC + 1, incC: incorrectC },
    };
  else if (question !== answer)
    return {
      type: 'SELECTED_ANSWER',
      payload: { cC: correctC, incC: incorrectC + 1 },
    };

  return {
    type: 'SELECTED_ANSWER',
    payload: { cC: correctC, incC: incorrectC },
  };
};
