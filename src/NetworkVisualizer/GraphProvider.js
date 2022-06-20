import { groupBy, keyBy, mapValues } from "lodash";
import { createContext, useMemo } from "react";
import useEdges from "./useEdges";
import useGraph from "./useGraph";

function GraphProvider({ nodes, ...props }) {
  const graph = useGraph({ nodes });
  const { width, height } = useMemo(() => graph.graph(), [graph]);
  const contextValue = {
    width,
    height,
    edges: useEdges(graph),
    nodesByParent: useMemo(() => groupBy(nodes, "parent"), [nodes]),
    graphNodesById: useMemo(
      () => mapValues(keyBy(graph.nodes()), (id) => graph.node(id)),
      [graph]
    ),
  };

  return (
    <context.Provider value={contextValue}>
      {props.children(contextValue)}
    </context.Provider>
  );
}

export const context = createContext();

export default GraphProvider;
