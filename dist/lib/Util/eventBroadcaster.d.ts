export declare const LIKE_EVENT_TOPIC = 'LIKE_EVENT';
export declare const MEMBER_CHANGE_TOPIC = 'MEMBER_CHANGE';
/***
 * 이벤트 브로드캐스터(Event Broadcaster)
 * 컴포넌트 간에 데이터를 주고받기 위해 이벤트를 사용 (각 컴포넌트가 직접 통신할 필요 없이 이벤트를 발행하고 구독)
 * 전역 상태를 관리에 활용 가능(여러 컴포넌트가 상태를 구독하고 변경 사항을 수신)
 * 느슨하게 결합된 컴포넌트를 유지
 ***/
export declare class EventBroadcaster {
  static broadcast: (topic: string, args: any) => void;
  static on: (topic: string, fn: (data: any) => void) => () => void;
}
