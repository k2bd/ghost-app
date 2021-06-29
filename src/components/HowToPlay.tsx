import { Button, Dialog, Intent } from '@blueprintjs/core';
import { DIALOG_BODY } from '@blueprintjs/core/lib/esm/common/classes';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

const HowToPlay: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const buttonText = isMobile ? '' : 'How to play';

    return (
        <div>
            <Button icon="info-sign" text={buttonText} onClick={() => setIsOpen(true)} intent={Intent.PRIMARY} />
            <Dialog icon="info-sign" onClose={() => setIsOpen(false)} title="How to play 2D Ghost" isOpen={isOpen}>
                <div className={DIALOG_BODY}>
                    <h3>Overview</h3>
                    <p>
                        2D Ghost is a competitive word building game in which players take turns placing letters on a
                        board while trying to avoid completing words.
                    </p>
                    <h3>Where can I place a tile?</h3>
                    <p>
                        A new tile can be placed either at the first free tile along the horizontal or vertical edges,
                        or at any tile that has at least 3 neighbors (including diagonals). TODO: example images.
                    </p>
                    <h3>Challenges</h3>
                    <p>
                        A move can be challenged by any player. The challenge can be because the player believes the
                        previous move either completed a word, or cannot complete a word, in the row or column the most
                        recent turn was made in. Remember that words being built must start at the edges. (TODO:
                        examples).
                    </p>
                </div>
            </Dialog>
        </div>
    );
};

export default HowToPlay;
