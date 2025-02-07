interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={`bg-white shadow-md rounded-xl p-4 ${className}`}>
    {children}
  </div>
);
