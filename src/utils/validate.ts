export class Validate {
  public static assertString(value: unknown, message: string) {
    if (typeof value !== 'string') {
      throw new Error(message);
    }
  }

  public static assertNotEmpty(value: unknown, message: string) {
    if (!value) {
      throw new Error(message);
    }
  }
}
