export interface UploadType {
  lastModified: number | undefined;
  name: string;
  size: number | undefined;
  type: string | undefined;
}

export interface UpdateImgType {
  uid:string | "-1";
  name: string;
  status: "done";
  url: string;
}
