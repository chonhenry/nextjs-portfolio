// My css.d.ts file
import type * as CSS from "csstype";

declare module "csstype" {
  interface Properties {
    objectFit?: string;
  }
}
