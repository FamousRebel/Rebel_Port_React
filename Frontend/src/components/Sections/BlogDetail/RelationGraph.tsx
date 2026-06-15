import React from "react";

// ============================================================
// 类型定义（待从公共 types 迁移）
// ============================================================
export interface GraphNode {
  id: string;
  label: string;
  x: number; // 相对位置百分比 (0-100)
  y: number; // 相对位置百分比 (0-100)
  color?: string; // 节点颜色
}

export interface GraphEdge {
  from: string; // 起始节点ID
  to: string; // 目标节点ID
}

// TODO: GraphNode, GraphEdge 等待从公共 types 迁移

interface RelationGraphProps {
  /** 节点列表 */
  nodes: GraphNode[];
  /** 边列表 */
  edges: GraphEdge[];
  /** 点击节点回调 */
  onNodeClick?: (nodeId: string) => void;
}

const RelationGraph: React.FC<RelationGraphProps> = ({
  nodes,
  edges,
  onNodeClick,
}) => {
  const handleNodeClick = (nodeId: string) => {
    onNodeClick?.(nodeId);
    // TODO: 接入hooks/API
  };

  const edgeColors = ["#13a4ec33", "#6366f133", "#10b98133"];

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
          关系图谱
        </h4>
        <div className="w-[14px] h-[14px] bg-gray-200 rounded" />
      </div>

      <div className="h-44 w-full bg-slate-50 rounded-lg border border-slate-100 relative overflow-hidden cursor-crosshair">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #13a4ec22 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#13a4ec] rounded-full shadow-[0_0_10px_#13a4ec] z-10" />

        {edges.length > 0 && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {edges.map((edge, index) => {
              const fromNode = nodes.find((n) => n.id === edge.from);
              const toNode = nodes.find((n) => n.id === edge.to);
              if (!fromNode || !toNode) return null;
              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  stroke={edgeColors[index % edgeColors.length]}
                  strokeWidth="1"
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                />
              );
            })}
          </svg>
        )}

        {nodes.map((node) => (
          <button
            key={node.id}
            className="absolute w-2 h-2 bg-blue-500 rounded-full hover:scale-150 transition-transform cursor-pointer"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              backgroundColor: node.color || "#3b82f6",
            }}
            title={node.label}
            onClick={() => handleNodeClick(node.id)}
          />
        ))}
      </div>

      <p className="mt-3 text-[9px] text-slate-400 text-center italic">
        点击节点探索关联知识点
      </p>
    </div>
  );
};

export default RelationGraph;
