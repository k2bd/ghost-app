import { AnchorButton } from '@blueprintjs/core';
import React from 'react';
import { isMobile } from 'react-device-detect';

const Donate: React.FC = () => {
    const buttonText = isMobile ? '' : 'Support';

    return (
        <AnchorButton
            icon="dollar"
            text={buttonText}
            href="https://www.buymeacoffee.com/k2bd"
            target="_blank"
            intent="primary"
        />
    );
};

export default Donate;
