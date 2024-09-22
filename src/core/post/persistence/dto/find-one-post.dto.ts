import { Uuid } from '../../../common/class/uuid';

interface Target {
  postId: Uuid;
}

interface Options {}

export abstract class FindPostDto {
  target!: Target;
  options!: Options;

  private constructor() {}

  abstract of(target?: Target, options?: Options): FindPostDto;
}
