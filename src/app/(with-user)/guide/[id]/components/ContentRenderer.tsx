"use client";

import { YoptaRenderer } from "yopta-editor-copy";

type Props = {
  data: any;
};

export default function ContentRenderer({ data }: Props) {
  return (
    <div>
      <YoptaRenderer data={data} />
    </div>
  );
}
