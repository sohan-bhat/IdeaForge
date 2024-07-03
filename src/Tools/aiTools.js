import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true });

// export async function main() {
//   const chatCompletion = await getGroqChatCompletion();
//   // Print the completion returned by the LLM.
//   console.log(chatCompletion.choices[0]?.message?.content || "");
// }

export async function getGroqChatCompletion(userInput = '') {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `${userInput}`,
      },
      {
        role: "system",
        content: `Generate 2 ideas about the topic the user wants.If there is no input, generate 2 concise ideas about very diverse topics and tell the user what the random topic is.
        Make it concise as possible. Put Idea 1 and Idea 2 has small headers. Make sure to use correct formatting like padding. Make sure to be specifc.`,
      },
    ],
    model: "llama3-8b-8192",
  });
}
