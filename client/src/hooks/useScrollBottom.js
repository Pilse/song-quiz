import { useEffect } from 'react';

function useScrollBottom(targetRef, chats) {
  useEffect(() => {
    const ref = targetRef;

    ref.current.scrollTop = ref.current.scrollHeight - ref.current.clientHeight;
  }, [chats]);
}

export default useScrollBottom;
