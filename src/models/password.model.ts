export interface IPwOptions {
  capital: boolean;
  lc: boolean;
  num: boolean;
  min: number;
  max: number;
  special?: string;
}

export interface IPwOptionsCount {
  capital?: number;
  lc?: number;
  num?: number;
  special?: number;
}

export interface IPwCheckerObj {
  capital?: string;
  lc?: string;
  num?: string;
  special?: string;
}
