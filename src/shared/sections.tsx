import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
    children: React.ReactNode;
    className?: string;
    navTheme?: "dark" | "light";
};

type WrapperProps = React.ComponentProps<"div"> & {
    children: React.ReactNode;
    className?: string;
    bare?: boolean;
};

export function Section({ children, className, navTheme = "light", ...rest }: SectionProps) {
    return (
        <section data-nav-theme={navTheme} className={cn("w-full lg:px-16 md:px-10 px-5", className)} {...rest}>
            {children}
        </section>
    );
}

export function Wrapper({ children, className, bare = false, ...rest }: WrapperProps) {
    return (
        <div
            className={cn(
                "w-full max-w-7xl mx-auto flex flex-col lg:gap-16 md:gap-14 gap-12",
                !bare && "md:py-24 py-14",
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
}