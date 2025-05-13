import { useState } from "react";
import "./App.css";

function App() {
  const [nickname, setNickname] = useState("");
  const [showQuestions, setShowQuestions] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

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

const mbtiTeams = {
  INFP: {
    team: "FC 바르셀로나",
    description: (name) =>
      `철학과 감성의 화신 ${name}님에게 어울리는 팀은 [FC 바르셀로나]입니다!  
      당신은 승부보다 '아름다운 플레이'에 가슴이 뛰고, 메시의 드리블에서 삶의 의미를 찾는 타입이죠.  
      창의성과 순수함, 그리고 '정의로운 축구란 무엇인가'에 대한 진지한 고민을 끊임없이 하며…  
      <span style="color:red">현실에서는 종종 감정의 파도에 휩쓸려 일찍 체력이 고갈되곤 합니다ㅋㅋ  
      너무 많이 생각하다가 전반전에 멘탈이 나가버리는 건 함정ㅜㅜ;;;</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
  },
  ENTJ: {
    team: "인터 밀란",
    description: (name) =>
      `리더십과 전략적 사고의 대명사 ${name}님은 [인터 밀란] 스타일입니다.  
      당신은 팀을 승리로 이끄는 설계자. 상대 전술은 이미 어제 분석 끝났고, 미팅도 본인이 주재하죠.  
      목표 설정? 한 번 하면 못 멈춥니다. 우승이 아니면 의미 없다고 생각하는 불도저 같은 기질!  
      <span style="color:red">단점은... 음… 너무 냉철하다 못해 감성이라곤 머리끈 하나쯤 챙기는 수준이라, 가끔 팀원들이 숨 막혀요.  
      전반 30분만에 감독까지 갈아치우고 싶은 욕구를 누르세요!</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg"
  },
  ISFP: {
    team: "AS 로마",
    description: (name) =>
      `감성과 충성심의 결정체 ${name}님은 [AS 로마]와 운명적으로 연결돼 있어요~  
      당신은 유니폼 색깔에도 감정이입하고, 경기장의 햇살까지 기억하는 섬세한 팬!  
      근데 팀이 지면 하루 종일 우울함;; 티는 안 내는데 티남ㅋㅋ  
      <span style="color:red">단점은… 혼자 감정에 빠져들다 정신 못 차릴 때가 많아요ㅜㅜ  
      너무 혼자 속앓이 말고! 때론 소리도 지르자구요!</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg"
  },
  INTJ: {
    team: "맨체스터 시티",
    description: (name) =>
      `전술 설계의 달인 ${name}님은 [맨체스터 시티]가 찰떡입니다!  
      당신은 축구를 감정이 아닌 '해결해야 할 퍼즐'로 보는 전략가 스타일!  
      페널티킥 하나에도 확률계산 들어가고, 패스 각도는 37.5도가 최적이라며 분석 들어갑니다;;  
      <span style="color:red">단점은... 감동적인 역전골에도 "Expected Goals는 낮았는데?"라며 모두의 감정을 얼려버림ㅋㅋ  
      너무 똑똑한 것도 문제예요~ 가끔은 그냥 소리 질러보자구요!</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
  },
  INFJ: {
    team: "파리 생제르맹",
    description: (name) =>
      `비전과 가치로 움직이는 ${name}님은 [파리 생제르맹] 타입!  
      축구는 단순한 경기가 아니라, 세상과 연결된 철학이자 이상향이죠✨  
      선수들의 과거 스토리까지 기억하며 혼자 눈물 흘리다가… 팀이 욕먹으면 같이 우울해져요ㅠㅠ  
      <span style="color:red">단점은… 혼자 의미부여 하다가 이적시장에서 멘붕 오는 경우가 많다는 거ㅋㅋ  
      세상에 완벽한 구단은 없어요, 너무 마음 다치지 마세요 제발!</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
  },
  ISTJ: {
    team: "레알 마드리드",
    description: (name) =>
      `규칙과 실력, 그리고 명문 구단의 위엄을 중시하는 ${name}님은 [레알 마드리드] 그 자체입니다.  
      "역사는 결과로 말한다"는 철학 아래, 꾸준함과 냉정함으로 팀을 응원하죠!  
      관중석에서도 전술 메모할 것 같은 진지함...ㅋㅋ  
      <span style="color:red">근데 단점은... 감성 플레이 보면 "쓸데없는 드리블이야"라며 정색하는 버릇ㅠㅠ  
      좀만 마음 풀어요~ 승리만큼 감동도 중요하답니다!</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
  },
  ISFJ: {
    team: "첼시 FC",
    description: (name) =>
      `헌신과 책임감의 화신 ${name}님은 [첼시 FC]에 딱이에요!  
      팀이 힘들어도 떠나지 않고, 조용히 묵묵히 응원하는 그런 든든한 팬~  
      부상당한 선수 근황까지 챙기면서 정 붙였다가, 이적하면 가슴 찢어지는 거죠 ㅜㅜ  
      <span style="color:red">단점은… 맨날 팀 걱정하다 본인 스트레스가 더 쌓인다는 점ㅋㅋ  
      구단주보다 더 팀 걱정하는 스타일ㅋㅋ 쉬엄쉬엄 하세요~</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
  },
  INTP: {
    team: "아약스",
    description: (name) =>
      `아이디어와 전술 실험을 좋아하는 ${name}님은 [아약스]가 딱이에요!  
      유소년 시스템? 포지션 변경? 이런 창의적 실험 좋아 죽음ㅋㅋ  
      축구가 수학처럼 느껴질 때가 있다는 사실, 저만 그런 거 아니죠?  
      단점은… 너무 분석하다 골 들어가도 “저건 우연이지”라며 감정 제로로 평가함;;  
      한 번쯤은 ‘와아아아아!!!’ 좀 해주세요 제발요ㅋㅋ</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg"
  },
  ESTP: {
    team: "토트넘 홋스퍼",
    description: (name) =>
      `열정! 속도! 돌격! ${name}님은 [토트넘]같은 에너지 폭발형 팬입니다.  
      경기 시작하자마자 소리 지르고, 옆 사람과 하이파이브하고, 응원가는 이미 암기 완료ㅋㅋ  
      지면 “다음 경기 이기면 되지!”라며 쿨하게 넘기지만… 마음 속은 불타고 있음🔥  
      <span style="color:red">단점은… 이길 땐 세상 자신감인데, 질 땐 텐션이 바닥까지 떨어짐ㅠㅠ  
      감정기복 너무 심해서 팀보다 팬이 먼저 지침ㅋㅋ</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
  },
  ESFP: {
    team: "마르세유",
    description: (name) =>
      `열정과 축제의 아이콘 ${name}님은 [마르세유]가 딱이에요!  
      경기 보는 게 아니라 공연 보는 듯한 감각! 선수 소개 나올 때 이미 감정 200% 투입ㅋㅋ  
      무대 체질이라 경기장 분위기 띄우는 데 일가견 있음~  
      <span style="color:red">단점은… 실력 안 보고 얼굴로 응원선수 고르는 경향 있음ㅋㅋ (응...? 아닌가요?)  
      그래도 분위기 메이커가 최고죠! 덕분에 모두가 신납니다~</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/5/58/Olympique_Marseille_logo.svg"
  },
  ENFP: {
    team: "리버풀",
    description: (name) =>
      `열정과 희망의 전도사 ${name}님은 [리버풀]과 찰떡이에요!  
      "You'll Never Walk Alone" 부를 때 눈물 찔끔 흘린 적 있다면 이미 당신은 레즈ㅋㅋ  
      역전 드라마에 목숨 거는 편이라, 극적인 승부에 심장이 탈진함ㅜㅜ  
      <span style="color:red">단점은… 감정이입이 너무 강해서 이겼을 때도 울고 졌을 때도 울고… 맨날 울어ㅋㅋ  
      물 좀 마시고… 가끔은 이긴 건 이긴 거니까 그냥 웃자!!</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
  },
  ENTP: {
    team: "도르트문트",
    description: (name) =>
      `아이디어 폭발형 ${name}님은 [도르트문트]와 환상의 케미!  
      유망주 키우고, 매 시즌 신선한 전술 실험하는 팀 스타일이 너무 좋음ㅋㅋ  
      생각 많고 말도 많고, 팀보다 전술 이야기하다 경기 놓칠 수도 있음;;  
      <span style="color:red">단점은… 너무 빠르게 새로운 걸 추구하다 금방 싫증낼 위험 ㅜㅜ  
      꾸준함도 축구의 미덕! 한 팀만 좀 오래 사랑해줘요 제발ㅋㅋ</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg"
  },
  ESTJ: {
    team: "바이에른 뮌헨",
    description: (name) =>
      `조직력과 실적 중시하는 ${name}님은 [바이에른 뮌헨]과 완벽 궁합!  
      매 시즌 우승 후보 아니면 안 보는 타입ㅋㅋ '계획된 우승'이 제일 감동적이죠!  
      어설픈 플레이 보면 참지 못하고, 전술 틀어지면 바로 지적 들어감;;  
      <span style="color:red">단점은… 감정 표현이 부족해서 옆 사람이 감동받아도 “저건 전략적 성공이야” 한마디로 끝냄ㅋㅋ  
      가끔은 이성 OFF, 감성 ON 모드도 켜줘요~</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_Munich_logo_%282017%29.svg"
  },
  ESFJ: {
    team: "나폴리",
    description: (name) =>
      `정 많고 공동체 사랑 넘치는 ${name}님은 [나폴리] 스타일이에요~  
      팬들과 함께 노래하고, 동네 주민 다 아는 것 같은 정겨움ㅋㅋ  
      응원팀이 이기면 이웃에게 간식 돌릴 기세;;  
      <span style="color:red">단점은… 팀이 지면 본인이 잘못한 것처럼 죄책감 느낌ㅜㅜ  
      혼자 다 짊어지지 마요! 당신은 팬일 뿐이니까요~</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg"
  },
  ENFJ: {
    team: "아스날",
    description: (name) =>
      `이상주의적 리더 ${name}님은 [아스날]과 딱 맞는 궁합!  
      팀이 슬럼프일 때도 “우리 다시 일어날 수 있어요”라며 희망 전파함ㅋㅋ  
      팬 커뮤니티에서도 분위기 메이커, “믿고 기다리면 꽃길 올 거예요~”라는 멘트 장착중.  
      <span style="color:red">단점은… 현실 무시하고 맨날 미래만 보다 이적시장 놓치기ㅠㅠ  
      리더십 좋지만 가끔은 냉정한 판단도 필요합니다요!</span>`,
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
  }
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
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={handleFinish}
            style={{
              marginTop: "20px",
              padding: "16px 32px",
              fontSize: "18px",
              borderRadius: "10px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              cursor: "pointer",
              minWidth: "160px"
            }}
          >
            결과 보기
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
