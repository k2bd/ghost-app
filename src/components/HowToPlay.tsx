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
                    <h2>{'Overview'}</h2>
                    <p>
                        {
                            "2D Ghost is a competitive word building game in which players take turns placing letters on a board while trying to avoid completing 4+ letter words horizontally or vertically. As the name suggests it's a 2D extension of the existing word game "
                        }
                        <a href="https://en.wikipedia.org/wiki/Ghost_(game)" target="_blank" rel="noreferrer">
                            Ghost
                        </a>
                        {'.'}
                    </p>
                    <p>
                        {
                            'A turn consists of either placing a tile on an available square, or challenging the previous move.'
                        }
                    </p>
                    <h2>{'Tile placement'}</h2>
                    <p>
                        {
                            'A new tile can be placed either at the first free tile along the horizontal or vertical edges, or at any tile that has at least 3 filled neighbors (including diagonals).'
                        }
                    </p>
                    <p>
                        {
                            'Playable tiles are highlighted in yellow, and the most recently played tile is coloured blue.'
                        }
                    </p>
                    <img src="https://imgur.com/C9ME23a.png" />
                    <p>
                        {
                            "In this example, the tile to the right of the 'N' and below the 'E' are playable because they're the next free tiles on the top and left borders of the board, and the tile to the right of the 'X' is playable because it has 3 neighbors (the 'X', 'A', and 'N'). No other tiles are playable."
                        }
                    </p>
                    <p>
                        {
                            "When you make a move, you must be moving towards the completion of a 4+ letter word in both the row and column that your move is made in. In the above example, the player who placed the most recent move (the 'X') must be thinking of valid 4+ letter words starting with 'AX' and 'EX'. However, players must not actually complete 4+ letter words. Failing either condition leaves you vulnerable to a challenge. Of course, if you can't think of any valid moves, bluffing may be your only option."
                        }
                    </p>
                    <h2>{'Challenges'}</h2>
                    <p>
                        {
                            "If the turn player believes the previous move either completed a word, or cannot complete a word, in the row or column the most recent turn was made in, they may issue a challenge. Remember the rules in the 'Valid Words' section when making, responding to, and voting on challenges."
                        }
                    </p>
                    <p>
                        {
                            "When a 'No Valid Words' challenge is made, the challenged player is given an opportunity to respond with what they believe to be valid words in the row and column their move was made in. 'Completed Word' challenges go straight to a vote."
                        }
                    </p>
                    <p>
                        {
                            'When a challenge has been made, players must vote on whether the challenge is successful. If it is, the challenged player will be removed from the game. If it fails, the challenger is removed. A challenge must get at least 50% of the votes to pass.'
                        }
                    </p>
                    <h2>{'Valid Moves'}</h2>
                    <h3>{'Only 4+ letter words count'}</h3>
                    <p>
                        {
                            "Only words that are 4 letters or more are more count as completed words. It's OK for a board to contain the words 'A', 'AN', and 'ANT', but not 'ANTS'."
                        }
                    </p>
                    <h3>{'All words start at the edges'}</h3>
                    <p>
                        {
                            "All words in 2D Ghost start at the edge of the board. So, if a board has '_,_,_,F,A,C' in a row or column, no word would be completed by playing an 'E' at the end, and this would be a valid move towards the word 'surface'."
                        }
                    </p>
                    <h3>{"The board doesn't have to be fully solvable"}</h3>
                    <p>
                        {
                            "Quite often a move is valid for the row and column it's played in, but makes some other part of the board impossible to solve. This is fine, and can be used to strategically exclude moves previously accessible to your opponents."
                        }
                    </p>
                    <h3>{"Invalid moves that don't get challenged are fine"}</h3>
                    <p>
                        {
                            "If a move was invalid, in that it either completed a 4+ letter word, or it was impossible to complete words in the row or column, and this went unchallenged, that's fine and the game continues. Bluffing is a legal strategy."
                        }
                    </p>
                    <h2>{'Misc'}</h2>
                    <h3>{'Dictionary Use'}</h3>
                    <p>
                        {
                            "Your group may choose to select a dictionary to be the judge of valid words in your game. If you do, this should be consulted only during challenge votes, and only to evaluate the challenge. You shouldn't use a dictionary when making moves or when writing in answers to a 'No Valid Moves' challenge."
                        }
                    </p>
                </div>
            </Dialog>
        </div>
    );
};

export default HowToPlay;
