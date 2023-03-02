// FUNCTION TO WAKE-UP THE QNA MODEL
export const wakeUpModel = async () => {
  // hitting to the AI model via API to get response
  const answer = await getAnswer({
    inputs: {
      question: "What is my name?",
      context: "My name is Clara.",
    },
  });

  return { status: 200, msg: "Model loaded successfully!" };
};

// FUNCTION TO PERFORM QNA TASKS
export const getAnswer = async (data) => {
  // configuring api url and options
  const url = import.meta.env.VITE_QNA_MODEL;
  const urlConfig = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_QNA_MODEL_API_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  };

  // requesting to api and converting response in json
  const response = await fetch(url, urlConfig);
  const answer = await response.json();

  // if answer received from the model return answer
  if (answer.hasOwnProperty("answer")) return answer;

  // otherwise call the function after "estimated_time" i.e.
  // approx 20s in order to get the requested response
  const time = answer.estimated_time * 1000;
  setTimeout(() => {
    console.log("Loading model", answer);
    getAnswer(data);
  }, time);
};
