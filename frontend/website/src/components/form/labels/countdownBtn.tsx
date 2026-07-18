import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function CountdownBtn({ initialTime }: { initialTime: number }) {
  const [countdown, setCountdown] = useState(initialTime);
  const [restart, setRestart] = useState(0);

  useEffect(() => {
    if (countdown === 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [restart]);

  const handleResendOTP = () => {
    setCountdown(initialTime);
    setRestart((prev) => prev + 1);
  };

  return countdown === 0 ? (
    <Button
      variant="outline"
      size="xs"
      className=" cursor-pointer"
      onClick={handleResendOTP}
    >
      <RefreshCw />
      Resend Code ?
    </Button>
  ) : (
    <Button
      variant="outline"
      size="xs"
      className=" justify-between cursor-pointer"
    >
      Resend in
      <span>{countdown}</span>
    </Button>
  );
}
