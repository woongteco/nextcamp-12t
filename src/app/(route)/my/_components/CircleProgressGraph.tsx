export default function CircleProgressGraph({
  total,
  progress,
}: {
  total: number;
  progress: number;
}) {
  const SIZE = 162;
  const STROKE_WIDTH = 20;
  const RADIUS = SIZE / 2; // 반지름
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // 원 둘레

  // 초과시, 그래프 전부 채워야하기 때문에 dashoffset = 0
  // 이외는 total 대비 progress의 비율을 1에서 빼준다.
  const isExceed = total < progress;
  const progressRatio = isExceed ? 0 : 1 - progress / total;

  // 원둘레 대비 progress 비율을 dashoffset 변수로 지정
  const dashOffset = CIRCUMFERENCE * progressRatio;
  return (
    <svg width={SIZE} height={SIZE}>
      {/* 기본 원 (배경) */}
      <circle
        className="frameCircle"
        cx={RADIUS}
        cy={RADIUS}
        r={RADIUS - STROKE_WIDTH / 2}
        stroke={"#D9E0EB"}
        strokeWidth={STROKE_WIDTH}
        fill="transparent"
      />

      {/* 진행도를 나타내는 원 */}
      <circle
        className="progressBar"
        cx={RADIUS}
        cy={RADIUS}
        r={RADIUS - STROKE_WIDTH / 2}
        stroke="url(#paint0_angular_237_16620)"
        strokeWidth={STROKE_WIDTH}
        strokeLinecap="round"
        fill="transparent"
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "center",
          strokeDasharray: CIRCUMFERENCE - dashOffset,
          strokeDashoffset: dashOffset,
        }}
      />
      <defs>
        <radialGradient
          id="paint0_angular_237_16620"
          cx="0"
          cy="1"
          r="2"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(81 81) rotate(-45) scale(74.1195)"
        >
          <stop stopColor="#0066FF" />
          <stop offset="1" stopColor="#0FFED4" />
        </radialGradient>
      </defs>
    </svg>
  );
}
