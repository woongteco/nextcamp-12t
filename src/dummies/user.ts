export function getWriter(userId?: string) {
  return {
    id: userId || "hanyoojun",
    name: "한유준",
    position: "개발자",
    role: "user",
    email: "sumin.yoon@chemeet.com",
    password: "1234",
    profileUrl: "",
    authProviderIn: undefined,
    phone: "010-1234-5678",
    badges: 0,
  };
}

export function getUser(userId?: string) {
  return {
    id: userId || "shinjiwoo",
    name: "신지우",
    position: "",
    role: "user",
    email: "shin.jiwoo@chemeet.com",
    password: "1234",
    profileUrl: "",
    authProviderIn: undefined,
    phone: "010-1234-5678",
    interest: [
      {
        value: "cate_6_4",
        label: "UI/UX 디자인",
      },
      {
        value: "cate_6_1",
        label: "웹 디자인",
      },
    ],
    badges: 8,
  };
}
