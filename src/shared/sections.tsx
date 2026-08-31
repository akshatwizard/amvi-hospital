import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
    children: React.ReactNode;
    className?: string;
    navTheme?: "dark" | "light";
};

type WrapperProps = React.ComponentProps<"div"> & {
    children: React.ReactNode;
    className?: string;
};

export function Section({ children, className, navTheme = "light", ...rest }: SectionProps) {
    return (
        <section data-nav-theme={navTheme} className={cn("w-full lg:px-12 md:px-8 px-5", className)} {...rest}>
            {children}
        </section>
    );
}

export function Wrapper({ children, className, ...rest }: WrapperProps) {
    return (
        <div
            className={cn(
                "w-full max-w-7xl mx-auto md:py-24 py-14 flex flex-col lg:gap-16 md:gap-14 gap-12",
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}
