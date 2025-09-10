// import "./OurStory.css";

export default function OurStory() {
  const story = [
    "1 idea.",
    "2 dreamers.",
    "3 sleepless nights a week.",
    "4 seasons of hustle every year.",
    "5 times we almost gave up.",
    "6 people who said it won’t work.",
    "7 years we held on.",
    "8 failures that taught us more than wins.",
    "9 versions before the first real one.",
    "10 promises to ourselves — never stop.",
  ];

  return (
    <section>
      <div>
        {story.map((line, idx) => (
          <div key={idx}>
            <span>{line.split(" ")[0]}</span>
            <p>{line.replace(/^\d+\s/, "")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}