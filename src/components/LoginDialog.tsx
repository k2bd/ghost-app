import { Button, Classes, Dialog, FormGroup, InputGroup } from '@blueprintjs/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginGuest } from '../redux/player/actions';
import { RootState } from '../redux/store';

type Props = {
    enabled: boolean;
};

const LoginDialog: React.FC<Props> = ({ enabled }: Props) => {
    const { loginStatus } = useSelector((state: RootState) => state.player);
    const [guestName, setGuestName] = useState<string>('');
    const dispatch = useDispatch();

    const guestLogin = () => {
        dispatch(loginGuest({ name: guestName }));
    };

    return (
        <Dialog isOpen={enabled} title="Login" isCloseButtonShown={false} icon="user">
            <div className={Classes.DIALOG_BODY}>
                <form onSubmit={() => guestLogin()}>
                    <FormGroup label="Login as Guest">
                        <div className={Classes.FORM_CONTENT}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <InputGroup
                                    placeholder="Display name"
                                    onChange={(event) => setGuestName(event.target.value)}
                                    value={guestName}
                                    fill={true}
                                />
                                <Button
                                    onClick={() => guestLogin()}
                                    icon="log-in"
                                    disabled={guestName.length < 3}
                                    loading={loginStatus === 'loggingIn'}
                                />
                            </div>
                        </div>
                    </FormGroup>
                </form>
            </div>
        </Dialog>
    );
};

export default LoginDialog;
