import { v4 as uuidv4 } from 'uuid';
import Video from './Video';

import DateTimePretty from './DateTimePretty';

function VideoList(props) {
  const VideoPretty = DateTimePretty(Video);

  return props.list.map(item => <VideoPretty url={item.url} date={item.date} key={uuidv4()} />);
}

export default VideoList;