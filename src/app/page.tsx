'use client'

import { useState } from 'react'

export default function Home() {
  const [score] = useState(85)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      alert('📱 分析完了！\n\n改善提案:\n• ハッシュタグを3個追加 (#カフェ #コーヒー #おしゃれ)\n• 投稿時間を19:00に変更\n• 画像の明度を15%アップ\n• ストーリーズを週3回投稿')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-white/20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            📱 Instagram分析
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            iPad Pro + Codespaces で開発
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 mb-6 border border-blue-200/50">
            <div className="text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-2">
              {score}
            </div>
            <div className="text-gray-600 text-base mb-4">
              / 100点
            </div>
            <div className="w-full bg-white/70 rounded-full h-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-4 rounded-full transition-all duration-2000 ease-out"
                style={{ width: `${score}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              平均より15点高い！ 🎉
            </p>
          </div>
          
          <button 
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className={`w-full py-5 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl transform ${
              isAnalyzing 
                ? 'bg-gray-400 cursor-not-allowed scale-95' 
                : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 hover:scale-105 active:scale-95'
            } text-white mb-6`}
          >
            {isAnalyzing ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                分析中...
              </span>
            ) : (
              '📸 スクリーンショットを分析'
            )}
          </button>
          
          <div className="space-y-3 mb-6">
            <div className="bg-green-50 p-4 rounded-xl border border-green-200 transition-all hover:scale-105">
              <span className="text-green-700 font-semibold">✅ コメント返信完了</span>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 transition-all hover:scale-105">
              <span className="text-yellow-700 font-semibold">⏰ #秋コーデ 投稿準備</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 transition-all hover:scale-105">
              <span className="text-purple-700 font-semibold">📈 競合アカウント分析</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-gray-200/50">
              <div className="text-lg mb-1">👥</div>
              <div className="text-xs text-gray-500 mb-1">フォロワー</div>
              <div className="font-bold text-gray-900 text-sm">1.2K</div>
              <div className="text-xs text-green-600 font-medium">+12%</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-gray-200/50">
              <div className="text-lg mb-1">❤️</div>
              <div className="text-xs text-gray-500 mb-1">いいね</div>
              <div className="font-bold text-gray-900 text-sm">340</div>
              <div className="text-xs text-green-600 font-medium">+8%</div>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-gray-200/50">
              <div className="text-lg mb-1">📊</div>
              <div className="text-xs text-gray-500 mb-1">リーチ</div>
              <div className="font-bold text-gray-900 text-sm">2.1K</div>
              <div className="text-xs text-green-600 font-medium">+25%</div>
            </div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-r from-purple-100/80 to-pink-100/80 backdrop-blur-sm rounded-xl border border-purple-200/50">
            <p className="text-xs text-purple-800">
              �� <strong>iPad Pro開発環境</strong><br/>
              スマホファースト設計で最適化済み ✨<br/>
              <span className="text-purple-600">Next.js 14 + Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
