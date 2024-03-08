import {useCallback, useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { getPosts } from '../api/getPosts';
import { postsState } from '../atom/posts';

// 컴포넌트가 나타날 때 API를 요청합니다.
// enabled 값을 false로 하면 컴포넌트가 나타날 때 API 요청이 이뤄지지 않습니다.
export default function usePosts(
  {enabled}: {enabled: boolean} = {enabled: true},
) {
  const [{loading, data, error}, set] = useRecoilState(postsState);

  const fetchData = useCallback(async () => {
    set({loading: true, data: null, error: null});
    try {
      const posts = await getPosts();
      // 요청 성공
      set({loading: false, data: posts, error: null});
    } catch (e) {
      // 요청 실패
      set({loading: false, data: null, error: e});
    }
  }, [set]);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    fetchData();
  }, [enabled, fetchData]);

  // posts 의 상태와 재요청을 하는 refetch 함수를 함께 반환합니다.
  return {
    loading,
    data,
    error,
    refetch: fetchData,
  };
}
