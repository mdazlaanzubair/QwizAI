// FUNCTION TO WAKE-UP THE QNA MODEL
export const wakeUpQnaModel = async () => {
  const testData = {
    inputs: {
      question: "What is my name?",
      context: "My name is Clara.",
    },
  };
  const response = await getAnswerFromModel(testData);
  return response;
};

// FUNCTION TO PERFORM QNA TASKS
export const getAnswerFromModel = async (data) => {
  const url =
    import.meta.env.VITE_HUG_QWIZBOT_BASE_URL +
    import.meta.env.VITE_HUG_QWIZBOT_QNA_MODEL;
  const urlConfig = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HUG_QWIZBOT_QNA_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  };
  const response = await fetch(url, urlConfig);
  const result = await response.json();
  return result;
};
