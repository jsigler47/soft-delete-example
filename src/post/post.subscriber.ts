import {
  EntitySubscriberInterface,
  EventSubscriber,
  RemoveEvent,
  SoftRemoveEvent,
} from 'typeorm';
import { Post } from './post.entity';

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<Post> {
  listenTo() {
    return Post;
  }

  beforeSoftRemove(event: SoftRemoveEvent<Post>) {
    console.log('Before Soft Remove:', event.entity);
  }

  afterSoftRemove(event: SoftRemoveEvent<Post>) {
    console.log('After Soft Remove:', event.entity);
  }

  beforeRemove(event: RemoveEvent<Post>) {
    console.log('Before Remove:', event.entity);
  }

  afterRemove(event: RemoveEvent<Post>) {
    console.log('After Remove:', event.entity);
  }

}
