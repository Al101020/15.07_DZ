import Video from './Video';
import Article from './Article';
import { v4 as uuidv4 } from 'uuid';

export default function List(props) {
  return props.list.map(item => {
    console.log(item.views);
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
