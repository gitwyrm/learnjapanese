# Learn Japanese app

A simple React web application to learn Japanese, currently in development.

It's a single page application, so runs fully client side in the web browser, no server side component.

![Screenshot](https://github.com/user-attachments/assets/717b6937-7b37-4046-a8d0-2b6f1d7c0493)

A copy of it is available here on Github Pages: [Learn Japanese](https://gitwyrm.github.io/learnjapanese/)

## Status
Development started March 16th 2025

Right now, there are a few simple multiple choice quizzes for Hiragana, Katakana, and Kanji. For the Hiragana and Katakana, you are shown a Japanese symbol and given choices in romaji.

If you click the right button, it turns green, and the symbol is spoken using Japanese Text-to-Speech (TTS) built into the web browser to better reinforce which option is correct and also to help you learn the pronunciation.

The Kanji quizzes work almost the same, but there is no text-to-speech since each Kanji can be read differently depending on the context. The Kanji quiz is separated into three parts where the buttons you press have either on'yomi, kun'yomi, or the English translation of the Kanji.

## Start dev server
npm run dev
