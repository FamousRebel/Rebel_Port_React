import React, { useState } from "react";

// ============================================================
// 类型定义（待从公共 types 迁移）
// ============================================================
export interface CommentData {
  id: number;
  authorName: string;
  authorAvatar: string;
  content: string;
  time: string; // 如 "55 分钟前" 或 "2023-10-23 18:45"
  location?: string; // 地理位置
  device?: string; // 设备信息
  browser?: string; // 浏览器信息
  isAuthor?: boolean; // 是否为文章作者
  replies?: CommentData[]; // 嵌套回复
}

export interface CommentFormData {
  nickname: string;
  email: string;
  website: string;
  content: string;
}

// TODO: CommentData, CommentFormData 等待从公共 types 迁移

interface CommentSectionProps {
  /** 评论总数 */
  totalCount: number;
  /** 评论列表 */
  comments: CommentData[];
  /** 当前用户头像 */
  currentUserAvatar?: string;
  /** 提交评论回调 */
  onSubmitComment?: (data: CommentFormData) => void;
  /** 加载更多评论回调 */
  onLoadMore?: () => void;
  /** 剩余未显示的评论数 */
  remainingCount?: number;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  totalCount,
  comments,
  currentUserAvatar,
  onSubmitComment,
  onLoadMore,
  remainingCount = 0,
}) => {
  const [formData, setFormData] = useState<CommentFormData>({
    nickname: "",
    email: "",
    website: "",
    content: "",
  });

  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyData, setReplyData] = useState<CommentFormData>({
    nickname: "",
    email: "",
    website: "",
    content: "",
  });

  // TODO: 接入hooks/API - 提交评论
  const handleSubmit = () => {
    onSubmitComment?.(formData);
    // TODO: 接入hooks/API
  };

  // TODO: 接入hooks/API - 提交回复
  const handleReply = (commentId: number) => {
    // TODO: 接入hooks/API
    console.log("Reply to", commentId, replyData);
    setReplyingTo(null);
    setReplyData({ nickname: "", email: "", website: "", content: "" });
  };

  const renderCommentItem = (comment: CommentData, isReply = false) => (
    <div
      key={comment.id}
      className={`group/comment ${isReply ? "" : "border-b border-slate-50 last:border-0 pb-10"}`}
    >
      <div className="flex gap-4">
        <img
          alt={comment.authorName}
          className="w-10 h-10 rounded-full border border-slate-100"
          src={comment.authorAvatar}
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900">
                {comment.authorName}
              </span>
              {comment.isAuthor && (
                <span className="px-1.5 py-0.5 bg-blue-100 text-[#13a4ec] text-[9px] font-black rounded uppercase tracking-tighter">
                  作者
                </span>
              )}
              <span className="text-[10px] text-slate-400 font-medium">
                {comment.time}
              </span>
            </div>
            <button
              className="text-slate-300 hover:text-[#13a4ec] transition-colors group-hover/comment:text-slate-400"
              onClick={() =>
                setReplyingTo(replyingTo === comment.id ? null : comment.id)
              }
              title="回复"
            >
              <div className="w-4 h-4 bg-gray-200 rounded" />
            </button>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            {comment.content}
          </p>

          {/* 设备信息 */}
          <div className="flex items-center gap-3 text-slate-400">
            {comment.location && (
              <div className="flex items-center gap-1">
                <div className="w-[11px] h-[11px] bg-gray-200 rounded" />
                <span className="text-[10px]">{comment.location}</span>
              </div>
            )}
            {comment.device && (
              <div className="flex items-center gap-1">
                <div className="w-[11px] h-[11px] bg-gray-200 rounded" />
                <span className="text-[10px]">{comment.device}</span>
              </div>
            )}
            {comment.browser && (
              <div className="flex items-center gap-1">
                <div className="w-[11px] h-[11px] bg-gray-200 rounded" />
                <span className="text-[10px]">{comment.browser}</span>
              </div>
            )}
          </div>

          {/* 嵌套回复列表 */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-6 pl-6 border-l-2 border-slate-100 space-y-8">
              {comment.replies.map((reply) => renderCommentItem(reply, true))}
            </div>
          )}

          {/* 内联回复编辑器 */}
          {replyingTo === comment.id && (
            <div className="bg-blue-50/50 border border-[#13a4ec]/20 rounded-xl p-6 mt-4">
              <div className="flex gap-4">
                <img
                  alt="User avatar"
                  className="w-8 h-8 rounded-full border border-slate-100"
                  src={currentUserAvatar || ""}
                />
                <div className="flex-grow">
                  <textarea
                    className="w-full bg-white border border-slate-200 rounded-lg p-3 text-xs focus:ring-2 focus:ring-[#13a4ec] focus:border-transparent transition-all resize-none h-24 mb-4"
                    placeholder={`回复 ${comment.authorName}...`}
                    value={replyData.content}
                    onChange={(e) =>
                      setReplyData((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                  />
                  <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
                    <div className="flex-1 flex items-center bg-white border border-slate-200 rounded-lg px-3 py-1.5 w-full">
                      <span className="text-[10px] font-bold text-slate-500 uppercase mr-3 min-w-[32px]">
                        昵称
                      </span>
                      <input
                        className="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder:text-slate-300"
                        placeholder="必填"
                        type="text"
                        value={replyData.nickname}
                        onChange={(e) =>
                          setReplyData((prev) => ({
                            ...prev,
                            nickname: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="flex-1 flex items-center bg-white border border-slate-200 rounded-lg px-3 py-1.5 w-full">
                      <span className="text-[10px] font-bold text-slate-500 uppercase mr-3 min-w-[32px]">
                        邮箱
                      </span>
                      <input
                        className="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder:text-slate-300"
                        placeholder="必填"
                        type="email"
                        value={replyData.email}
                        onChange={(e) =>
                          setReplyData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="flex-1 flex items-center bg-white border border-slate-200 rounded-lg px-3 py-1.5 w-full">
                      <span className="text-[10px] font-bold text-slate-500 uppercase mr-3 min-w-[32px]">
                        网址
                      </span>
                      <input
                        className="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder:text-slate-300"
                        placeholder="选填"
                        type="url"
                        value={replyData.website}
                        onChange={(e) =>
                          setReplyData((prev) => ({
                            ...prev,
                            website: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-slate-400 items-center">
                      <button className="hover:text-[#13a4ec] transition-colors">
                        <div className="w-[22px] h-[22px] bg-gray-200 rounded" />
                      </button>
                      <button className="hover:text-[#13a4ec] transition-colors">
                        <div className="w-[22px] h-[22px] bg-gray-200 rounded" />
                      </button>
                    </div>
                    <div className="flex gap-3 items-center">
                      <button
                        className="flex items-center text-slate-400 hover:text-[#13a4ec] transition-colors mr-1"
                        title="Markdown 支持"
                      >
                        <div className="w-5 h-5 bg-gray-200 rounded" />
                      </button>
                      <button
                        className="px-4 py-1.5 text-slate-500 text-[10px] font-bold hover:text-slate-700"
                        onClick={() => setReplyingTo(null)}
                      >
                        取消
                      </button>
                      <button className="px-5 py-1.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg hover:bg-slate-200 transition-all">
                        预览
                      </button>
                      <button
                        className="px-6 py-1.5 bg-[#13a4ec] text-white text-[10px] font-bold rounded-lg hover:bg-blue-600 shadow-md shadow-blue-100 transition-all"
                        onClick={() => handleReply(comment.id)}
                      >
                        回复
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[820px] mx-auto lg:mx-0 bg-white rounded-[1.5rem] shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-8 md:p-10 pb-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-6 bg-gray-200 rounded" />
          <h3 className="text-xl font-black text-slate-900">
            评论区{" "}
            <span className="text-slate-400 font-medium text-sm ml-2">
              ({totalCount})
            </span>
          </h3>
        </div>

        <div className="mb-10">
          <div className="flex gap-4">
            <img
              alt="User avatar"
              className="w-10 h-10 rounded-full border border-slate-100 mt-1"
              src={currentUserAvatar || ""}
            />
            <div className="flex-grow">
              <textarea
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm focus:ring-2 focus:ring-[#13a4ec] focus:border-transparent transition-all resize-none h-32 mb-4"
                placeholder="青笈留墨痕，清言话平生~"
                value={formData.content}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, content: e.target.value }))
                }
              />
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 w-full">
                <div className="flex-1 flex items-center bg-slate-50/50 border border-slate-200 rounded-lg px-3 py-1.5 w-full">
                  <span className="text-[10px] font-bold text-slate-500 uppercase mr-3 min-w-[32px]">
                    昵称
                  </span>
                  <input
                    className="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder:text-slate-300"
                    placeholder="必填"
                    required
                    type="text"
                    value={formData.nickname}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        nickname: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex-1 flex items-center bg-slate-50/50 border border-slate-200 rounded-lg px-3 py-1.5 w-full">
                  <span className="text-[10px] font-bold text-slate-500 uppercase mr-3 min-w-[32px]">
                    邮箱
                  </span>
                  <input
                    className="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder:text-slate-300"
                    placeholder="必填"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="flex-[1.2] flex items-center bg-slate-50/50 border border-slate-200 rounded-lg px-3 py-1.5 w-full">
                  <span className="text-[10px] font-bold text-slate-500 uppercase mr-3 min-w-[32px]">
                    网址
                  </span>
                  <input
                    className="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder:text-slate-300"
                    placeholder="选填"
                    type="url"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        website: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-3 text-slate-400">
                  <button className="hover:text-[#13a4ec] transition-colors">
                    <div className="w-[22px] h-[22px] bg-gray-200 rounded" />
                  </button>
                  <button className="hover:text-[#13a4ec] transition-colors">
                    <div className="w-[22px] h-[22px] bg-gray-200 rounded" />
                  </button>
                </div>
                <div className="flex gap-3 items-center">
                  <button
                    className="flex items-center text-slate-400 hover:text-[#13a4ec] transition-colors mr-3"
                    title="Markdown 支持"
                  >
                    <div className="w-5 h-5 bg-gray-200 rounded" />
                  </button>
                  <button className="px-6 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200 transition-all">
                    预览
                  </button>
                  <button
                    className="px-8 py-2 bg-[#13a4ec] text-white text-xs font-bold rounded-lg hover:bg-blue-600 shadow-md shadow-blue-100 transition-all"
                    onClick={handleSubmit}
                  >
                    发送
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 md:px-10 pb-10 space-y-10">
        {comments.map((comment) => renderCommentItem(comment))}

        {remainingCount > 0 && (
          <div className="pt-6 text-center">
            <button
              className="text-sm font-bold text-slate-400 hover:text-[#13a4ec] transition-colors flex items-center gap-2 mx-auto"
              onClick={onLoadMore}
            >
              查看更多 {remainingCount} 条评论
              <div className="w-[18px] h-[18px] bg-gray-200 rounded" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
