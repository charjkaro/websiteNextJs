import AnimatedCursor from "react-animated-cursor";

function Cursor({}) {
  return (
    <div className="hidden lg:flex">
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="0, 110, 178"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={2}
        trailingSpeed={4}
        outerStyle={{
          border: `4px solid #f89520`,
          animation: "running ",
        }}
      />
    </div>
  );
}

export default Cursor;
