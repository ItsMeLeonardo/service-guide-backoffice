"use client";

import { YoptaRenderer } from "yopta-editor-copy";

const defaultData = [
  {
    id: "49906f90-7a9d-4ae0-af64-d7217cc11110",
    type: "heading-one",
    children: [
      {
        text: "Titulo",
      },
    ],
    isVoid: false,
  },
  {
    id: "e1df75e8-6f9b-4e66-b2ef-6da8ee049273",
    type: "heading-two",
    isVoid: false,
    children: [
      {
        text: "Sub titulo",
      },
    ],
  },
  {
    id: "4c80f978-4b11-46f5-9af0-d207ab5ca22f",
    type: "heading-three",
    isVoid: false,
    children: [
      {
        text: "tag line no se en que se pueda usar",
      },
    ],
  },
  {
    id: "1b70dc2f-517d-49dd-8ea1-8dbf0f697a04",
    type: "paragraph",
    isVoid: false,
    children: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, at similique suscipit sunt aut quibusdam vitae repellat quos nemo sapiente ipsa nobis magni quo modi in harum, autem exercitationem possimus.",
      },
    ],
  },
  {
    id: "0802e031-5aec-4977-a82c-1ada76db4a66",
    type: "image",
    isVoid: true,
    children: [
      {
        text: "",
      },
    ],
    src: "https://images.unsplash.com/photo-1684018864429-42c0966d71e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=596&q=80",
  },
  {
    id: "d76fba97-2a18-4538-abfe-b196bd06f1d3",
    type: "bulleted-list",
    children: [
      {
        id: "ea62f9f8-0311-47ca-9d51-3d2065b4547d",
        type: "list-item",
        children: [
          {
            text: "item list doesn't work tailwind D:",
          },
        ],
      },
      {
        id: "a96d222a-2548-458c-953f-880b08e10cbf",
        type: "list-item",
        children: [
          {
            text: "other ...",
          },
        ],
      },
      {
        id: "dc2ab81a-22cb-4195-8f52-6ac44949b807",
        type: "list-item",
        children: [
          {
            text: "testeing jakljgalkj",
          },
        ],
      },
    ],
  },
];

export default function ContentRenderer() {
  return (
    <div>
      <YoptaRenderer data={defaultData} />
    </div>
  );
}
