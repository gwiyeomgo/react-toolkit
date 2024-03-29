import React, { useEffect, useState } from 'react';
import { LikeButton } from '../../lib/Buttton/likeButton';
import { useBroadcast } from '../../lib/Util/hooks/useBroadcast';
import {
  LIKE_EVENT_TOPIC,
  MEMBER_CHANGE_TOPIC,
} from '../../lib/Util/eventBroadcaster';

export const BroadcastExample = () => {
  const [member, setMember] = useState<{
    userId: string;
    likedPosts: number[];
  }>({
    userId: '',
    likedPosts: [],
  });

  const list = [
    { id: 1, title: 'test', liked: true },
    { id: 2, title: 'atet', liked: false },
    { id: 1, title: 'zzzz', liked: false },
  ];
  useEffect(() => {
    const array = list.filter((v) => v.liked).map((v) => v.id);
    setMember({ userId: '1123', likedPosts: array });
  }, []);

  const [sendMemberInfo] = useBroadcast(
    MEMBER_CHANGE_TOPIC,
    (memberInfo: any) => {
      console.log('Received event:', memberInfo);
      setMember(memberInfo);
    },
  );

  const [sendLikedEvent] = useBroadcast(LIKE_EVENT_TOPIC, (likedInfo: any) => {
    //React의 상태(state)는 불변성(immutable)을 유지!! 그러나 객체가 직접 수정되면 React는 이를 감지하지 못할 수 있음
    const updatedMemberData = { ...member };
    const indexOfThree = updatedMemberData.likedPosts.indexOf(likedInfo.id);
    indexOfThree !== -1
      ? updatedMemberData.likedPosts.splice(indexOfThree, 1)
      : updatedMemberData.likedPosts.push(likedInfo.id);
    sendMemberInfo(updatedMemberData);
  });

  return (
    <div>
      <span>
        {`회원번호 :${member.userId} (좋아요 표시: 총 ${member.likedPosts.length} 건)`}
      </span>
      <div>
        {list.map((v, index) => (
          <LikeButton
            color={'#F75BA0'}
            key={index}
            onClick={(data) => {
              sendLikedEvent({
                id: index + 1,
                liked: data.liked,
              });
            }}
            initLiked={v.liked}
          />
        ))}
      </div>
    </div>
  );
};
