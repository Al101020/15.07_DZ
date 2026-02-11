import Video from './Video';
import Article from './Article';
import { v4 as uuidv4 } from 'uuid';

import New from './New';
import Popular from './Popular';

export default function List(props) {
  return props.list.map(item => {
    if (item.views < 100) {
      
      switch (item.type) {
        case 'video':
          return (
            <New key={uuidv4()}>
              <Video {...item} />
            </New>
          );

        case 'article':
          return (
            <New key={uuidv4()}>
              <Article {...item} />
            </New>
          );
      }

    } else if (item.views > 1000) {
            
      switch (item.type) {
        case 'video':
          return (
            <Popular key={uuidv4()}>
              <Video {...item} />
            </Popular>
          );

        case 'article':
          return (
            <Popular key={uuidv4()}>
              <Article {...item} />
            </Popular>
          );
      }

    } else {
            
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

    }
  });
};
