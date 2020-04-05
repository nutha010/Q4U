import React from 'react';
import {Helmet} from 'react-helmet'

export default function SEO (props) {
    const defaultDescription = "Q4U is an automated queue system to make social distancing easier when grocery shopping";

    return (
        <Helmet>
            <title>{props.title != null ? `${props.title} | Q4U` : "Q4U"}</title>
            <meta name="description"
                  content={props.desc != null ? props.desc : defaultDescription}
            />
        </Helmet>
    );
}