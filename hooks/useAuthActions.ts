import {useDispatch} from 'react-redux';
import {authorize, logout, User} from '../slices/auth';

export default function useAuthActions() {
  const dispatch = useDispatch();
  return {
    authorize: (user: User) => dispatch(authorize(user)),
    logout: () => dispatch(logout()),
  };
}
