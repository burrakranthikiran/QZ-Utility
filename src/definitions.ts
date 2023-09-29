export interface QzUtilityPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
