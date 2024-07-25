import { CommentSchema } from "@/types/model/Comment";

export const comments: CommentSchema[] = [
  {
    commentId: "comment-12345",
    content: "디자인 초보도 참여 가능할까요?",
    writer: {
      userId: "kimjihyeon",
      name: "김지현",
      role: "user",
      position: "",
      profileUrl: "",
    },
    createdAt: "2024-05-01 11:02",
    reply: [
      {
        originId: "comment-12345",
        commentId: "comment-123451",
        content:
          "네, 가능합니다. 서로 공유하면서 배워나가는 스터디 모임입니다!",
        writer: {
          userId: "leesunhyeong",
          name: "이선형",
          role: "pro",
          position: "UIUX 디자이너",
          profileUrl: "",
        },
        createdAt: "2024.05.02 13:02",
      },
      {
        originId: "comment-12345",
        commentId: "comment-123452",
        content: "스터디 참여 신청서 작성 부탁드려요",
        writer: {
          userId: "leesunhyeong",
          name: "이선형",
          role: "pro",
          position: "UIUX 디자이너",
          profileUrl: "",
        },
        createdAt: "2024.05.02 13:03",
      },
    ],
  },
  {
    commentId: "comment-12357",
    content: "저도 참여하고 싶어요! 진행중인데 참여 가능할까요?",
    writer: {
      userId: "shinjiwoo",
      name: "신지우",
      role: "user",
      position: "",
      profileUrl: "",
    },
    createdAt: "2024.05.03 13:52",
    reply: [],
  },
  {
    commentId: "comment-1",
    content: "This is comment number 1",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-1",
        commentId: "reply-1",
        content: "Reply to comment number 1",
        writer: {
          userId: "shinjiwoo",
          name: "신지우",
          role: "user",
          position: "",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-2",
    content: "This is comment number 2",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-2",
        commentId: "reply-2",
        content: "Reply to comment number 2",
        writer: {
          userId: "shinjiwoo",
          name: "신지우",
          role: "user",
          position: "",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-3",
    content: "This is comment number 3",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-3",
        commentId: "reply-3",
        content: "Reply to comment number 3",
        writer: {
          userId: "shinjiwoo",
          name: "신지우",
          role: "user",
          position: "",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-4",
    content: "This is comment number 4",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-4",
        commentId: "reply-4",
        content: "Reply to comment number 4",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-5",
    content: "This is comment number 5",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-5",
        commentId: "reply-5",
        content: "Reply to comment number 5",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-6",
    content: "This is comment number 6",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-6",
        commentId: "reply-6",
        content: "Reply to comment number 6",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-7",
    content: "This is comment number 7",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-7",
        commentId: "reply-7",
        content: "Reply to comment number 7",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-8",
    content: "This is comment number 8",
    writer: {
      userId: "shinjiwoo",
      name: "신지우",
      role: "user",
      position: "",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-8",
        commentId: "reply-8",
        content: "Reply to comment number 8",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-9",
    content: "This is comment number 9",
    writer: {
      userId: "shinjiwoo",
      name: "신지우",
      role: "user",
      position: "",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-9",
        commentId: "reply-9",
        content: "Reply to comment number 9",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-10",
    content: "This is comment number 10",
    writer: {
      userId: "leesunhyeong",
      name: "이선형",
      role: "pro",
      position: "UIUX 디자이너",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-10",
        commentId: "reply-10",
        content: "Reply to comment number 10",
        writer: {
          userId: "leesunhyeong",
          name: "이선형",
          role: "pro",
          position: "UIUX 디자이너",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-11",
    content: "This is comment number 11",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-11",
        commentId: "reply-11",
        content: "Reply to comment number 11",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-12",
    content: "This is comment number 12",
    writer: {
      userId: "leesunhyeong",
      name: "이선형",
      role: "pro",
      position: "UIUX 디자이너",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [
      {
        originId: "origin-12",
        commentId: "reply-12",
        content: "Reply to comment number 12",
        writer: {
          userId: "hanyoojun",
          name: "한유준",
          role: "user",
          position: "개발자",
          profileUrl: "",
        },
        createdAt: "2024-07-24T14:08:54.101Z",
      },
    ],
  },
  {
    commentId: "comment-13",
    content: "This is comment number 13",
    writer: {
      userId: "kimjihyeon",
      name: "김지현",
      role: "user",
      position: "",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
  {
    commentId: "comment-14",
    content: "This is comment number 14",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
  {
    commentId: "comment-15",
    content: "This is comment number 15",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
  {
    commentId: "comment-16",
    content: "This is comment number 16",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
  {
    commentId: "comment-17",
    content: "This is comment number 17",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
  {
    commentId: "comment-18",
    content: "This is comment number 18",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
  {
    commentId: "comment-19",
    content: "This is comment number 19",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
  {
    commentId: "comment-20",
    content: "This is comment number 20",
    writer: {
      userId: "hanyoojun",
      name: "한유준",
      role: "user",
      position: "개발자",
      profileUrl: "",
    },
    createdAt: "2024-07-24T14:08:54.101Z",
    reply: [],
  },
];