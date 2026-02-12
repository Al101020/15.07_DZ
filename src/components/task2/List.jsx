import Video from './Video';
import Article from './Article';
import { v4 as uuidv4 } from 'uuid';

import newHOC from './newHOC';
const NewVideo = newHOC(Video);
const NewArticle = newHOC(Article);

import popularHOC from './popularHOC';
const PopularVideo = popularHOC(Video);
const PopularArticle = popularHOC(Article);

export default function List(props) {
  return props.list.map(item => {
        if (item.views < 100) {
      
      switch (item.type) {
        case 'video':
          return <NewVideo {...item} key={uuidv4()} />;

        case 'article':
          return <NewArticle {...item} key={uuidv4()} />;
      }
    } else if (item.views > 1000) {
            
      switch (item.type) {
        case 'video':
          return <PopularVideo {...item} key={uuidv4()} />;

        case 'article':
          return <PopularArticle {...item} key={uuidv4()} />;
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
