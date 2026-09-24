type SectionTitleProps = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p
        style={{
          margin: 0,
          marginBottom: "0.5rem",
          color: "#7dd3fc",
          fontSize: "0.75rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {eyebrow}
      </p>
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(1.9rem, 3vw, 2.8rem)",
          lineHeight: 1.1,
          color: "#e2e8f0",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
