import { useEffect } from 'react';

function useScrollBottom(targetRef, chats) {
  useEffect(() => {
    if (targetRef.current) {
      const ref = targetRef;

      ref.current.scrollTop =
        ref.current.scrollHeight - ref.current.clientHeight;
    }
  }, [targetRef, chats]);
}

export default useScrollBottom;
