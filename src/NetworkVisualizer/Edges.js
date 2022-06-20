import { Arrow, Group, Layer, Stage } from "react-konva";

function Edges({ width, height, edges }) {
  return (
    <Stage width={width} height={height}>
      <Layer>
        {edges.map((edge, i) => (
          <Group key={i}>
            <Arrow
              points={edge.points}
              strokeWidth={1}
              stroke={"black"}
              fill={"black"}
            />
          </Group>
        ))}
      </Layer>
    </Stage>
  );
}

export default Edges;
