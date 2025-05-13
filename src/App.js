import { useState } from "react";
import "./App.css";

// 질문지
const questions = [
  "여행 계획을 짤 때, 일정표보다 '그날 가고 싶은 곳'을 마음대로 정하는 편인가요?",
  "논란 많은 선수라도 실력만 뛰어나다면, 팀에 남겨야 한다고 생각하나요?",
  "모임 자리에서 활발히 대화에 참여하기보다는, 관찰자로 있는 시간이 더 편한가요?",
  "감독이 매 경기 새로운 전술을 실험할 때, '창의적이다'보다 '불안하다'는 감정이 더 먼저 떠오르나요?",
  "오래 알고 지낸 친구라도 가치관이 어긋나면, 말없이 거리를 두는 대신 단호하게 관계를 정리하나요?",
  "응원하던 팀이 구단주의 투자 철회로 무너질 때, 실망보단 '비즈니스란 이런 거지'라는 생각이 먼저 드나요?",
  "감동적인 영화를 본 뒤, 그 감정의 여운이 하루 이상 이어지는 경우가 많나요?",
  "중요한 경기를 위해 팀이 전통 색상과 문양을 바꾸겠다고 선언했을 때, 감정적으로 거부감이 드나요?",
  "중요한 결정을 할 때, 직감보다 통계나 과거 데이터를 더 신뢰하나요?",
  "중요한 경기에서 패배했을 때, 분노보다 '배울 점이 있다'는 쿨한 분석부터 하나요?"
];

// 팀 목록 (이미 있으니 생략 가능)

function App() {
  const [nickname, setNickname] = useState("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

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
            style={{
              fontSize: "18px",
              padding: "14px 18px",
              width: "260px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "16px"
            }}
          />
          <br />
          <button
            onClick={() => setShowQuestions(true)}
            disabled={!nickname.trim()}
            style={{
              fontSize: "18px",
              padding: "14px 28px",
              borderRadius: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            확인
          </button>
        </div>
      ) : result ? (
        <div>
          <h2>{nickname}님의 결과: {result.team}</h2>
          <img src={result.logo} alt="팀 로고" height={80} />
          <p
            style={{
              whiteSpace: "pre-line",
              fontSize: "16px",
              lineHeight: "1.6",
              marginTop: "20px"
            }}
            dangerouslySetInnerHTML={{ __html: result.description(nickname) }}
          ></p>
          <button
            onClick={handleRestart}
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "8px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
          >
            다시 하기
          </button>
        </div>
      ) : answers.length < questions.length ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <div style={{ fontSize: "22px", marginBottom: "30px" }}>
            <strong style={{ fontSize: "24px" }}>
              Q{answers.length + 1}.
            </strong>
            <br />
            {questions[answers.length]}
          </div>

          <div>
            <button
              onClick={() => handleSelect(true)}
              style={{
                fontSize: "22px",
                padding: "18px 32px",
                marginRight: "20px",
                borderRadius: "12px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                cursor: "pointer",
                minWidth: "140px"
              }}
            >
              그렇다
            </button>

            <button
              onClick={() => handleSelect(false)}
              style={{
                fontSize: "22px",
                padding: "18px 32px",
                borderRadius: "12px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                cursor: "pointer",
                minWidth: "140px"
              }}
            >
              아니다
            </button>
          </div>
        </div>
      ) : (
        <button onClick={handleFinish}>결과 보기</button>
      )}
    </div>
  );
}

export default App;
