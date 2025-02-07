interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={`mt-2 ${className}`}>{children}</div>
);
