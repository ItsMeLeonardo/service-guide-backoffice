export default function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M21.68 16.96l-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22l-1.89 3.41c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45C1.16 19.17 2.91 22 5.59 22h12.76c2.6 0 4.35-2.65 3.33-5.04zM6.97 8a3 3 0 100-6 3 3 0 000 6z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
