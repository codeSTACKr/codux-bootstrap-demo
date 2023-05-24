import classNames from 'classnames';
import styles from './alert-message.module.scss';
import Alert from 'react-bootstrap/Alert';

export interface AlertMessageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-alert-messages-and-templates
 */

export const AlertMessage = ({ className }: AlertMessageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Alert variant={'warning'} dismissible={true}>
                This is a simple info alert - check it out!
            </Alert>
        </div>
    );
};
