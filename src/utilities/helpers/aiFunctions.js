// FUNCTION TO WAKE-UP THE QNA MODEL
export const wakeUpQnaModel = async () => {
  // hitting to the AI model via API to get response
  const answer = await getAnswerFromModel({
    inputs: {
      question: "What is my name?",
      context: "My name is Clara.",
    },
  });

  // if answer received from the model return success message
  if (answer.hasOwnProperty("answer")) {
    const response = { status: 200, msg: "Model loaded successfully!" };
    return response;
  } else {
    // otherwise keep calling this function after every 10s
    // in order to check if the server responding
    setInterval(() => {
      console.log("Loading");
      wakeUpQnaModel();
    }, 10000);
  }
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
  const answer = await response.json();

  // if answer received from the model return error message
  // keep calling this function after every 20s in order to check
  // if the server responding
  if (answer.hasOwnProperty("error")) {
    setInterval(() => {
      console.log("Loading");
      getAnswerFromModel(data);
    }, 20000);
  } else {
    return answer;
  }
};
