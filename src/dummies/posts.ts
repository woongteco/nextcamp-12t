import { PostDataFull } from "@/types/model/PostItem";

const alphabet =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
const base = alphabet.length;
function encodeNumToStr(num: number): string {
  if (isNaN(num) || +num <= 0) {
    throw new Error("It's not a number.");
  }
  let encoded = "";
  while (num) {
    const remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
}

/**
 * @deprecated
 */
const example = [
  {
    postId: encodeNumToStr(101355),
    category: {
      value: "free",
      label: "자유게시판",
      isRecruiting: null,
    },
    contents: {
      title: "고민있어요",
      body: `<p>안녕하세요 신입 프론트 개발자입니다.</p><p>&nbsp;</p><p>오늘 극 초기 스타트업에 합격했습니다.</p><p>제가 관심있는 도메인입니다.</p><p>초봉이 3300이고요</p><p>&nbsp;</p><p>그리고 면접 예정인 회사가 2개있습니다.</p><p>그 중 하나는 스타트업, 솔루션 회사인데 초봉이 4500입니다.</p><p>1차 면접이 금요일에 예정입니다. (2차 면접까지 있어요.)</p><p>&nbsp;</p><p>회사에 출근하는게 좋다생각하시나요</p><p>입사포기하고 4500 면접 보는게 좋다 생각하시나요?</p><p>&nbsp;</p><p>초봉이 3300인게 이후 연봉에 크게 영향이 갈까요?</p>`,
      linkedStudyId: null,
    },
    writer: {
      _id: "hanyoojun",
      name: "한유준",
      email: "",
      phone: "",
      role: "user",
      position_tag: "개발자",
      profile_img: "",
    },
    createdAt: "2024-07-24 22:10:00",
    view: 22,
    like: 8,
    comments: [],
  },
  {
    postId: encodeNumToStr(101354),
    category: {
      value: "study",
      label: "스터디 홍보",
      isRecruiting: true,
    },
    contents: {
      title: "모든 프로덕트에 대한 스터디",
      body: `<p>조금 더 공부하면서 성장하는게 목적인 온라인 디스코드 스터디원을 모집합니다.</p><p></p><p>스터디 목표는 단순히 저녁에 공부하는 습관을 만드는 것입니다.</p><p>하나의 공통된 주제는 없고</p><p>원하시는 공부를 하시면 됩니다.</p><p>장기간 성장을 바라보는 분들을 환영합니다.</p><p></p><p>진행 시간</P><p>월, 화, 목 오후 20시~오후 21시입니다.</p><p>최소 주 2회 참여 해주세요.</p><p></p><p>진행 방식</p><p>공부할 것을 공유하며 간단히 이야기하고</p><p>한시간동안 공부합니다.</p><p>관심이 있으시면 댓글로 간단하게 남겨주세요.</p>`,
      linkedStudyId: "1",
    },
    writer: {
      _id: "hanyoojun",
      name: "한유준",
      email: "",
      phone: "",
      role: "user",
      position_tag: "개발자",
      profile_img: "",
    },
    createdAt: "2024-06-29 20:00:00",
    view: 20,
    like: 5,
    comments: [
      {
        postId: "11212",
        commentId: "comment-12345",
        content: "초보도 참여 가능할까요?",
        writer: {
          _id: "kimjihyeon",
          name: "김지현",
          email: "",
          phone: "",
          role: "user",
          position_tag: "",
          profile_img: "",
        },
        createdAt: "2024-07-01 11:02",
        reply: [],
      },
    ],
  },
  {
    postId: encodeNumToStr(101353),
    category: {
      value: "study",
      label: "스터디 홍보",
      isRecruiting: true,
    },
    contents: {
      title:
        "[면접 스터디] 강남 오프라인 프론트엔드 면접 준비 ( 기술면접, CS 등 ) - 추가 모집중입니다!!",
      body: `<h3><strong>스터디 진행 방식</strong></h3><p>스터디 당일에 랜덤으로 질문 주제를 정합니다.</p><p>인성 질문 2개, 기술 질문 4개씩</p><p>인성 질문 e.g. “개발자가 되고 싶은 이유가 무엇인가요?”</p><p>기술 질문 e.g. “이 기술 스택을 선택한 이유가 무엇인가요?”</p><p>당황하는 연습도 중요하다고 생각해 랜덤으로 질문으로 선택하게 됐습니다.</p><p>밤 20시, 해당 질문에 대한 답변을 보지 않은 채 이야기합니다.</p><p>20시를 1순위로 하되, 합의 하에 시간을 유동적으로 정해도 됩니다.</p><p>7일 중 3일 진행합니다. (해당 주의 마지막 스터디 날에, 다음 주 일정을 픽스합니다)</p><p>캠 켜고 온라인으로 진행합니다.</p><p>총 4명으로 진행을 하며, 2:2로 나누어 진행을 합니다.</p><h3><strong>대상</strong></h3><p>면접 준비가 반드시 필요하신 분</p><p>프론트엔드 개발자로 취업을 준비하고 계신 분</p><p>이력서, 포트폴리오가 어느정도는 준비되신 분</p><p>주 3회 저녁 20시에 시간 투자가 가능하신 분</p><h3><strong>벌금제</strong></h3><p>공용 통장에 30,000원씩 입금합니다.</p><p>전 주에 픽스했던 스터디 날에 결석해야 하는 경우 5,000원씩 벌금이 늘어납니다.</p><p>정말 피치 못할 사정(경조사, 면접, 코테)의 경우만 제외합니다.</p><p>스터디 4주가 끝나면 자신이 쌓은 벌금은 상대방이 가져가게 됩니다.</p><p>중도 탈퇴 시, 반환금은 남은 스터디원과 나눠 갖습니다.</p><h3><strong>기간</strong></h3><p>1월 29일 ~ 2월 25일 (4주)</p><p>현재 2명 있으며, 2명 더 모집합니다.</p><p>면접에 대한 고민이 많고, 면접에서 벽을 느낀 한 프론트엔드 개발자 준비생입니다.</p><p><a href="https://www.superookie.com/contents/5ddd14198b129f585f1fa15f" rel="noopener noreferrer" target="_blank">https://www.superookie.com/contents/5ddd14198b129f585f1fa15f</a></p><p>이 글과, 여러 멘토 분들이 추천해준 방식인 “경험을 직접 이야기하며 내 꺼로 만드는 것”이 중요하다는 것을 느껴 스터디를 기획하게 되었습니다. 높은 열정과, 저와 뜻이 같은 분과 함께 하고 싶습니다.</p><p>보증금이 적은 금액이 아니고, 규칙 또한 빡셉니다. 정말로 열심히 할 의지가 있으신 분들만 신청해주세요 !</p>`,
      linkedStudyId: null,
    },
    writer: {
      _id: "hanyoojun",
      name: "한유준",
      email: "",
      phone: "",
      role: "user",
      position_tag: "개발자",
      profile_img: "",
    },
    createdAt: "2024-06-29 00:00:00",
    view: 12,
    like: 9,
    comments: [],
  },
  {
    postId: encodeNumToStr(101352),
    category: {
      value: "study",
      label: "스터디 홍보",
      isRecruiting: false,
    },
    contents: {
      title: "안드로이드 면접 스터디",
      body: `<p><strong>[개발 스터디 모집 내용]</strong></p><ol><li>스터디 주제 :백엔드 면접 준비</li><li>스터디 목표 : 백엔드 면접 준비</li><li>예상 모집인원 : 4 ~5</li><li>스터디 소개와 개설 이유 : 면접 준비</li><li class="ql-indent-1">이력서 및 포트포폴리오 피드백 / 프로젝트 관련 질문 / CS 관련 질문</li><li class="ql-indent-1">일주일에 한번씩 면접</li><li class="ql-indent-2">한사람 당 약 20분</li></ol><p>&nbsp;</p><p>스터디 관련 주의사항 :</p><p>스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.)&nbsp;😀</p>`,
      linkedStudyId: null,
    },
    writer: {
      _id: "hanyoojun",
      name: "한유준",
      email: "",
      phone: "",
      role: "user",
      position_tag: "개발자",
      profile_img: "",
    },
    createdAt: "2024-06-25 00:00:00",
    view: 18,
    like: 6,
    comments: [
      {
        postId: "11212",
        commentId: "comment-1",
        content: "This is comment number 1",
        writer: {
          _id: "hanyoojun",
          name: "한유준",
          email: "",
          phone: "",
          role: "user",
          position_tag: "개발자",
          profile_img: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
        reply: [
          {
            replyId: "origin-1",
            commentId: "reply-1",
            content: "Reply to comment number 1",
            writer: {
              _id: "hanyoojun",
              name: "한유준",
              email: "",
              phone: "",
              role: "user",
              position_tag: "개발자",
              profile_img: "",
            },
            createdAt: "2024-07-24T14:08:54.101Z",
          },
        ],
      },
      {
        postId: "11212",
        commentId: "comment-2",
        content: "This is comment number 2",
        writer: {
          _id: "kimjihyeon",
          name: "김지현",
          email: "",
          phone: "",
          role: "user",
          position_tag: "",
          profile_img: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
        reply: [],
      },
    ],
  },
];

// export function getPosts(category?: string): PostDataFull[] {
//   if (category === undefined || category === "all") {
//     return example;
//   }
//   return example.filter((post) => post.category.value === category);
// }

// export function getPost(id: string): PostDataFull {
//   const filtered = example.find((post) => post.postId === id);
//   if (filtered) {
//     return filtered;
//   }
//   return { ...example[0] };
// }
