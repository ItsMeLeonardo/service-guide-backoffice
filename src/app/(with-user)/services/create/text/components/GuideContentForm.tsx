"use client";
import { useState } from "react";
import { YoptaEditor } from "yopta-editor-copy";

import "yopta-editor-copy/dist/index.css";

export default function GuideContentForm() {
  const [editorValue, setEditorValue] = useState([]);

  const onChange = (data: any) => {
    setEditorValue(data);
  };
  const uploadMedia = async (file: File) => {
    const url =
      "https://images.unsplash.com/photo-1684018864429-42c0966d71e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=596&q=80";

    return {
      url,
    };
  };

  return (
    <div>
      <YoptaEditor
        value={editorValue}
        onChange={onChange}
        media={{
          imageProps: {
            onChange: uploadMedia,
          },
          videoProps: {
            onChange: uploadMedia,
          },
        }}
      />
    </div>
  );
}
