

import { useState } from "react";
import "./App.css";

function App() {
const questions = [
  // 질문 생략 (변경 없음)
];

const mbtiTeams = {
  INFP: {
    team: "FC 바르셀로나",
    description: (name) => `철학과 감성이 충만한 ${name}님에게 딱 맞는 팀은 바로, [FC 바르셀로나!]\n\n${name} 님의 성향은 유소년 육성과 이상주의 철학에 진심인 바르셀로나와 찰떡이에요.\n근데 현실보단 꿈을 좇는 스타일이라 가끔은 공허할 수도 있어요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
  },
  INFJ: {
    team: "인터 밀란",
    description: (name) => `깊은 통찰과 내면의 조화를 추구하는 ${name}님에게 어울리는 팀은 바로, [인터 밀란!]\n\n${name} 님은 전통과 전술의 균형을 아는 분, 인터 밀란과 분위기 잘 맞아요.\n다만 고집이 세고 상황 변화에 유연하진 않은 것도 닮았네요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Inter_Milan.svg"
  },
  INTP: {
    team: "아스널 FC",
    description: (name) => `지적인 호기심이 가득한 ${name}님에게 어울리는 팀은 [아스널 FC!]\n\n실험적이고 철학적인 축구 좋아하시죠? 아스널이 딱입니다.\n다만 너무 실험만 하다가 중요한 순간 놓치는 것도 공통점이라면 공통점...`,
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
  },
  INTJ: {
    team: "맨체스터 시티",
    description: (name) => `계획적이고 전략적인 ${name}님께 추천하는 팀은 [맨체스터 시티!]\n\n펩의 전술처럼 완벽주의 성향이 잘 어울립니다.\n근데 인간미 없다는 소리 듣는 거, 둘 다 피하긴 어렵겠네요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
  },
  ISFP: {
    team: "AC 밀란",
    description: (name) => `감성적이고 낭만적인 ${name}님에게 어울리는 팀은 바로, [AC 밀란!]\n\n전통과 감성에 진심인 당신, 밀란과 아주 잘 어울려요.\n근데 너무 감성적이라 현실감각 떨어지는 것도 비슷하네요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg"
  },
  ISFJ: {
    team: "토트넘 홋스퍼",
    description: (name) => `성실하고 헌신적인 ${name}님과 닮은 팀은 [토트넘 홋스퍼!]\n\n묵묵히 팀을 지키는 모습이 너무 닮았어요.\n근데 맨날 착하기만 하다가 큰 성과 없이 끝날 수도 있다구요...`,
    logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
  },
  ISTP: {
    team: "RB 라이프치히",
    description: (name) => `실용적이고 분석적인 ${name}님에게 어울리는 팀은 [RB 라이프치히!]\n\n효율과 결과 중심의 축구가 당신 성향과 잘 맞아요.\n다만 팬과 감정 교류는 조금 서먹할 수도 있겠네요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg"
  },
  ISTJ: {
    team: "유벤투스 FC",
    description: (name) => `전통과 규율을 중시하는 ${name}님께 추천하는 팀은 [유벤투스 FC!]\n\n안정감과 원칙 중시하는 점이 아주 닮았어요.\n그런데요… 재미나 창의성은 조금 양보해야 할지도요?`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg"
  },
  ENFP: {
    team: "리버풀 FC",
    description: (name) => `열정 폭발하는 ${name}님과 찰떡인 팀은 [리버풀 FC!]\n\n팬들과 함께 뛰는 그 감성, 리버풀밖에 없죠.\n근데 가끔 너무 감정에 휘둘려 흐름 놓치는 것도 똑같습니다;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
  },
  ENFJ: {
    team: "보루시아 도르트문트",
    description: (name) => `따뜻한 리더 ${name}님께 어울리는 팀은 [도르트문트!]\n\n유망주 육성과 팬 사랑의 정신, 당신과 닮았습니다.\n근데 실속 없이 이상만 좇다 끝날 수도 있어요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Borussia_Dortmund_logo.svg"
  },
  ENTP: {
    team: "나폴리",
    description: (name) => `도전 정신 가득한 ${name}님에게 어울리는 팀은 [나폴리!]\n\n열정과 변화, 반전 있는 축구 다 좋아하시죠?\n근데 전략 없이 들이대다가 자멸하는 것도... 조심해요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/SSC_Napoli_badge.svg"
  },
  ENTJ: {
    team: "레알 마드리드",
    description: (name) => `카리스마 넘치는 ${name}님에게 추천하는 팀은 [레알 마드리드!]\n\n최고 아니면 의미 없는 당신, 왕의 팀과 닮았어요.\n근데 감정 빼고 결과만 따지다 사람 잃는 건 주의하세요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"
  },
  ESFP: {
    team: "맨체스터 유나이티드",
    description: (name) => `화려함을 사랑하는 ${name}님에게 어울리는 팀은 [맨체스터 유나이티드!]\n\n극적인 드라마, 감성 충만한 팀이 딱이에요.\n근데 감정 기복 심해서 팀도, 당신도 롤러코스터 탈 수 있어요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"
  },
  ESFJ: {
    team: "파리 생제르맹",
    description: (name) => `세련되고 조화로운 ${name}님에게 추천하는 팀은 [파리 생제르맹!]\n\n스타 중심의 화려한 축구, 당신과 잘 맞습니다.\n근데 외형에 너무 집중하다가 팀워크 부족할 수 있어요;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"
  },
  ESTP: {
    team: "마르세유",
    description: (name) => `즉흥적이고 열정적인 성향의 ${name}님에게 딱 맞는 클럽은 바로, [마르세유!]\n\n${name} 님의 성향은 팬들과의 거리감 없이 뜨겁게 호흡하는 클럽인 마르세유와 찰떡이에요.\n근데 과열되기 쉬우며 전략적인 사고 부족하단 점도 비슷하답니다;;`,
    logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Olympique_Marseille_logo.svg"
  },
  ESTJ: {
    team: "바이에른 뮌헨",
    description: (name) => `책임감 넘치는 ${name}님에게 어울리는 팀은 [바이에른 뮌헨!]\n\n시스템과 효율을 중시하는 스타일, 정말 닮았어요.\n근데 유연성 부족해서 사람 피곤하게 할 수 있다구요...`,
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_Munich_logo_%282017%29.svg"
  }
}
}
// 결과 출력 시: <p>{result.description(nickname)}</p> 형태로 렌더링 필요
export default App;
