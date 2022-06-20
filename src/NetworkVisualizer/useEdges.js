import { useMemo } from "react";

function useEdges(graph) {
  return useMemo(() => graph.edges().map((e) => graph.edge(e)), [graph]);
}

export default useEdges;
