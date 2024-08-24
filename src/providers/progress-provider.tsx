"use client";

import { COLORS } from "@/utils/colors";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface Props {
  children: React.ReactNode;
}

export default function ProgressProvider({ children }: Props) {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color={COLORS.primary}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
