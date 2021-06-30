import { Button } from '@blueprintjs/core';
import React from 'react';
import { isMobile } from 'react-device-detect';

const Donate: React.FC = () => {
    const onClick = () => {
        window.open('https://www.buymeacoffee.com/k2bd', '_blank');
    };

    const buttonText = isMobile ? '' : 'Support';

    return <Button icon="dollar" text={buttonText} onClick={onClick} intent="primary" />;
};

export default Donate;
