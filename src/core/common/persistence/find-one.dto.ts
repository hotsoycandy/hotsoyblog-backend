export abstract class FindOneQueryFilter<Target, Options, ToTarget, ToOptions> {
  target!: Target;
  options!: Options;

  private constructor() {}

  abstract of(
    target?: Target,
    options?: Options
  ): FindOneQueryFilter<Target, Options, ToTarget, ToOptions>;

  abstract toTarget(): ToTarget;

  abstract toOptions(): ToOptions;
}
