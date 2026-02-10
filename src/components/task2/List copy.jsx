import Video from './Video';
import Article from './Article';
import { v4 as uuidv4 } from 'uuid';

import New from './New';
import Popular from './Popular';

export default function List(props) {
  return props.list.map(item => {
    // console.log(item.views);
    if (item.views < 100) {
      console.log(item.views + ' < 100');
    } else if (item.views > 1000) {
      console.log(item.views + ' > 1000');
    }

    switch (item.type) {
      case 'video':
        return (
          <Video {...item} key={uuidv4()} />
        );

      case 'article':
        return (
          <Article {...item} key={uuidv4()} />
        );
    }
  });
};
