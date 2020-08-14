import React from "react";
import { Helmet } from "react-helmet";

const Wrap = React.forwardRef(
    (
        { children, title, ...rest }: React.PropsWithChildren<any>,
        ref: React.Ref<any>
    ) => {
        return (
            <div ref={ref} {...rest}>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                {children}
            </div>
        );
    }
);

export default Wrap;
