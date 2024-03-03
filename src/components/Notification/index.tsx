import type { MouseEventHandler } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { forwardRef, useImperativeHandle, useState } from "react";

type NotificationVariant = "success" | "error" | "warning";

type NotificationPosition =
  | "bottom-left"
  | "bottom-right"
  | "top-left"
  | "top-right";

export interface NotificationRef {
  displayNotification: () => void;
  hideNotification: () => void;
}

export interface NotificationProps {
  title: string;
  variant?: NotificationVariant;
  timeout?: number; // In milliseconds
  position?: NotificationPosition;
}

const NotificationColors: Record<NotificationVariant, string> = {
  error: "#FF4848",
  success: "#45CE30",
  warning: "#FF5630",
};

const NotificationPositions: Record<
  NotificationPosition,
  { hide: string; show: string }
> = {
  "bottom-left": {
    hide: "-left-[1000px] bottom-10",
    show: "left-12 bottom-10",
  },
  "bottom-right": {
    hide: "-right-[1000px] bottom-10",
    show: "right-12 bottom-10",
  },
  "top-left": {
    hide: "-left-[1000px] top-10",
    show: "left-12 top-10",
  },
  "top-right": {
    hide: "-right-[1000px] top-10",
    show: "right-12 top-10",
  },
};

export const Notification = forwardRef<NotificationRef, NotificationProps>(
  function InnerNotification(
    { title, variant = "success", timeout = 3000, position = "bottom-right" },
    ref,
  ): JSX.Element {
    const [show, setShow] = useState(false);
    useImperativeHandle(
      ref,
      () => ({
        displayNotification: () => {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, timeout);
        },
        hideNotification: () => {
          setShow(false);
        },
      }),
      [timeout],
    );

    const handleNotificationClose: MouseEventHandler<
      HTMLButtonElement
    > = () => {
      setShow(false);
    };

    return (
      <div
        className={twMerge(
          "flex flex-col gap-2 p-2 rounded-md z-50 shadow-2xl fixed transition-[right_left] duration-1000",
          NotificationPositions[position][show ? "show" : "hide"],
        )}
        style={{
          backgroundColor: NotificationColors[variant],
        }}
      >
        <span className="flex flex-row gap-2 items-center">
          <h6 className="text-md text-white">{title}</h6>
          <button type="button" onClick={handleNotificationClose}>
            <XMarkIcon className="h-4 text-white hover:text-black" />
          </button>
        </span>
      </div>
    );
  },
);
