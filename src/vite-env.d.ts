/// <reference types="vite/client" />

// The app uses the browser's Web Speech APIs (SpeechRecognition /
// webkitSpeechRecognition) for the microphone pronunciation practice
// feature. These aren't part of the standard DOM lib typings, so they're
// declared loosely here as `any`-shaped constructors.
interface Window {
  SpeechRecognition?: any
  webkitSpeechRecognition?: any
}
