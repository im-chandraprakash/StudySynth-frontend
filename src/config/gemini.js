const API_KEY = "AIzaSyD33FAoxvp-HTbPBmJFYXfaaNEJl_dyunU";

import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    let a = "computer network";
    let b =
        "An operating system acts as an intermediary between the user of a computer and computer hardware. The purpose of an operating system is to provide an environment in which a user can execute programs conveniently and Efficiently";
    const prompt = `
        Title: [${a}]
        Description: [${b}]
        **Accuracy in percentage**
        give me accuracy only and nothing else and not an even single context just only accuracy of the description wheather that belongs to that title or not
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    if (text) {
        console.log(text);
    }
}

export default run;
