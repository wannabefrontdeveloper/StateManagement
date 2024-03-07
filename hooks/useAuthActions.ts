import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {authorize, logout} from '../slices/auth';

export default function useAuthActions() {
  const dispatch = useDispatch();
  return bindActionCreators({authorize, logout}, dispatch);
}
