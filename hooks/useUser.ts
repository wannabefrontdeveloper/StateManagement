import { useRecoilValue } from 'recoil';
import { authState } from '../atom/auth';

export default function useUser() {
  const auth = useRecoilValue(authState);
  return auth.user;
}
