import React from "react";

// ============================================================
// 类型定义（待从公共 types 迁移）
// ============================================================
export interface InteractionData {
  likes: number; // 点赞数
  isLiked: boolean; // 当前用户是否已点赞
}

// TODO: InteractionData 等待从公共 types 迁移

interface InteractionBarProps {
  /** 交互数据 */
  data: InteractionData;
  /** 点赞回调 */
  onLike?: () => void;
  /** 赞助回调 */
  onSponsor?: () => void;
}

const InteractionBar: React.FC<InteractionBarProps> = ({
  data,
  onLike,
  onSponsor,
}) => {
  const handleLike = () => {
    onLike?.();
    // TODO: 接入hooks/API
  };

  const handleSponsor = () => {
    onSponsor?.();
    // TODO: 接入hooks/API
  };

  const handleShare = (platform: string) => {
    // TODO: 接入hooks/API
    console.log(`Share to ${platform}`);
  };

  return (
    <div className="px-0 border-t border-slate-100 py-4 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-6 py-2.5 bg-[#13a4ec] text-white border border-[#13a4ec] rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 group"
            onClick={handleLike}
          >
            <div className="w-5 h-5 bg-white/30 rounded" />
            <span className="text-sm font-bold">
              点赞{" "}
              {data.likes >= 1000
                ? `${(data.likes / 1000).toFixed(1)}k`
                : data.likes}
            </span>
          </button>

          <button
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-[#13a4ec] border border-blue-100 text-sm font-bold rounded-xl hover:bg-blue-50 transition-all active:scale-95"
            onClick={handleSponsor}
          >
            <div className="w-5 h-5 bg-gray-200 rounded" />
            赞助
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 mr-2">分享到:</span>
          <div className="flex gap-3">
            <button
              className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"
              onClick={() => handleShare("wechat")}
              title="分享到微信"
            >
              <div className="w-5 h-5 bg-emerald-200 rounded" />
            </button>
            <button
              className="w-9 h-9 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all"
              onClick={() => handleShare("twitter")}
              title="分享到 Twitter"
            >
              <div className="w-4 h-4 bg-blue-200 rounded" />
            </button>
            <button
              className="w-9 h-9 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-[#13a4ec] hover:text-white transition-all"
              onClick={() => handleShare("copy")}
              title="复制链接"
            >
              <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionBar;
