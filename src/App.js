import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const listenOnce = () =>
    SpeechRecognition.startListening({ continuous: true });
  const listenOnEnglish = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  const listenOnGerman = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "de-DE",
    });
  const listenOnItalian = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "ru",
    });
  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={listenOnce}>Start</button>
      <button onClick={listenOnEnglish}>Listen on English</button>
      <button onClick={listenOnGerman}>Listen on German</button>
      <button onClick={listenOnItalian}>Listen on Italian</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
