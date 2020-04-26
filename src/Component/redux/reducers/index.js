import { combineReducers } from 'redux';

import corona from './kawalcorona';
import positif from './positif';
import negatif from './negatif';
import die from './meninggal';
import local from './provinsi';

export default combineReducers({
  corona,
  positif,
  negatif,
  die,
  local
});
