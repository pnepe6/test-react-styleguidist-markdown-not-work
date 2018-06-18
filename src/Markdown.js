import React from 'react';
import { compiler } from 'markdown-to-jsx';

const Markdown = (props) => (
    <div>
        {compiler(props.text, { forceBlock: true, parseBlockHtml: true })}
    </div>
);

export default Markdown;