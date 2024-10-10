declare module 'react-notifications' {
    export const NotificationContainer: React.ComponentType;
    export const NotificationManager: {
      success: (message: string, title?: string| undefined, timeOut?: number| undefined, callback?: (() => void) | undefined, priority?: boolean | undefined) => void; error: (message: string, title?: string | undefined, timeOut?: number | undefined, callback?: (() => void) | undefined, priority?: boolean | undefined) => void;
      error: (message: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean) => void;
      info: (message: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean) => void;
      warning: (message: string, title?: string, timeOut?: number, callback?: () => void, priority?: boolean) => void;
    };
  }