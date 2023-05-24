import classNames from 'classnames';
import styles from './blueprint.module.scss';
import { Button } from '@blueprintjs/core';

export interface BlueprintProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-blueprints-and-templates
 */
export const Blueprint = ({ className }: BlueprintProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Button />
            Blueprint
        </div>
    );
};
