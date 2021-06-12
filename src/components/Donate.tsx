import { Button } from '@blueprintjs/core';
import React from 'react';

const Donate: React.FC = () => {
    const onClick = () => {
        window.open('https://www.buymeacoffee.com/k2bd', '_blank');
    };

    return <Button icon="dollar" text="Buy me a coffee" onClick={onClick} intent="primary" />;
};

export default Donate;
