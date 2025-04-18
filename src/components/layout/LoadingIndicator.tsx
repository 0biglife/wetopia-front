"use client";

import Lottie from "lottie-react";
import { LoadingLottie } from "@/../public";

export default function LoadingIndicator() {
  return (
    <Lottie
      animationData={LoadingLottie}
      loop
      autoplay
      style={{ width: 44, height: 44 }}
    />
  );
}
