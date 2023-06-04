"use client";
import { GuideContent } from "@/domain/guide/client";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { YoptaEditor } from "yopta-editor-copy";

import "yopta-editor-copy/dist/index.css";

import type { FormTextGuide } from "../page";

export default function GuideContentForm() {
  const [editorValue, setEditorValue] = useState<GuideContent[]>([]);

  const { register, setValue } = useFormContext<FormTextGuide>();

  useEffect(() => {
    register("content");
  }, [register]);

  const onChange = (data: GuideContent[]) => {
    setEditorValue(data);
    setValue("content", data);
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
