interface AnimatedUnderlineProps {
  color?: string;
}

const AnimatedUnderline = ({ color = "#4CAF50" }: AnimatedUnderlineProps) => {
  return (
    <svg className="absolute -bottom-2 left-0 w-full" height="10" aria-hidden>
      <path
        d="M0 5 Q25 1, 50 5 T100 5"
        stroke={color}
        strokeWidth="2"
        fill="none"
        className="animate-draw-line"
        style={{ strokeDasharray: 100, strokeDashoffset: 100 }}
      />
    </svg>
  );
};

export default AnimatedUnderline;
