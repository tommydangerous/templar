import { Types } from 'react-validators';

export default Types.shape({
  completed: Types.bool.isRequired,
  id: Types.number.isRequired,
  text: Types.string.isRequired,
});
