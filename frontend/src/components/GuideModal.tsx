import React from 'react';
import { X, Heart } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              💡
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                다락방 말씀 알림이 이용 가이드
              </h3>
              <p className="text-xs text-slate-500">
                따뜻한 다락방 사역을 위한 1분 핵심 팁
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Guide Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
          <div className="p-3.5 bg-amber-50/70 border border-amber-100 rounded-2xl flex items-start gap-3">
            <Heart className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-900 text-sm mb-1">
                왜 단체방보다 1:1 개별 전송이 좋을까요?
              </h4>
              <p className="text-amber-800/90 text-xs">
                수많은 공지가 쏟아지는 단체 카톡방과 달리, 순원의 이름이 적힌 1:1 메시지는
                나만을 위해 기도하고 신경 써준다는 깊은 존중과 감동을 전해줍니다.
              </p>
            </div>
          </div>

          <div className="space-y-3.5 pt-1">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                1
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  이름 자동 치환 {'{이름}'}, {'{다락방명}'}
                </strong>
                본문 어디에든 <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-600 font-mono">{'{이름}'}</code>을
                입력하면 각 순원의 이름으로 쏙 바뀝니다. (예: "안녕하세요 {'{이름}'} 순원님!")
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                2
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  명단 일괄 등록 (엑셀 / 카톡 복붙)
                </strong>
                단체 카톡방 멤버 이름이나 엑셀 파일을 복사(Ctrl+C)하여 붙여넣으면
                수십 명의 순원을 한번에 간편하게 추가할 수 있습니다.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                3
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  카카오톡 1:1 안전 자동 발송
                </strong>
                카카오톡에서 각 순원의 이름을 검색하여 1:1 대화방을 열고 사진과 맞춤 메시지를 안전하게 전송합니다.
                <div className="text-[11px] text-amber-900 bg-amber-50/80 rounded-xl p-2.5 mt-1.5 border border-amber-200/60 leading-normal">
                  ⚠️ <strong>주의사항:</strong> 발송이 진행되는 중에는 마우스나 키보드를 건드리지 마세요. 중단이 필요할 땐 <strong>[전송 일시 중지]</strong> 버튼을 누르시면 됩니다.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                4
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  사전 테스트 팁 (나와의 채팅)
                </strong>
                전체 순원에게 보내기 전, 명단에 본인 이름(카톡 '나와의 채팅')을 등록하여 먼저 한 번 시험 발송해 보시면 더욱 안심하고 사용하실 수 있습니다.
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                5
              </span>
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  발송 속도 모드 &amp; 대량 발송(500명 이상) 안전 수칙
                </strong>
                상황에 맞춰 <strong>[⚡ 쾌속 0.5s]</strong> 또는 <strong>[🛡️ 안전 1.5s]</strong> 버튼으로 속도를 조절하세요:
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 mt-1">
                  <li><strong>⚡ 소규모 쾌속 (0.5초):</strong> 10~30명 다락방 단위 빠른 발송 시 권장</li>
                  <li><strong>🛡️ 대량 안전 (1.5초):</strong> 50명~수백 명 발송 시 카톡 스팸 제재(계정 차단) 방지용 필수</li>
                </ul>
                <div className="text-[11px] text-rose-800 bg-rose-50 rounded-xl p-2.5 mt-1.5 border border-rose-200 leading-normal">
                  🚨 <strong>500명 이상 대량 발송 팁:</strong> 카카오톡 서버의 스팸 감지를 피하기 위해 <strong>[🛡️ 안전 1.5s]</strong>로 설정하시고, 500명을 한 번에 연달아 보내지 마시고 <strong>50~100명 단위로 끊어서(중간 5~10분 휴식)</strong> 분할 발송하시는 것을 강력히 권장합니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors shadow-xs"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  );
};
