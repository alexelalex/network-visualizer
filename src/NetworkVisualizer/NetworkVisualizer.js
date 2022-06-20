import GraphProvider from "./GraphProvider";
import Node from "./Node";
import Edges from "./Edges";
import "./NetworkVisualizer.css";

function NetworkVisualizer({ nodes }) {
  return (
    <GraphProvider nodes={nodes}>
      {({ width, height, edges, nodesByParent }) => (
        <div className="container">
          {nodesByParent[null]?.map((node) => (
            <Node key={node.id} node={node} />
          ))}
          <Edges edges={edges} width={width} height={height} />
        </div>
      )}
    </GraphProvider>
  );
}

export default NetworkVisualizer;
