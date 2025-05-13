import { useState } from "react";
import "./App.css";

function App() {
  const [nickname, setNickname] = useState("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const questions = [
    "혼자 보내는 시간이 필요하다",
    "계획보단 즉흥을 좋아한다",
    "감정보다 논리가 우선이다",
    "사람들과 어울리는 게 에너지를 준다",
    "새로운 아이디어를 자주 떠올린다",
    "세부적인 걸 꼼꼼히 챙긴다",
    "감성적인 콘텐츠에 잘 반응한다",
    "리더보다 조력자가 편하다"
  ];

  const mbtiTeams = {
    INFP: {
      team: "FC 바르셀로나",
      description: (name) =>
        `철학과 감성이 충만한 ${name}님에게 딱 맞는 팀은 [바르셀로나!]`,
      logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
    },
    ESTJ: {
      team: "바이에른 뮌헨",
      description: (name) =>
        `책임감 넘치는 ${name}님에게 어울리는 팀은 [바이에른 뮌헨!]`,
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_Munich_logo_%282017%29.svg"
    }
    // 나머지 MBTI는 원하는 만큼 추가
  };

  const getMbti = () => {
    if (answers.length < questions.length) return null;

    const mbti = [
      answers[0] ? "I" : "E",
      answers[1] ? "N" : "S",
      answers[2] ? "T" : "F",
      answers[3] ? "P" : "J"
    ].join("");

    return mbti;
  };

  const handleSelect = (value) => {
    setAnswers([...answers, value]);
  };

  const handleFinish = () => {
    const mbti = getMbti();
    const teamInfo = mbtiTeams[mbti] || mbtiTeams["INFP"];
    setResult(teamInfo);
  };

  const handleRestart = () => {
    setNickname("");
    setShowQuestions(false);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="App" style={{ padding: 20, fontFamily: "sans-serif" }}>
      {!showQuestions ? (
        <div>
          <h2>당신의 닉네임을 입력해주세요</h2>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임"
          />
          <br />
          <button
            onClick={() => setShowQuestions(true)}
            disabled={!nickname.trim()}
            style={{ marginTop: 10 }}
          >
            확인
          </button>
        </div>
      ) : result ? (
        <div>
          <h2>{nickname}님의 결과: {result.team}</h2>
          <img src={result.logo} alt="팀 로고" height={80} />
          <p>{result.description(nickname)}</p>
          <button onClick={handleRestart}>다시 하기</button>
        </div>
      ) : answers.length < questions.length ? (
        <div>
          <h3>Q{answers.length + 1}. {questions[answers.length]}</h3>
          <button onClick={() => handleSelect(true)}>그렇다</button>
          <button onClick={() => handleSelect(false)} style={{ marginLeft: 10 }}>
            아니다
          </button>
        </div>
      ) : (
        <button onClick={handleFinish}>결과 보기</button>
      )}
    </div>
  );
}

export default App;
