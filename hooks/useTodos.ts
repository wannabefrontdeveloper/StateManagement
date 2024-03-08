import { useRecoilValue } from 'recoil';
import { todosState } from '../atom/todos';

export default function useTodos() {
  return useRecoilValue(todosState);
}
