import { ThemeToggle } from "@/components/theme-toggle";

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center items-center text-zinc-500 py-5 px-7">
      <small className="mr-2">
        &copy; 2024 Jeffery Pippitt. All rights reserved.
      </small>
      <ThemeToggle />
    </footer>
  );
}
