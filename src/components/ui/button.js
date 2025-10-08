export const Button = ({ children, className, variant, size, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-[2px] font-semibold transition-colors";
  const variantStyles = variant === "ghost" ? 
    "bg-transparent hover:bg-[var(--secondary)]" : 
    "bg-[var(--primary)] text-[var(--primary-foreground)]";
  const sizeStyles = size === "lg" ? "px-6 py-3 text-lg" : "px-4 py-2";
  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};