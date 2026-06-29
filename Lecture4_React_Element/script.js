import React from "react";
import { createRoot } from "react-dom/client";

const container = React.createElement('div', { className: 'continer', id: 'container' },
    [
        React.createElement('section', { key: 1 }, [
            React.createElement(
                'p',
                { key: 2 },
                'The libaray for react'),
            React.createElement(
                'img',
                { key: 2, src: './react-image.png' }),
        ]),
        React.createElement(
            'section',
            { key: 2 }, [
            React.createElement(
                'form',
                { key: 2 },
                [
                    React.createElement(
                        'div',
                        { className: 'input-group' },
                        [
                            React.createElement(
                                'label',
                                {
                                    key: 2,
                                    htmlFor: 'username'
                                },
                                'Username: '
                            ),
                            React.createElement(
                                'input',
                                { key: 1, type: 'text', id: 'username' }
                            )
                        ]
                    )
                ]),
        ])
    ]
);
console.log(container);

const root = createRoot(document.getElementById('root'));
console.log(root);
root.render(container);